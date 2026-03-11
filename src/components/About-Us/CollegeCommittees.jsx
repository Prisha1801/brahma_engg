import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { collegeCommitteesHero } from '../common/data/heroData';
import { FaAddressCard } from 'react-icons/fa';

const CollegeCommittees = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const committees = [
        { srNo: 1, name: "Committee for SC ST" },
        { srNo: 2, name: "Minority Cell" },
        { srNo: 3, name: "Grievance Redressal Committee" },
        { srNo: 4, name: "Internal Compliant Committee" },
        { srNo: 5, name: "Anti-ragging Committee" },
        { srNo: 6, name: "Anti-Ragging Squad" },
        { srNo: 7, name: "OBC Cell" },
        { srNo: 8, name: "Academic Monitoring Committee" },
        { srNo: 9, name: "Building & Garden Committee" },
        { srNo: 10, name: "College Development Committee" },
        { srNo: 11, name: "Consultancy & Extension Committee" },
        { srNo: 12, name: "Cultural Committee" },
        { srNo: 13, name: "Electrical Safety Cell" },
        { srNo: 14, name: "Internal Quality Assurance Cell" },
        { srNo: 15, name: "Library Advisory Committee" },
        { srNo: 16, name: "Media Advertisement Committee" },
        { srNo: 17, name: "National Education Policy Committee" },
        { srNo: 18, name: "Student Council Committee" },
        { srNo: 19, name: "Student Grievance Redressal Committee" },
    ];

    const getPdfLink = (name) => {
        // Handle specific filename variations based on the existing file structure
        if (name === "Anti-ragging Committee") return "/pdf/college-Committees/Anti_ragging _Committee.pdf";
        if (name === "Anti-Ragging Squad") return "/pdf/college-Committees/Anti_Ragging_Squad.pdf";

        // General replacement: spaces and dashes to underscores
        const fileName = name.replace(/ /g, '_').replace(/-/g, '_');
        return `/pdf/college-Committees/${fileName}.pdf`;
    };

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...collegeCommitteesHero} />

            {/* COMMITTEES SECTION */}
            <motion.section
                ref={ref}
                className="bg-gray-50 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="bg-white p-6 border-b border-gray-100 flex items-center justify-center gap-3">
                            <FaAddressCard className="text-[#007bff] text-3xl" />
                            <h2 className="text-3xl font-bold text-[#007bff]">
                                College Committees
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#212529] text-white">
                                        <th className="py-4 px-6 font-semibold uppercase text-sm border-r border-gray-700 w-24 text-center">Sr. No.</th>
                                        <th className="py-4 px-6 font-semibold uppercase text-sm">Committee Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {committees.map((committee, index) => (
                                        <motion.tr
                                            key={committee.srNo}
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : {}}
                                            transition={{ delay: index * 0.04, duration: 0.25 }}
                                            className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200`}
                                        >
                                            <td className="py-4 px-6 text-gray-700 border-r border-gray-200 text-center font-medium">{committee.srNo}</td>
                                            <td className="py-4 px-6">
                                                <a
                                                    href={getPdfLink(committee.name)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#007bff] font-medium hover:underline hover:text-blue-700 transition-colors"
                                                >
                                                    {committee.name}
                                                </a>
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

export default CollegeCommittees;
