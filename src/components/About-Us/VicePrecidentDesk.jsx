import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { vicePresidentDeskHero } from "../common/data/heroData";
import VicePresidentImage from '../../assets/board-members/Dr.Dhanisha G. Pangavhane.png';

const VicePresidentDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...vicePresidentDeskHero} />

            {/* VICE PRESIDENT SECTION */}
            <motion.section
                ref={ref}
                className="bg-gray-50 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-7xl mx-auto px-6">
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
                                    src={VicePresidentImage}
                                    alt="Vice President"
                                    className="w-full max-h-[450px] object-contain rounded-xl shadow-md"
                                />

                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                        Dr. Dhanisha G. Pangavhane (Patil)
                                    </h4>
                                    <p className="text-gray-600 mt-2">Vice President</p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Nashik Gramin Shikshan Prasarak Mandal
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
                                    From The Vice President's Desk
                                </h2>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Welcome to <strong>Brahma Valley Educational Campus</strong>,
                                    where education meets values and dreams take flight.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Our commitment is to provide a world-class learning environment that fosters innovation,
                                    critical thinking, and ethical values. At Brahma Valley, we believe in the transformative
                                    power of education to change lives and build a better future.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    We strive to equip our students with not only technical expertise but also the
                                    leadership qualities and social responsibility required in today's dynamic world.
                                    Our campus is a hub of creativity and academic excellence, where every student is
                                    encouraged to reach their full potential.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify">
                                    I invite you to explore the opportunities at Brahma Valley and join us in our mission
                                    to create a generation of empowered and inspired professionals.
                                </p>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default VicePresidentDesk;
