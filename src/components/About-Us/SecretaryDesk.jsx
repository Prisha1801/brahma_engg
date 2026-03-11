import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { secretaryHero } from '../common/data/heroData';
import { aboutAPI } from '../../services/api';
import SecretaryImage from '../../assets/board-members/Mr. Gaurav R. Pangavhane.jpeg';

const SecretaryDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const [secretaryData, setSecretaryData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSecretaryData = async () => {
            try {
                const response = await aboutAPI.getGeneralSecretaryDesk();
                setSecretaryData(response.data?.general_secretary || {});
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch secretary data:', error);
                setLoading(false);
            }
        };
        fetchSecretaryData();
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            {loading ? (
                <HeroSection {...secretaryHero} />
            ) : (
                <HeroSection 
                    backgroundImage={secretaryData.hero_image ? `https://engineering.brahmavalley.edu.in/uploads/${secretaryData.hero_image}` : secretaryHero.backgroundImage}
                    title={secretaryData.hero_title || secretaryHero.title}
                    subtitle={secretaryData.hero_subtitle || secretaryHero.subtitle}
                    overlay={true}
                />
            )}

            {/* SECRETARY SECTION */}
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
                            <p className="text-gray-500">Loading secretary's message...</p>
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
                                        src={secretaryData.image || SecretaryImage}
                                        alt="Secretary"
                                        className="w-full max-h-[450px] object-contain rounded-xl shadow-md"
                                    />

                                    <div className="mt-6">
                                        <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                            {secretaryData.gsname || 'Mr. Gaurav R. Pangavhane'}
                                        </h4>
                                        <p className="text-gray-600 mt-2">{secretaryData.gsdesignation || 'General Secretary'}</p>
                                        <p className="text-gray-500 text-sm mt-1">
                                            {secretaryData.gsaddress || 'Nashik Gramin Shikshan Prasarak Mandal'}
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
                                        {secretaryData.title || 'From The Secretary\'s Desk'}
                                    </h2>
                                    <h3 className="text-xl font-semibold text-[#0b2c4d] mb-4">
                                        {secretaryData.subtitle || ''}
                                    </h3>
                                    <div 
                                        className="text-gray-600 leading-8 text-justify"
                                        dangerouslySetInnerHTML={{ __html: secretaryData.overview || 'Welcome to <strong>Brahma Valley Engineering & Research Institute</strong>. Our vision is to provide quality technical education that empowers students to excel in their careers.' }}
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

export default SecretaryDesk;