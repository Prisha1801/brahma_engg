import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const News = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // News images from public/news/ folder
    const newsImages = [
        'news/1754552587_4f90f7fdef3b4123fd9a.jpeg',
        'news/1754552603_2c9d893d9597cc34fe3c.jpeg',
        'news/1754552616_3ea75b7bc0ad5d1dfc36.jpeg',
        'news/1754552626_6dbef770c94d7cf9dce9.jpeg',
        'news/1754552633_bf420714cd235cb691a4.jpeg',
        'news/1754552641_50058fc033d5a9cf3233.jpeg',
        'news/1754552659_9dd448cddc0138398787.jpeg',
        'news/1754552669_5e858735cf5da7a63118.jpeg'
    ];

    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setCurrentImageIndex(0);
    };

    const goToPrevious = () => {
        const newIndex = currentImageIndex === 0 ? newsImages.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
        setSelectedImage(newsImages[newIndex]);
    };

    const goToNext = () => {
        const newIndex = currentImageIndex === newsImages.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
        setSelectedImage(newsImages[newIndex]);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        News & Updates
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest happenings, events, and achievements at Brahma Valley College
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {newsImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            onClick={() => openModal(image, index)}
                            className="break-inside-avoid mb-4 cursor-pointer group"
                        >
                            <div className="relative overflow-hidden rounded-2xl border transition-all duration-300">
                                <img
                                    src={`/${image}`}
                                    alt={`News ${index + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x300?text=News+Image';
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Image Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                            onClick={closeModal}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative max-w-6xl max-h-[90vh] mx-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
                                >
                                    <FiX className="w-8 h-8" />
                                </button>

                                {/* Previous Button */}
                                <button
                                    onClick={goToPrevious}
                                    className="absolute -left-16 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
                                >
                                    <FiChevronLeft className="w-6 h-6" />
                                </button>

                                {/* Image */}
                                <img
                                    src={`/${selectedImage}`}
                                    alt={`News image ${currentImageIndex + 1}`}
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                                    }}
                                />

                                {/* Next Button */}
                                <button
                                    onClick={goToNext}
                                    className="absolute -right-16 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
                                >
                                    <FiChevronRight className="w-6 h-6" />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
                                    {currentImageIndex + 1} / {newsImages.length}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default News;