import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { FeeStructureHero } from '../components/common/data/heroData';
import { engineeringFeesData, mbaFeesData } from '../data/data';

const FeesRegulatoryAuthority = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <HeroSection {...FeeStructureHero} />

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
      >
        {/* Engineering Fee Structure Table */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Fee Structure - Engineering</h2>
          
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">Year</th>
                  <th className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">First Year</th>
                  <th className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">Direct Second Year</th>
                  <th className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">Status of Approval</th>
                  <th className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">Date of Meeting</th>
                </tr>
              </thead>
              <tbody>
                {engineeringFeesData.map((row, index) => (
                  <motion.tr
                    key={row.year}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.03, duration: 0.25 }}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 text-center border border-gray-200">{row.year}</td>
                    <td className="px-4 py-3 text-center border border-gray-200">{row.firstYear}</td>
                    <td className="px-4 py-3 text-center border border-gray-200">{row.directSecondYear}</td>
                    <td className="px-4 py-3 text-center border border-gray-200">{row.status}</td>
                    <td className="px-4 py-3 text-center border border-gray-200">
                      <a
                        href={row.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {row.meetingDate}
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* MBA Fee Structure Table */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Fee Structure - MBA</h2>
          
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">Year</th>
                  <th className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">First Year</th>
                  <th className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">Status of Approval</th>
                  <th className="px-4 py-3 text-sm font-semibold text-center border border-blue-800">Date of Meeting</th>
                </tr>
              </thead>
              <tbody>
                {mbaFeesData.map((row, index) => (
                  <motion.tr
                    key={row.year}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.03, duration: 0.25 }}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 text-center border border-gray-200">{row.year}</td>
                    <td className="px-4 py-3 text-center border border-gray-200">{row.firstYear}</td>
                    <td className="px-4 py-3 text-center border border-gray-200">{row.status}</td>
                    <td className="px-4 py-3 text-center border border-gray-200">
                      <a
                        href={row.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {row.meetingDate}
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Fees Structure in Marathi Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="bg-gray-100 rounded-lg p-6 mt-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-bold text-blue-600">Fees Structure In Marathi</h3>
          </div>
          
          <a
            href="/pdf/fees/fees-in-marathi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download PDF
          </a>
        </motion.div>

      </motion.div>
    </>
  );
};

export default FeesRegulatoryAuthority;
