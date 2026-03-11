import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FeesStructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-10"
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45 }}
    >
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="text-3xl font-semibold text-blue-900 mb-6"
      >
        Fee Structure for AY 2025–26
      </motion.h2>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="overflow-x-auto"
      >
        <table className="w-full border border-gray-300 border-collapse text-center">

          <thead>
            {/* First Header Row */}
            <tr className="bg-blue-800 text-white">
              <th
                rowSpan="2"
                className="px-6 py-4 border border-gray-400 text-lg font-semibold"
              >
                Category
              </th>
              <th
                colSpan="2"
                className="px-6 py-4 border border-gray-400 text-lg font-semibold"
              >
                Total Fees Payable by Student (Rs.)
              </th>
            </tr>

            {/* Second Header Row */}
            <tr className="bg-blue-800 text-white">
              <th className="px-6 py-4 border border-gray-400 font-medium">
                F.E. & D.S.E.
              </th>
              <th className="px-6 py-4 border border-gray-400 font-medium">
                M.B.A. / DSY M.B.A.
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-gray-100">
              <td className="px-6 py-4 border border-gray-300 text-left">
                SC / ST
              </td>
              <td className="px-6 py-4 border border-gray-300">0</td>
              <td className="px-6 py-4 border border-gray-300">0</td>
            </tr>

            <tr className="bg-gray-50">
              <td className="px-6 py-4 border border-gray-300 text-left">
                SBC / NT / DT / VJ / TFW / Girls Admitted through CAP
              </td>
              <td className="px-6 py-4 border border-gray-300">11,327</td>
              <td className="px-6 py-4 border border-gray-300">9,941</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="px-6 py-4 border border-gray-300 text-left">
                OBC / EBC / SEBC / EWS
              </td>
              <td className="px-6 py-4 border border-gray-300">52,664</td>
              <td className="px-6 py-4 border border-gray-300">46,220</td>
            </tr>

            <tr className="bg-gray-200">
              <td className="px-6 py-4 border border-gray-300 text-left font-medium">
                Open, General Category (Non EBC) / Out of Maharashtra
              </td>
              <td className="px-6 py-4 border border-gray-300 font-medium">
                94,000
              </td>
              <td className="px-6 py-4 border border-gray-300 font-medium">
                82,500
              </td>
            </tr>
          </tbody>

        </table>
      </motion.div>

      {/* Bottom Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-10 border border-gray-500 rounded-lg p-6"
      >
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          Discover excellence in education and innovation.
        </h3>

        <p className="mb-4">
          Hostel fees Rs. 50,000 per year including Mess facility.
        </p>

        <p className="mb-2 font-medium">Mess facility includes:</p>

        <ul className="list-disc list-inside space-y-1">
          <li>Breakfast & Tea: Morning & Evening</li>
          <li>Lunch & Dinner</li>
        </ul>
      </motion.div>

    </motion.div>
  );
};

export default FeesStructure;