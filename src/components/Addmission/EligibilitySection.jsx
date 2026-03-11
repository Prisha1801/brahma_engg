// Recursive component to render nested bullet points
const RenderPoints = ({ points, depth = 0 }) => {
  const listStyles = [
    "list-disc pl-6",
    "list-[circle] pl-6",
    "list-[square] pl-6",
  ];

  return (
    <ul className={`${listStyles[Math.min(depth, 2)]} space-y-1 mt-1 text-gray-700`}>
      {points.map((point, index) => {
        const isString = typeof point === "string";
        const text = isString ? point : point.text;
        const subPoints = isString ? null : point.subPoints;

        return (
          <li key={index}>
            <span>{text}</span>
            {subPoints && subPoints.length > 0 && (
              <RenderPoints points={subPoints} depth={depth + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const EligibilitySection = ({ title, description, points, table, tableTitle, note, noteLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 mb-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{title}</h2>

      {description && (
        <p className="text-gray-500 mb-4 text-sm">{description}</p>
      )}

      {/* Bullet Points */}
      <div className="mb-6">
        <RenderPoints points={points} depth={0} />
      </div>

      {/* Table Title */}
      {tableTitle && (
        <p className="text-gray-600 font-medium mb-2">{tableTitle}</p>
      )}

      {/* Table */}
      {table && (
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead className="bg-blue-800 text-white">
              <tr>
                {table.headers.map((header, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b hover:bg-gray-50">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-gray-700 text-sm">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Note */}
      {note && (
        <p className="text-sm text-gray-600 mt-4">
          <span className="font-semibold text-blue-700">Note:</span>{" "}
          <span className="text-blue-600">{note}</span>
          {noteLink && (
            <>
              {" "}Visit{" "}
              <a
                href={noteLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {noteLink.text}
              </a>
            </>
          )}
        </p>
      )}
    </div>
  );
};

export default EligibilitySection;