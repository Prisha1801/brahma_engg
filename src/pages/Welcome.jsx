import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import collegeImage from '../assets/posters/college-image.jpg';

const Welcome = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section ref={ref} className="py-12 px-5 bg-white font-['Plus_Jakarta_Sans',_sans-serif]">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

                <motion.div
                    className="flex-1 min-w-[320px]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45 }}
                >
                    <span className="block text-sm font-bold text-[#0056b3] tracking-wider mb-2">
                        WELCOME TO OUR COLLEGE
                    </span>

                    <h2 className="text-3xl font-extrabold text-[#0056b3] leading-tight mb-4">
                        Brahma Valley College of Engineering & Research Institute
                    </h2>

                    <div className="w-12 h-1 bg-[#0056b3] mb-6"></div>

                    <p className="text-base leading-relaxed text-gray-700 mb-4 text-justify">
                        Brahma Valley Educational Campus is located on the outskirts of Anjaneri,
                        (Trimbakeshwar High-Way Nashik) comprising a Sprawling Campus of about 35
                        acres of land. Our campus is situated in the valley surrounded by Hills &
                        Reflects the Beauty of Nature.
                    </p>

                    <p className="text-base leading-relaxed text-gray-700 text-justify">
                        This Place is also known as the birthplace of Lord Hanuman and is close to
                        Trimbakeshwar Temple, Which is one of the 12 Jyotirlingas of Lord Shiva,
                        which adds to the Holiness and Beauty of this Area.
                    </p>
                </motion.div>

                <motion.div
                    className="flex-1 min-w-[320px] flex justify-center"
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                >
                    <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src={collegeImage}
                            alt="Brahma Valley College Campus"
                            className="w-full max-w-[600px] h-auto block transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Welcome;