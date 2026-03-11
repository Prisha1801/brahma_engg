import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { boardMembersHero } from '../common/data/heroData';
import { aboutAPI } from '../../services/api';

const BoardMembers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await aboutAPI.getBoardMembers();
                // API returns {status: 200, success: true, data: {hero: {...}, members: [...]}}
                setMembers(response.data?.members || []);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch board members:', error);
                setLoading(false);
            }
        };
        fetchMembers();
    }, []);

    return (
        <div>
            {/* Reusable hero section */}
            <HeroSection {...boardMembersHero} />

            <motion.section
                ref={ref}
                className="bg-gray-100 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="text-center text-3xl md:text-4xl font-bold text-[#0b2c4d] mb-12"
                    >
                        Our Board Members
                    </motion.h2>

                    {loading ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500">Loading board members...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {members.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.45, delay: 0.1 + index * 0.05 }}
                                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-center p-6"
                                >
                                    <div className="w-full h-64 overflow-hidden rounded-xl mb-6">
                                        <img
                                            src={`https://engineering.brahmavalley.edu.in/uploads/${member.member_image}`}
                                            alt={member.member_name}
                                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                        />
                                    </div>
                                    <h5 className="text-lg font-semibold text-[#0b2c4d]">
                                        {member.member_name}
                                    </h5>
                                    <p className="text-gray-500 mt-2 text-sm">{member.member_designation}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.section>
        </div>
    );
};

export default BoardMembers;