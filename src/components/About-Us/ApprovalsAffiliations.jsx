import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { approvalsAffiliationsHero } from '../common/data/heroData';

const ApprovalsAffiliations = () => {
    const [activeTab, setActiveTab] = useState('aicte');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const aicteData = [
        { srNo: 1, year: "2008-09" },
        { srNo: 2, year: "2009-10" },
        { srNo: 3, year: "2010-11" },
        { srNo: 4, year: "2011-12" },
        { srNo: 5, year: "2012-13" },
        { srNo: 6, year: "2013-14" },
        { srNo: 7, year: "2014-15" },
        { srNo: 8, year: "2015-16" },
        { srNo: 9, year: "2016-17" },
        { srNo: 10, year: "2018-19" },
        { srNo: 11, year: "2020-21" },
        { srNo: 12, year: "2021-22" },
        { srNo: 13, year: "2022-23" },
        { srNo: 14, year: "2023-24" },
        { srNo: 15, year: "2024-25" },
    ];

    const sppuData = [
        { srNo: 1, year: "2008-09" },
        { srNo: 2, year: "2009-10" },
        { srNo: 3, year: "2010-11" },
        { srNo: 4, year: "2011-12" },
        { srNo: 5, year: "2012-13" },
        { srNo: 6, year: "2013-14" },
        { srNo: 7, year: "2014-15" },
        { srNo: 8, year: "2015-16" },
        { srNo: 9, year: "2016-17" },
        { srNo: 10, year: "2017-18" },
        { srNo: 11, year: "2018-19", fileName: "2018-2019" },
        { srNo: 12, year: "2019-20" },
        { srNo: 13, year: "2020-21" },
        { srNo: 14, year: "2021-22" },
        { srNo: 15, year: "2022-23" },
        { srNo: 16, year: "2024-25" },
    ];

    const handleDownload = (folder, fileName) => {
        const link = `/pdf/${folder}/${fileName}.pdf`;
        window.open(link, '_blank');
    };

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...approvalsAffiliationsHero} />

            {/* CONTENT SECTION */}
            <motion.section
                ref={ref}
                className="bg-gray-50 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-6xl mx-auto px-6">

                    {/* TABS */}
                    <div className="flex border-b border-gray-200 mb-8 justify-center">
                        <button
                            className={`px-8 py-3 font-semibold text-sm transition-all duration-200 uppercase tracking-wider ${activeTab === 'aicte'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-blue-400'
                                }`}
                            onClick={() => setActiveTab('aicte')}
                        >
                            AICTE Approval
                        </button>
                        <button
                            className={`px-8 py-3 font-semibold text-sm transition-all duration-200 uppercase tracking-wider ${activeTab === 'sppu'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-blue-400'
                                }`}
                            onClick={() => setActiveTab('sppu')}
                        >
                            SPPU Affiliation
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="p-6 border-b border-gray-100 bg-white">
                            <h2 className="text-2xl font-bold text-center text-[#0b2c4d]">
                                {activeTab === 'aicte' ? 'AICTE APPROVAL Details' : 'SPPU AFFILIATION Details'}
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#1e40af] text-white">
                                        <th className="py-4 px-8 font-semibold uppercase text-sm border-r border-blue-700 w-24 text-center">Sr. No.</th>
                                        <th className="py-4 px-8 font-semibold uppercase text-sm border-r border-blue-700">Academic Year</th>
                                        <th className="py-4 px-8 font-semibold uppercase text-sm text-center">Document</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(activeTab === 'aicte' ? aicteData : sppuData).map((item, index) => (
                                        <motion.tr
                                            key={item.srNo}
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : {}}
                                            transition={{ delay: index * 0.02, duration: 0.25 }}
                                            className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'} border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200`}
                                        >
                                            <td className="py-4 px-8 text-gray-700 border-r border-gray-100 text-center font-medium">{item.srNo}</td>
                                            <td className="py-4 px-8 text-blue-900 font-semibold border-r border-gray-100">
                                                {activeTab === 'aicte' ? `AICTE ${item.year}` : item.year}
                                            </td>
                                            <td className="py-4 px-8 text-center">
                                                <button
                                                    onClick={() => handleDownload(activeTab === 'aicte' ? 'aicte-approval' : 'sppu-affiliation', item.fileName || item.year)}
                                                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                                                >
                                                    Download PDF
                                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default ApprovalsAffiliations;
