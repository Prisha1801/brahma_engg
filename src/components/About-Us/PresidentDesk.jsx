import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { presidentDeskHero } from '../common/data/heroData';
import { aboutAPI } from '../../services/api';

const PresidentDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const [presidentData, setPresidentData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPresidentData = async () => {
            try {
                const response = await aboutAPI.getPresidentDesk();
                // API returns {status: 200, success: true, data: {president: {...}}}
                setPresidentData(response.data?.president || {});
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch president data:', error);
                setLoading(false);
            }
        };
        fetchPresidentData();
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...presidentDeskHero} />

            {/* PRESIDENT SECTION */}
            <motion.section
                ref={ref}
                className="bg-gray-50 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    {loading ? (
                <div className="text-center py-12">
                    <p className="text-gray-500">Loading president's message...</p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="bg-white rounded-2xl shadow-md p-8 lg:p-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT SIDE - IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, delay: 0.15 }}
                            className="text-center"
                        >
                            <img
                                src={presidentData.image}
                                alt="President"
                                className="w-full max-h-[450px] object-cover rounded-xl shadow-md"
                            />

                            <div className="mt-6">
                                <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                    {presidentData.president_name}
                                </h4>
                                <p className="text-gray-600 mt-2">{presidentData.president_designation}</p>
                                <p className="text-gray-500 text-sm mt-1">
                                    {presidentData.address}
                                </p>
                            </div>
                        </motion.div>

                        {/* RIGHT SIDE - MESSAGE */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, delay: 0.2 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0b2c4d] mb-6">
                                {presidentData.heading}
                            </h2>

                            <div 
                                className="text-gray-600 leading-8 text-justify"
                                dangerouslySetInnerHTML={{ __html: presidentData.overview }}
                            />
                        </motion.div>

                    </div>
                </motion.div>
            )}
                </div>
            </motion.section>
        </>
    );
};

export default PresidentDesk;
