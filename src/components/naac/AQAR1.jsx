import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { AQAR1Hero } from '../common/data/heroData';

const AQAR1 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            <HeroSection {...AQAR1Hero} />

            <motion.div
                ref={ref}
                style={{ maxWidth: '900px', margin: '50px auto', padding: '0 20px' }}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <motion.h4
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        marginBottom: '24px',
                        color: '#1a3a4a',
                        fontSize: '1.3rem',
                        letterSpacing: '0.5px',
                    }}
                >
                    AQAR 2024-25 Section
                </motion.h4>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    style={{
                        textAlign: 'center',
                        padding: '20px',
                        backgroundColor: '#d6eaf8',
                        color: '#2e86c1',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '500',
                    }}
                >
                    No records found.
                </motion.div>
            </motion.div>
        </>
    );
};

export default AQAR1;