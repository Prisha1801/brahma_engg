import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ── Mock Data — map to API later
// Images from public/notices/ folder
const noticesData = [
    {
        id: 1,
        title: "Admissions Open 2024–25",
        year: "2024-25",
        image: "/notice/admission-notice-1.webp",
    },
    {
        id: 2,
        title: "Admissions Open 2024–25",
        year: "2024-25",
        image: "/notice/admission-notice-2.webp",
    },
    {
        id: 3,
        title: "Admissions Open 2024–25",
        year: "2024-25",
        image: "/notice/admission-notice-3.webp",
    },
    {
        id: 4,
        title: "Admissions Open 2024–25",
        year: "2024-25",
        image: "/notice/admission-notice-4.webp",
    },
];

const years = ["2024-25", "2023-24", "2022-23"];

// ── Lightbox
function Lightbox({ notice, onClose, onPrev, onNext }) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            {/* Close */}
            <button
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={onClose}
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Prev */}
            <button
                className="absolute left-4 md:left-8 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next */}
            <button
                className="absolute right-4 md:right-8 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <motion.div
                className="max-w-5xl w-full"
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.22 }}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={notice.image}
                    alt={notice.title}
                    className="w-full h-auto rounded-2xl shadow-2xl object-contain max-h-[85vh]"
                />
                <p className="text-white/50 text-xs text-center mt-3">{notice.title}</p>
            </motion.div>
        </motion.div>
    );
}

// ── Notice Card
function NoticeCard({ notice, index, onOpen }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-red-200 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            onClick={() => onOpen(index)}
        >
            {/* Image */}
            <div className="relative overflow-hidden bg-gray-50 aspect-auto">
                <img
                    src={notice.image}
                    alt={notice.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                        className="w-11 h-11 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    >
                        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                    </motion.div>
                </div>

                {/* Year tag */}
                <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-red-600 text-white text-xs font-semibold rounded-md shadow-sm">
                        {notice.year}
                    </span>
                </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3.5 flex items-center justify-between">
                <p className="text-gray-700 text-sm font-medium truncate pr-3">{notice.title}</p>
                <svg className="w-4 h-4 text-red-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
        </motion.div>
    );
}

export default function NoticesPage() {
    const [activeYear, setActiveYear] = useState("2024-25");
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });

    const filtered = noticesData.filter((n) => n.year === activeYear);

    const openLightbox = (i) => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);
    const prev = () => setLightboxIndex((p) => (p - 1 + filtered.length) % filtered.length);
    const next = () => setLightboxIndex((p) => (p + 1) % filtered.length);

    return (
        <div className="bg-white min-h-full">

            {/* ── Hero Banner ── */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-gray-900">
                <img
                    src="/images/notices-hero.jpg"
                    alt="Notices"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                    onError={(e) => { e.target.style.display = "none"; }}
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-800/40" />

                {/* Red accent bar at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600" />

                <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                    <motion.div
                        ref={headerRef}
                        initial={{ opacity: 0, y: 18 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-white/40 text-xs mb-5 justify-center">
                            <a href="/" className="hover:text-white/70 transition-colors">Home</a>
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-white/70">Notices</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                            Notices
                        </h1>
                        <p className="text-white/50 text-sm">Welcome to Notice</p>
                    </motion.div>
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">

                {/* Section heading */}
                <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-6 h-px bg-red-500" />
                                <span className="text-red-500 text-xs tracking-[0.25em] uppercase font-semibold">
                                    Official Circulars
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                News — Academic Year{" "}
                                <span className="text-red-600">{activeYear}</span>
                            </h2>
                        </div>

                        {/* Year selector */}
                        <div className="flex items-center gap-2 shrink-0">
                            {years.map((y) => (
                                <button
                                    key={y}
                                    onClick={() => setActiveYear(y)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeYear === y
                                        ? "bg-red-600 text-white shadow-sm shadow-red-200"
                                        : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                                        }`}
                                >
                                    {y}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-6 h-px bg-gray-100" />
                </motion.div>

                {/* ── Notice Grid ── */}
                <AnimatePresence mode="wait">
                    {filtered.length > 0 ? (
                        <motion.div
                            key={activeYear}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filtered.map((notice, i) => (
                                <NoticeCard
                                    key={notice.id}
                                    notice={notice}
                                    index={i}
                                    onOpen={openLightbox}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            className="py-24 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <p className="text-gray-400 text-sm">No notices available for {activeYear}.</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Count footer ── */}
                {filtered.length > 0 && (
                    <motion.p
                        className="text-gray-400 text-xs text-center mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Showing {filtered.length} notice{filtered.length !== 1 ? "s" : ""} for Academic Year {activeYear}
                    </motion.p>
                )}
            </div>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {lightboxIndex !== null && filtered[lightboxIndex] && (
                    <Lightbox
                        notice={filtered[lightboxIndex]}
                        onClose={closeLightbox}
                        onPrev={prev}
                        onNext={next}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}