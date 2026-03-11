import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { localManagingCommitteeHero } from '../common/data/heroData';

const LocalManagingCommittee = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const committeeMembers = [
        { srNo: 1, name: "Mr. Rajaram Pangavhane(Patil)", designation: "Chairman" },
        { srNo: 2, name: "Er. Avinash D. Shirode", designation: "Member" },
        { srNo: 3, name: "Dr. Dilip R. Pangavane", designation: "Member" },
        { srNo: 4, name: "Dr. B. E. Kushare", designation: "Member" },
        { srNo: 5, name: "Dr. Sunil Y. Kute", designation: "Member" },
        { srNo: 6, name: "Er. Vivek N. Bhambare", designation: "Member" },
        { srNo: 7, name: "Mr. Pramod D. More", designation: "Member" },
        { srNo: 8, name: "Mr. Ashok S. Sonawane", designation: "Member" },
        { srNo: 9, name: "Dr. Hari. Narayan. Kudal", designation: "Member Secretary" },
    ];

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...localManagingCommitteeHero} />

            {/* COMMITTEE TABLE SECTION */}
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
                        className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
                    >
                        <h2 className="text-3xl font-bold text-center text-[#007bff] mb-10">
                            Local Managing Committee
                        </h2>

                        <div className="overflow-x-auto rounded-lg border border-gray-200">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#212529] text-white">
                                        <th className="py-4 px-6 font-semibold uppercase text-sm border-r border-gray-700">Sr. No.</th>
                                        <th className="py-4 px-6 font-semibold uppercase text-sm border-r border-gray-700">Name of Members</th>
                                        <th className="py-4 px-6 font-semibold uppercase text-sm">Designation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {committeeMembers.map((member, index) => (
                                        <motion.tr
                                            key={member.srNo}
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : {}}
                                            transition={{ delay: index * 0.04, duration: 0.25 }}
                                            className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200`}
                                        >
                                            <td className="py-4 px-6 text-gray-700 border-r border-gray-200">{member.srNo}</td>
                                            <td className="py-4 px-6 text-gray-800 font-medium border-r border-gray-200">{member.name}</td>
                                            <td className="py-4 px-6 text-gray-700">{member.designation}</td>
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

export default LocalManagingCommittee;
