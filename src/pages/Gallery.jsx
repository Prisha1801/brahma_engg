import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { galleryAPI } from "../services/api";

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch gallery data from API
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                setLoading(true);
                const data = await galleryAPI.getGallery();
                // API returns {status: 200, success: true, data: {hero: {...}, gallery: [...]}}
                const images = data?.data?.gallery || [];
                setGalleryImages(images);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch gallery:', err);
                setError('Failed to load gallery images');
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    const openLightbox = (index) => setActiveIndex(index);
    const closeLightbox = () => setActiveIndex(null);
    const showPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };
    const showNext = () => {
        setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (activeIndex === null) return;
        const onKeyDown = (event) => {
            if (event.key === "Escape") closeLightbox();
            if (event.key === "ArrowLeft") showPrev();
            if (event.key === "ArrowRight") showNext();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [activeIndex]);

    return (
        <section className="bg-linear-to-b from-amber-50 via-white to-white py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-600">Gallery</p>
                    <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-5xl">Campus Gallery</h1>
                    <p className="mt-2 text-sm text-gray-600 md:text-base">Explore our campus life and events</p>
                </motion.div>

                {loading ? (
                    <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-20 text-center">
                        <p className="text-base font-semibold text-gray-700">Loading gallery images...</p>
                    </div>
                ) : error ? (
                    <div className="rounded-3xl border border-dashed border-red-300 bg-red-50 px-6 py-20 text-center">
                        <p className="text-base font-semibold text-red-700">{error}</p>
                    </div>
                ) : galleryImages.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-6 py-20 text-center">
                        <p className="text-base font-semibold text-gray-700">No images uploaded yet.</p>
                    </div>
                ) : (
                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:balance]">
                        {galleryImages.map((image, index) => {
                            // API returns objects with 'image' field containing the URL
                            const imageUrl = image.image;
                            const imageAlt = image.title || image.alt || `Gallery image ${index + 1}`;
                            
                            return (
                                <motion.figure
                                    key={`${imageUrl}-${index}`}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
                                    className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                                >
                                    <button
                                        type="button"
                                        onClick={() => openLightbox(index)}
                                        className="group block w-full text-left"
                                        aria-label={`Open gallery image ${index + 1}`}
                                    >
                                        <img
                                            src={imageUrl}
                                            alt={imageAlt}
                                            loading="lazy"
                                            className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                        />
                                    </button>
                                </motion.figure>
                            );
                        })}
                    </div>
                )}

                <AnimatePresence>
                    {activeIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-80 flex items-center justify-center bg-black/90 p-4"
                            onClick={closeLightbox}
                        >
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    closeLightbox();
                                }}
                                className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/20"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    showPrev();
                                }}
                                className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-xl font-bold text-white hover:bg-white/20"
                                aria-label="Previous image"
                            >
                                <FaLessThan />
                            </button>

                            <motion.img
                                key={galleryImages[activeIndex]?.image}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.2 }}
                                src={galleryImages[activeIndex]?.image}
                                alt={galleryImages[activeIndex]?.title || galleryImages[activeIndex]?.alt || `Gallery image ${activeIndex + 1}`}
                                className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
                                onClick={(event) => event.stopPropagation()}
                            />

                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    showNext();
                                }}
                                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-xl font-bold text-white hover:bg-white/20"
                                aria-label="Next image"
                            >
                                <FaGreaterThan />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
