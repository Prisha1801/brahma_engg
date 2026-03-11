import React from "react";
import { motion } from "framer-motion";

const alumniData = [
    {
        id: 1,
        name: "Mr. Vijay Khairnar",
        description:
            "If you are looking at blank cassettes on the web, you may be very confused at the.",
        image: "/noimage.png"
    },
    {
        id: 2,
        name: "Mr. Vijay Khairnar",
        description:
            "If you are looking at blank cassettes on the web, you may be very confused at the.",
        image: "/noimage.png"
    },
    {
        id: 3,
        name: "Mr. Vijay Khairnar",
        description:
            "If you are looking at blank cassettes on the web, you may be very confused at the.",
        image: "/noimage.png"
    },
    {
        id: 4,
        name: "Mr. Vijay Khairnar",
        description:
            "If you are looking at blank cassettes on the web, you may be very confused at the.",
        image: "/noimage.png"
    },
];

const Alumni = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div
                className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/alumni/alumni-student-details.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-center text-white px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Alumni Students
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Our proud alumni shaping the world
                    </p>
                </motion.div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl font-bold text-gray-800">
                        Alumni Students
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Meet some of our remarkable alumni making a difference in the world.
                    </p>
                </motion.div>

                {/* Alumni Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {alumniData.map((alumni, index) => (
                        <motion.div
                            key={alumni.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
                        >
                            {/* Avatar */}
                            <div className="w-28 h-28 mx-auto rounded-full shadow-lg mb-6 overflow-hidden">
                                <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover" onError={(e) => { e.target.src = '' }} />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800">
                                {alumni.name}
                            </h3>

                            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                {alumni.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alumni;