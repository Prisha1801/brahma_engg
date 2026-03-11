import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ── Mock Data — replace with API later
const examinationNotices = [
    {
        id: 1,
        type: "Circular",
        title: "Exam form fill-up",
        highlight: "ESE MAY 2025",
        date: "08-04-2025",
        file: "/notices/exam-form-fillup-ese-may-2025.pdf",
        isNew: true,
    },
    {
        id: 2,
        type: "Circular",
        title: "Photocopy and Revaluation",
        highlight: "",
        date: "08-03-2025",
        file: "/notices/photocopy-revaluation.pdf",
        isNew: false,
    },
];

function NoticeRow({ notice, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-30px" });

    return (
        <motion.div
            ref={ref}
            className="flex items-start gap-4 px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-red-50/40 transition-colors duration-150 group"
            initial={{ opacity: 0, x: -12 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.35, delay: index * 0.08 }}
        >
            {/* Bullet */}
            <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500 shrink-0" />

            {/* Content */}
            <div className="flex-1 min-w-0">
                <p className="text-gray-800 text-sm leading-relaxed">
                    <span className="font-bold text-gray-900">{notice.type}:</span>{" "}
                    {notice.title}
                    {notice.highlight && (
                        <>
                            {" – "}
                            <span className="font-bold text-gray-900">{notice.highlight}</span>
                        </>
                    )}
                    {" "}
                    <span className="text-gray-400 text-xs font-normal">Dated: {notice.date}</span>
                </p>
            </div>

            {/* Tags + download */}
            {/* <div className="flex items-center gap-2 shrink-0">
                {notice.isNew && (
                    <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-bold rounded animate-pulse">
                        NEW
                    </span>
                )}
                <a
                    href={notice.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-600 flex items-center justify-center transition-colors duration-200 group/btn"
                    title="Download"
                >
                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </a>
            </div> */}
        </motion.div>
    );
}

export default function ExaminationPage() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { once: true, margin: "-60px" });

    return (
        <div className="bg-white min-h-screen">

            {/* ── Hero Banner ── */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-900">
                <img
                    src="/images/examination-hero.jpg"
                    alt="Examination"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                    onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-800/30" />
                {/* Red accent bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />

                <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                    <motion.div
                        ref={headerRef}
                        initial={{ opacity: 0, y: 18 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 text-white/40 text-xs mb-5 justify-center">
                            <a href="/" className="hover:text-white/70 transition-colors">Home</a>
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-white/70">Examination</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                            Examination
                        </h1>
                        <p className="text-white/50 text-sm">Welcome To Examination</p>
                    </motion.div>
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-4xl mx-auto px-6 md:px-12 py-14" ref={sectionRef}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45 }}
                >
                    {/* Card */}
                    <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">

                        {/* Card Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-600 to-red-500">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                </svg>
                                <h2 className="text-white font-bold text-base tracking-wide">
                                    Examination Notices
                                </h2>
                            </div>
                            <span className="text-white/60 text-xs font-medium">
                                {examinationNotices.length} Notice{examinationNotices.length !== 1 ? "s" : ""}
                            </span>
                        </div>

                        {/* Notice rows */}
                        <div className="bg-white divide-y divide-gray-100">
                            {examinationNotices.length > 0 ? (
                                examinationNotices.map((notice, i) => (
                                    <NoticeRow key={notice.id} notice={notice} index={i} />
                                ))
                            ) : (
                                <div className="py-16 text-center">
                                    <p className="text-gray-400 text-sm">No examination notices available.</p>
                                </div>
                            )}
                        </div>

                        {/* Card footer */}
                        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                            <p className="text-gray-400 text-xs">
                                For queries, contact the Examination Cell.
                            </p>
                            <a
                                href="mailto:princi.bvcoe@gmail.com"
                                className="text-red-500 text-xs font-semibold hover:text-red-700 transition-colors"
                            >
                                princi.bvcoe@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}