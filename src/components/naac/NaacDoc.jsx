import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { NAACDocHero } from '../common/data/heroData';
import { naacAPI } from '../../services/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://engineering.brahmavalley.edu.in/api';

const resolveFileUrl = (value) => {
  if (!value) return '';
  if (typeof value !== 'string') return '';
  if (/^https?:\/\//i.test(value)) {
    return value.replace('/uploads/public/', '/public/');
  }
  const normalized = value.replace(/^\/?uploads\//i, '');
  try {
    return new URL(normalized, API_BASE_URL).toString();
  } catch {
    return normalized;
  }
};

const humanizeHeader = (value) => {
  if (!value) return '';
  return String(value)
    .replace(/_/g, '-')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const slugifyKey = (value) => {
  if (!value) return '';
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const pickFirst = (...values) => values.find((value) => value !== undefined && value !== null && value !== '');

const normalizeDoc = (doc) => {
  if (!doc || typeof doc !== 'object') return null;
  const label = pickFirst(
    doc.year,
    doc.title,
    doc.name,
    doc.label,
    doc.document_year,
    doc.document_title
  );
  const rawFile = pickFirst(
    doc.pdf,
    doc.file,
    doc.document,
    doc.url,
    doc.path,
    doc.document_file,
    doc.file_path
  );
  return {
    year: label || 'Document',
    pdf: resolveFileUrl(rawFile),
  };
};

const buildNaacState = (payload) => {
  const documentsMap = {};
  const inactiveItems = new Set();
  const columns = [];
  const columnMap = new Map();

  const ensureColumn = (key, label) => {
    if (!columnMap.has(key)) {
      const column = {
        key,
        label: label || humanizeHeader(key),
        items: [],
      };
      columnMap.set(key, column);
      columns.push(column);
    }
    return columnMap.get(key);
  };

  const ensureItem = (column, itemKey) => {
    if (!column.items.includes(itemKey)) {
      column.items.push(itemKey);
    }
  };

  const addDocs = (criteriaKey, itemKey, docs, activeFlag) => {
    if (!documentsMap[criteriaKey]) documentsMap[criteriaKey] = {};
    if (!documentsMap[criteriaKey][itemKey]) documentsMap[criteriaKey][itemKey] = [];

    const normalizedDocs = (Array.isArray(docs) ? docs : [])
      .map(normalizeDoc)
      .filter(Boolean);

    documentsMap[criteriaKey][itemKey].push(...normalizedDocs);

    if (activeFlag === false || normalizedDocs.length === 0) {
      inactiveItems.add(itemKey);
    }
  };

  const detailsByCriteria = payload?.data?.details_by_criteria || payload?.details_by_criteria || null;
  const flatDetails = Array.isArray(payload?.data?.details)
    ? payload.data.details
    : Array.isArray(payload?.details)
      ? payload.details
      : [];

  if (detailsByCriteria && typeof detailsByCriteria === 'object') {
    const allDetails = flatDetails.length > 0 ? flatDetails : Object.values(detailsByCriteria).flat();
    const byId = new Map();
    allDetails.forEach((item) => {
      if (item && item.id !== undefined && item.id !== null) {
        byId.set(String(item.id), item);
      }
    });

    Object.entries(detailsByCriteria).forEach(([criteriaLabel, items]) => {
      const criteriaKey = slugifyKey(criteriaLabel);
      if (!criteriaKey) return;
      const column = ensureColumn(criteriaKey, criteriaLabel);

      (Array.isArray(items) ? items : []).forEach((item) => {
        const parentId = pickFirst(item.parent_id, item.parentId);
        const title = pickFirst(item.title, item.name);
        if (!title) return;

        if (!parentId) {
          const itemKeyString = String(title);
          ensureItem(column, itemKeyString);
        }
      });
    });

    // Attach child documents from the flat list
    flatDetails.forEach((item) => {
      const parentId = pickFirst(item.parent_id, item.parentId);
      if (!parentId) return;
      const criteriaLabel = pickFirst(item.criteria, item.criteria_label, item.section, item.group);
      const criteriaKey = slugifyKey(criteriaLabel);
      if (!criteriaKey) return;
      const parent = byId.get(String(parentId));
      const parentTitle = parent ? pickFirst(parent.title, parent.name) : null;
      if (!parentTitle) return;
      const column = ensureColumn(criteriaKey, criteriaLabel);
      const itemKeyString = String(parentTitle);
      ensureItem(column, itemKeyString);
      addDocs(criteriaKey, itemKeyString, [item], item.active);
    });

    // Mark top-level items inactive if they have no documents
    columns.forEach((col) => {
      col.items.forEach((itemKey) => {
        const docs = documentsMap?.[col.key]?.[itemKey] || [];
        if (docs.length === 0) inactiveItems.add(itemKey);
      });
    });

    return { columns, documentsMap, inactiveItems };
  }

  const criteriaGroups = Array.isArray(payload?.criteria)
    ? payload.criteria
    : Array.isArray(payload?.data?.criteria)
      ? payload.data.criteria
      : null;

  if (criteriaGroups) {
    criteriaGroups.forEach((group) => {
      const criteriaKey = pickFirst(
        group.key,
        group.slug,
        group.criteria,
        group.code,
        group.name,
        group.id
      );
      if (!criteriaKey) return;
      const column = ensureColumn(String(criteriaKey), pickFirst(group.label, group.title, group.name));
      const items = Array.isArray(group.items)
        ? group.items
        : Array.isArray(group.subCriteria)
          ? group.subCriteria
          : Array.isArray(group.sub_criteria)
            ? group.sub_criteria
            : Array.isArray(group.parameters)
              ? group.parameters
              : [];

      items.forEach((item) => {
        const itemKey = pickFirst(
          item.key,
          item.code,
          item.criteria,
          item.title,
          item.name,
          item.value,
          item.metric
        );
        if (!itemKey) return;
        const itemKeyString = String(itemKey);
        ensureItem(column, itemKeyString);
        const docs = pickFirst(item.documents, item.docs, item.files, item.pdfs, item.data, []);
        const activeFlag = pickFirst(item.active, item.is_active);
        addDocs(String(criteriaKey), itemKeyString, docs, activeFlag);
      });
    });
  } else {
    const list = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.documents)
        ? payload.documents
        : Array.isArray(payload?.naac_documents)
          ? payload.naac_documents
          : Array.isArray(payload?.items)
            ? payload.items
            : [];

    list.forEach((record) => {
      const criteriaKey = pickFirst(
        record.criteria,
        record.criteria_key,
        record.criteria_slug,
        record.section,
        record.category,
        record.group
      );
      const itemKey = pickFirst(
        record.sub_criteria,
        record.item,
        record.metric,
        record.criteria_no,
        record.title,
        record.name
      );
      if (!criteriaKey || !itemKey) return;

      const column = ensureColumn(String(criteriaKey), pickFirst(record.criteria_label, record.criteria_title));
      const itemKeyString = String(itemKey);
      ensureItem(column, itemKeyString);

      if (record.documents || record.docs || record.files || record.pdfs) {
        addDocs(String(criteriaKey), itemKeyString, pickFirst(record.documents, record.docs, record.files, record.pdfs), record.active);
      } else if (record.pdf || record.file || record.document || record.url) {
        addDocs(String(criteriaKey), itemKeyString, [record], record.active);
      } else {
        addDocs(String(criteriaKey), itemKeyString, [], record.active);
      }
    });
  }

  return { columns, documentsMap, inactiveItems };
};

const NaacDoc = () => {
  const { criteria, itemId } = useParams();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [columns, setColumns] = useState([]);
  const [documentsMap, setDocumentsMap] = useState({});
  const [inactiveItems, setInactiveItems] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    const fetchNaacDocs = async () => {
      try {
        const response = await naacAPI.getNaacDocuments();
        const payload = response?.data ?? response;
        const nextState = buildNaacState(payload || {});
        if (!isMounted) return;
        setColumns(nextState.columns);
        setDocumentsMap(nextState.documentsMap);
        setInactiveItems(nextState.inactiveItems);
        setLoading(false);
      } catch (err) {
        if (!isMounted) return;
        setError('Failed to load NAAC documents.');
        setLoading(false);
      }
    };
    fetchNaacDocs();
    return () => {
      isMounted = false;
    };
  }, []);

  // â”€â”€ Detail View â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  if (criteria && itemId) {
    if (loading) {
      return (
        <>
          <HeroSection {...NAACDocHero} />
          <motion.div
            ref={ref}
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <button
              onClick={() => navigate('/naac/naac-documents')}
              className="mb-6 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
               Back
            </button>
            <div className="text-center text-gray-500 py-12">Loading documents...</div>
          </motion.div>
        </>
      );
    }

    if (error) {
      return (
        <>
          <HeroSection {...NAACDocHero} />
          <motion.div
            ref={ref}
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <button
              onClick={() => navigate('/naac/naac-documents')}
              className="mb-6 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <div className="text-center text-gray-500 py-12">{error}</div>
          </motion.div>
        </>
      );
    }

    // Block access if item is inactive
    const docsForItem = documentsMap?.[criteria]?.[itemId] || [];
    if (inactiveItems.has(itemId) || docsForItem.length === 0) {
      return (
        <>
          <HeroSection {...NAACDocHero} />
          <motion.div
            ref={ref}
            className="container mx-auto px-4 py-8"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <button
              onClick={() => navigate('/naac/naac-documents')}
              className="mb-6 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <div className="text-center text-gray-500 py-12">No documents available.</div>
          </motion.div>
        </>
      );
    }

    const documents = docsForItem;

    return (
      <>
        <HeroSection {...NAACDocHero} />
        <motion.div
          ref={ref}
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
        >

          <button
            onClick={() => navigate('/naac/naac-documents')}
            className="mb-6 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            Back
          </button>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-2xl font-bold text-slate-900 mb-6"
          >
            {itemId}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <table className="w-full">
              <tbody>
                {documents.length > 0 ? (
                  documents.map((doc, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.04, duration: 0.25 }}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                    >
                      <td className="px-6 py-4 text-slate-900 font-medium">{doc.year}</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href={doc.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded hover:bg-blue-50 transition-colors text-sm"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100-2H6V7h5a1 1 0 011 1v5h2V8a3 3 0 00-3-3H6z" clipRule="evenodd" />
                          </svg>
                          View PDF
                        </a>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="px-6 py-8 text-center text-gray-400">
                      No documents found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </motion.div>

        </motion.div>
      </>
    );
  }

  // â”€â”€ Main Table View â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const maxRows = Math.max(0, ...columns.map(col => col.items.length));

  const renderCell = (item, colKey) => {
    // Empty cell
    if (!item) {
      return <span className="text-gray-400">-</span>;
    }
    const hasDocs = (documentsMap?.[colKey]?.[item] || []).length > 0;
    // Inactive: plain black text, no link, no cursor pointer
    if (inactiveItems.has(item) || !hasDocs) {
      return (
        <span
          style={{ color: '#1e293b', cursor: 'default', pointerEvents: 'none' }}
          className="font-medium"
        >
          {item}
        </span>
      );
    }
    // Active: blue clickable link
    return (
      <Link
        to={`/naac/naac-documents/${colKey}/${item}`}
        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      >
        {item}
      </Link>
    );
  };

  return (
    <>
      <HeroSection {...NAACDocHero} />
      <motion.div
        ref={ref}
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
      >

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-3xl font-bold text-center text-slate-900 mb-8"
        >
          NAAC Documents
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white">
                {columns.map((header, index) => (
                  <th key={index} className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">
                    {header.label || humanizeHeader(header.key)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={Math.max(1, columns.length)} className="px-6 py-8 text-center text-gray-500">
                    Loading documents...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={Math.max(1, columns.length)} className="px-6 py-8 text-center text-gray-500">
                    {error}
                  </td>
                </tr>
              ) : maxRows === 0 ? (
                <tr>
                  <td colSpan={Math.max(1, columns.length)} className="px-6 py-8 text-center text-gray-400">
                    No documents available.
                  </td>
                </tr>
              ) : (
                Array.from({ length: maxRows }).map((_, rowIndex) => (
                <motion.tr
                  key={rowIndex}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: rowIndex * 0.02, duration: 0.25 }}
                  className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
                  {columns.map((col, colIndex) => {
                    const item = col.items[rowIndex];
                    return (
                      <td key={colIndex} className="px-4 py-3 text-center border border-gray-200">
                        {renderCell(item, col.key)}
                      </td>
                    );
                  })}
                </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </motion.div>
    </>
  );
};

export default NaacDoc;
