import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Mock data - Easy to add more events
const eventsData = [
    {
        id: 1,
        category: "Cultural Events",
        description: "Brahma Valley College hosts vibrant cultural events to celebrate creativity, diversity, and talent among students. These events foster a sense of community and provide a platform for artistic expression.",
        highlights: [
            "Dance, Music, Drama, and Fashion Shows: Students showcase their talents in various performing arts, including classical and contemporary dance, vocal and instrumental music, theatrical performances, and stylish fashion parades.",
            "Annual Cultural Festivals: Events like `VallayFest` and talent hunts bring together students for competitions, performances, and celebrations, creating unforgettable memories.",
            "Ethnic and Traditional Day: Students embrace cultural diversity by dressing in traditional attire, participating in folk performances, and sharing regional cuisines."
        ],
        images: [
            "culture-event/eighth.jpg",
            "culture-event/eleventh.jpg",
            "culture-event/f1.jpg",
            "culture-event/f14.jpg",
            "culture-event/f15.jpg",
            "culture-event/f16.jpg",
            "culture-event/fifth.jpg",
            "culture-event/fourth.jpg",
            "culture-event/ningth.jpg",
            "culture-event/sec.jpg",
            "culture-event/seventh.jpg",
            "culture-event/sixth.jpg",
            "culture-event/t13.jpg",
            "culture-event/tenth.jpg",
            "culture-event/third.jpg",
            "culture-event/twelveth.jpg"
        ]
    },
    {
        id: 2,
        category: "Technical Events",
        description: "Technical events at Brahma Valley College encourage innovation, problem-solving, and hands-on learning, preparing students for industry challenges and fostering technical excellence.",
        highlights: [
            "Hackathons and Coding Competitions: Students compete in coding challenges and develop innovative software solutions under time constraints, enhancing their programming skills.",
            "Paper Presentations, Seminars, and Workshops: Opportunities to present research, attend expert-led sessions, and gain practical knowledge in emerging technologies and engineering trends.",
            "Robotics and Project Exhibitions: Students design and showcase robots, engineering models, and innovative projects, demonstrating creativity and technical expertise."
        ],
        images: [
            "tech-event/1754552148_4f91c7c4b9bda6ce9cb5.jpg",
            "tech-event/1754552156_95b5e974215e5d110cd0.jpg",
            "tech-event/1754552163_ec100537226bf05c9907.jpg",
            "tech-event/1754552171_018f17d50bf67eb29eb2.jpg",
            "tech-event/1754552178_64c20534ca3ab3bc7ff8.jpg",
            "tech-event/1754552187_4161aea2459ce576dd76.jpg",
            "tech-event/1754552210_2aff624d4e3a29f1afe6.jpg",
            "tech-event/1754552223_b94dfe30141c2ab56d58.jpg",
            "tech-event/1754552232_2ccb333cbe2bcdb9f300.jpg",
            "tech-event/1754552240_689aa5f697c43bcc39d9.jpg",
            "tech-event/1754552248_c6e058755de7f766b4da.jpg",
        ]
    },
    {
        id: 3,
        category: "Sports Events",
        description: "Brahma Valley College promotes teamwork and fitness through various indoor and outdoor sports like cricket, football, volleyball, badminton, and athletics. Annual meets and tournaments help students build leadership, discipline, and a balanced academic-sports lifestyle.Encourages teamwork, fitness, and discipline.",
        highlights: [
            "Offers indoor & outdoor sports",
            "Cricket, Football, Volleyball, Badminton, Athletics",
            "Hosts annual meets & inter-departmental tournaments",
            "Builds leadership and overall development",
            "Promotes a balanced lifestyle"
        ],
        images: [
            "/sport-event/1754552383_0953f08c78a336d5fa91.jpg",
            "/sport-event/1754552391_3848f17464ffa5e848b6.jpg",
            "/sport-event/1754552401_5522b8fc8933c0c4bc0b.jpg",
            "/sport-event/1754552418_7643fdb88f791b9a3ae0.jpg",
            "/sport-event/1754552427_24b464ab6f85601617d4.jpg",
            "/sport-event/1754552436_f791bafcf14c415b9e48.jpg",
            "/sport-event/1754553591_173146017459c8cf2db6.jpg",
            "/sport-event/1754553601_a37343d1c72291fc6f02.jpg",
            "/sport-event/1754553610_16cabd6a834045ed0c1f.jpg",
            "/sport-event/1754553619_e9c79c42fa88e9de1ede.jpg"
        ]
    }
];

const Event = () => {
    const [openEvents, setOpenEvents] = useState([1]); // Default: first event open
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentEventImages, setCurrentEventImages] = useState([]);

    const toggleEvent = (eventId) => {
        setOpenEvents(prev =>
            prev.includes(eventId)
                ? prev.filter(id => id !== eventId)
                : [...prev, eventId]
        );
    };

    const openModal = (image, index, eventImages) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
        setCurrentEventImages(eventImages);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setCurrentImageIndex(0);
        setCurrentEventImages([]);
    };

    const goToPrevious = () => {
        const newIndex = currentImageIndex === 0 ? currentEventImages.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
        setSelectedImage(currentEventImages[newIndex]);
    };

    const goToNext = () => {
        const newIndex = currentImageIndex === currentEventImages.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
        setSelectedImage(currentEventImages[newIndex]);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {eventsData.map((event, idx) => {
                    const isOpen = openEvents.includes(event.id);

                    return (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            {/* Header Button */}
                            <motion.button
                                onClick={() => toggleEvent(event.id)}
                                className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-5 flex items-center justify-between transition-all duration-300 group"
                                whileHover={{ scale: 1.005 }}
                                whileTap={{ scale: 0.998 }}
                            >
                                <span className="font-semibold text-lg md:text-xl tracking-wide">
                                    {event.category}
                                </span>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <FiChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </motion.div>
                            </motion.button>

                            {/* Content Panel with AnimatePresence */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                            transition: {
                                                height: { duration: 0.4, ease: "easeInOut" },
                                                opacity: { duration: 0.3, delay: 0.1 }
                                            }
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                            transition: {
                                                height: { duration: 0.3, ease: "easeInOut" },
                                                opacity: { duration: 0.2 }
                                            }
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                            className="p-8 bg-linear-to-br from-gray-50 to-white"
                                            initial={{ y: -20 }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Description */}
                                            <motion.p
                                                className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {event.description}
                                            </motion.p>

                                            {/* Highlights */}
                                            <motion.ul
                                                className="space-y-4 mb-10"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {event.highlights.map((highlight, index) => {
                                                    const [title, ...descParts] = highlight.split(':');
                                                    const description = descParts.join(':');

                                                    return (
                                                        <motion.li
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.3 + index * 0.1 }}
                                                            className="flex gap-4 group"
                                                        >
                                                            <span className="text-blue-600 font-bold text-xl mt-0.5 group-hover:scale-125 transition-transform">
                                                                •
                                                            </span>
                                                            <span className="text-gray-700 flex-1">
                                                                <strong className="text-gray-900 font-semibold">
                                                                    {title}:
                                                                </strong>
                                                                <span className="text-gray-600">{description}</span>
                                                            </span>
                                                        </motion.li>
                                                    );
                                                })}
                                            </motion.ul>

                                            {/* Image Gallery */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                            >
                                                {event.images.map((image, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.6 + index * 0.05 }}
                                                        whileHover={{ scale: 1.03 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => openModal(image.startsWith('/') ? image : `/${image}`, index, event.images)}
                                                        className="relative aspect-video bg-linear-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                                                    >
                                                        <img
                                                            src={image.startsWith('/') ? image : `/${image}`}
                                                            alt={`${event.category} ${index + 1}`}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            onError={(e) => {
                                                                e.target.src = 'https://via.placeholder.com/400x300?text=Event+Image';
                                                            }}
                                                        />
                                                        {/* Overlay on hover */}
                                                        <motion.div
                                                            className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                            initial={{ opacity: 0 }}
                                                            whileHover={{ opacity: 1 }}
                                                        />
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.div>

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
                            {currentEventImages.length > 1 && (
                                <button
                                    onClick={goToPrevious}
                                    className="absolute -left-16 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
                                >
                                    <FiChevronLeft className="w-6 h-6" />
                                </button>
                            )}

                            {/* Image */}
                            <img
                                src={selectedImage}
                                alt={`Event image ${currentImageIndex + 1}`}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                                }}
                            />

                            {/* Next Button */}
                            {currentEventImages.length > 1 && (
                                <button
                                    onClick={goToNext}
                                    className="absolute -right-16 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
                                >
                                    <FiChevronRight className="w-6 h-6" />
                                </button>
                            )}

                            {/* Image Counter */}
                            {currentEventImages.length > 1 && (
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm">
                                    {currentImageIndex + 1} / {currentEventImages.length}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Event;
