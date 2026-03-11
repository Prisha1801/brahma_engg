import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { admissionFormHero } from '../common/data/heroData';

const AddmissionForm = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div className="bg-gray-100 pb-16">
            <HeroSection {...admissionFormHero} />

            <motion.div
                ref={ref}
                className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10 -mt-16 relative z-10"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >

                {/* PERSONAL INFORMATION */}
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-2xl font-semibold text-blue-900 mb-2"
                >
                    Personal Information
                </motion.h2>
                <div className="h-1 w-full bg-green-500 mb-6"></div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium mb-2">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Doe"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                {/* CONTACT INFORMATION */}
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="text-2xl font-semibold text-blue-900 mt-12 mb-2"
                >
                    Contact Information
                </motion.h2>
                <div className="h-1 w-full bg-green-500 mb-6"></div>

                <div className="space-y-6">
                    <div>
                        <label className="block font-medium mb-2">
                            Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="1234 Main St"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-medium mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="1234567890"
                                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* ACADEMIC INFORMATION */}
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    className="text-2xl font-semibold text-blue-900 mt-12 mb-2"
                >
                    Academic Information
                </motion.h2>
                <div className="h-1 w-full bg-green-500 mb-6"></div>

                <div className="space-y-6">
                    <div>
                        <label className="block font-medium mb-2">
                            Last Qualification <span className="text-red-500">*</span>
                        </label>
                        <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Choose...</option>
                            <option>12th Science</option>
                            <option>Diploma</option>
                            <option>Bachelor Degree</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-2">
                            Percentage / Grade <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="75%"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* COURSE SELECTION */}
                <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.25 }}
                    className="text-2xl font-semibold text-blue-900 mt-12 mb-2"
                >
                    Course Selection
                </motion.h2>
                <div className="h-1 w-full bg-green-500 mb-6"></div>

                <div>
                    <label className="block font-medium mb-2">
                        Select Course <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Choose...</option>
                        <option>Mechanical Engineering</option>
                        <option>Computer Engineering</option>
                        <option>Civil Engineering</option>
                        <option>Electrical Engineering</option>
                        <option>MBA</option>
                    </select>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold shadow-md transition duration-300">
                        Submit Application
                    </button>

                    <p className="text-sm text-gray-500 mt-4">
                        By submitting this form, you agree to our Terms & Conditions and Privacy Policy
                    </p>
                </div>

            </motion.div>
        </div>
    );
};

export default AddmissionForm;