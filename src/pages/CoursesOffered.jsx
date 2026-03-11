import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ✅ Images from assets/courses/
import c1 from '../assets/courses/c1.png'; // Mechanical Engineering
import c2 from '../assets/courses/c2.png'; // Computer Engineering
import c3 from '../assets/courses/c3.png'; // Civil Engineering
import c4 from '../assets/courses/c4.png'; // Electrical Engineering
import c5 from '../assets/courses/c5.png'; // MBA

const courses = [
    {
        id: 1,
        name: 'Mechanical Engineering',
        dteCode: '513061210',
        intake: 120,
        image: c1,
    },
    {
        id: 2,
        name: 'Computer Engineering',
        dteCode: '513024510',
        intake: 60,
        image: c2,
    },
    {
        id: 3,
        name: 'Civil Engineering',
        dteCode: '513019110',
        intake: 60,
        image: c3,
    },
    {
        id: 4,
        name: 'Electrical Engineering',
        dteCode: '513029310',
        intake: 60,
        image: c4,
    },
    {
        id: 5,
        name: 'MBA',
        dteCode: '567890',
        intake: 60,
        image: c5,
    },
];

const CourseCard = ({ course, className = '' }) => {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${className}`}
        >
            {/* Background Image */}
            <img
                src={course.image}
                alt={course.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/50" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                {/* Tag */}
                <span className="inline-block bg-[#1a7a3c] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">
                    Engineering
                </span>

                <h3 className="text-white font-bold text-xl leading-tight mb-2 drop-shadow-lg">
                    {course.name}
                </h3>

                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] flex-shrink-0" />
                    <p className="text-white/80 text-[14px] font-medium">
                        DTE code: {course.dteCode} &amp; Intake: {course.intake}
                    </p>
                </div>
            </div>
        </div>
    );
};

const CoursesOffered = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.section
            ref={ref}
            className="bg-[#f0f4f8] py-16 px-5 font-['Plus_Jakarta_Sans',sans-serif]"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
        >
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');`}</style>

            <div className="max-w-[1200px] mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-[#1a7a3c] text-xs font-bold uppercase tracking-[0.2em] mb-2">What We Offer</p>
                    <h2 className="text-4xl font-extrabold text-gray-900">Courses Offered</h2>
                    <div className="mx-auto mt-3 w-16 h-1 rounded-full bg-linear-to-r from-[#1a7a3c] to-[#4ade80]" />
                </div>

                {/* Grid Layout */}
                <div className="flex flex-col gap-6">

                    {/* Top Row: 3 equal columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <CourseCard course={courses[0]} className="h-[280px]" />
                        <CourseCard course={courses[1]} className="h-[280px]" />
                        <CourseCard course={courses[2]} className="h-[280px]" />
                    </div>

                    {/* Bottom Row: 2 equal columns, centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
                        <CourseCard course={courses[3]} className="h-[280px]" />
                        <CourseCard course={courses[4]} className="h-[280px]" />
                    </div>

                </div>
            </div>
        </motion.section>
    );
};

export default CoursesOffered;