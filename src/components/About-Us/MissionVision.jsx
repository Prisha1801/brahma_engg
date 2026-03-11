import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { missionHero } from '../common/data/heroData';

const MissionVision = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...missionHero} />

            {/* VISION & MISSION SECTION */}
            <motion.section
                ref={ref}
                id="vision-mission"
                className="bg-gray-100 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, delay: 0.1 }}
                            className="rounded-3xl text-white p-8 shadow-lg hover:scale-105 transition duration-300"
                            style={{
                                background: "linear-gradient(135deg, #008080, #006666)",
                            }}
                        >
                            <h4 className="text-2xl font-semibold mb-4">
                                Our Vision
                            </h4>
                            <p className="leading-8 text-justify">
                                To create a center of excellence in the field of Technical Education by holistically developing future Engineers, Technocrats, and Achievers with the Right Knowledge, Skills, and Sttitudes towards the Profession and Life.
                            </p>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, delay: 0.2 }}
                            className="rounded-3xl text-white p-8 shadow-lg hover:scale-105 transition duration-300"
                            style={{
                                background: "linear-gradient(135deg, #005f73, #0a9396)",
                            }}
                        >
                            <h4 className="text-2xl font-semibold mb-4">
                                Our Mission
                            </h4>
                            <p className="leading-8 text-justify">
                                To Impart Education to students to become the Best Professional minds and Entrepreneurs who will lead their fields successfully. We aim to foster continuous Improvement, Innovation, and Personality Development while nurturing Physical Fitness and Social Responsibility.
                            </p>
                        </motion.div>

                        {/* Belief Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.45, delay: 0.3 }}
                            className="rounded-3xl text-white p-8 shadow-lg hover:scale-105 transition duration-300"
                            style={{
                                background: "linear-gradient(135deg, #005f73, #0a9396)",
                            }}
                        >
                            <h4 className="text-2xl font-semibold mb-4">
                                Our Belief
                            </h4>
                            <p className="leading-8 text-justify">
                                Statistics are the hard facts that back up your argument. Whether you're trying to persuade, Inform, or Entertain, Statistics can add weight to your writing and make your argument more convincing. I use statistics quite often to build authority and credibility in my writing. Statistics can be presented in various ways such as "According to, The Data shows, Research indicates, or Studies have shown." All of these starting phrases introduce statistics effectively.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default MissionVision;
