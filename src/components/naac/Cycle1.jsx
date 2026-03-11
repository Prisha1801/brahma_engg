import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { CycleHero } from '../common/data/heroData';
import { CycleDocumentsData } from '../../data/data';

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    fontSize: '0.95rem',
};

const theadThStyle = {
    padding: '14px 20px',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: '0.5px',
    backgroundColor: '#2c2c2c',
    color: '#ffffff',
};

const tdStyle = {
    padding: '13px 20px',
    textAlign: 'center',
    color: '#555',
    borderBottom: '1px solid #e0e0e0',
};

const linkStyle = {
    color: '#1a6fbf',
    fontWeight: '600',
    textDecoration: 'none',
};

const Cycle1 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            <HeroSection {...CycleHero} />

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
                    Cycle - I Documents Section
                </motion.h4>

                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={{ ...theadThStyle, width: '20%' }}>Sr No</th>
                            <th style={theadThStyle}>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CycleDocumentsData.length > 0 ? (
                            CycleDocumentsData.map((item, index) => (
                                <motion.tr
                                    key={item.id}
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ delay: index * 0.04, duration: 0.25 }}
                                    style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f4f8fb' }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e8f4fd'}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f4f8fb'}
                                >
                                    <td style={tdStyle}>{item.id}</td>
                                    <td style={tdStyle}>
                                        <a
                                            href={item.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={linkStyle}
                                        >
                                            {item.title}
                                        </a>
                                    </td>
                                </motion.tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={2} style={{ ...tdStyle, color: '#888', padding: '24px' }}>
                                    No records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </motion.div>
        </>
    );
};

export default Cycle1;