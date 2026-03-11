import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/common/components/HeroSection";
// Import images
import img1 from "../assets/placement-cell/img1.png";
import img2 from "../assets/placement-cell/img2.png";
import img3 from "../assets/placement-cell/img3.png";
import img4 from "../assets/placement-cell/img4.png";
import img5 from "../assets/placement-cell/img5.png";
import img6 from "../assets/placement-cell/img6.png";
import img7 from "../assets/placement-cell/img7.png";
import img8 from "../assets/placement-cell/img8.png";
import img9 from "../assets/placement-cell/img9.png";
import img10 from "../assets/placement-cell/img10.png";
import { FaUserGraduate, FaPhoneAlt, FaEnvelope, FaBuilding, FaMoneyBillWave } from "react-icons/fa";

import heroBg from "../assets/posters/placemetHero.png";

// Import recruiter logos
import microsoft from "../assets/recruiters/microsoft.png";
import mindtree from "../assets/recruiters/mindtree.png";
import netwin from "../assets/recruiters/netwin.png";
import nitor from "../assets/recruiters/nitor.png";
import ouinnox from "../assets/recruiters/ouinnox.png";
import rishabh from "../assets/recruiters/rishabh.png";
import sbiLife from "../assets/recruiters/sbi life.png";
import tataConsultancy from "../assets/recruiters/tata consultancy.png";
import yesBank from "../assets/recruiters/yes bank.png";

const PlacementCell = () => {
    const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    const placementContacts = [
        { name: "Prof. Vivek K. Kulkarni", designation: "Training & Placement Officer", contact: "7387145165", email: "tpo.bvcoenri@gmail.com" },
        { name: "Prof. Dr. Shirish N. Shinde", designation: "Coordinator", contact: "7720075445", email: "tpomechbvcoe@gmail.com" },
        { name: "Prof. Kiran G. Sasane", designation: "Coordinator", contact: "9403707993", email: "tpocivilbvcoe@gmail.com" },
        { name: "Prof. Sandip Y. Jadhav", designation: "Coordinator", contact: "8329633584", email: "tpocompbvcoe@gmail.com" },
        { name: "Prof. Yamaji V. Lukare", designation: "Coordinator", contact: "9403092281", email: "tpoelectricalbvcoe@gmail.com" },
        { name: "Prof. Ashish H. Roundal", designation: "Coordinator", contact: "7620669190", email: "tpombabvcoe@gmail.com" },
    ];

    const placedStudents = [
        { name: "Priya R. Sharma", branch: "Information Technology", company: "Infosys LTD", package: "7.2 LPA" },
        { name: "Rahul K. Deshmukh", branch: "Mechanical Engineering", company: "AutoTech Industry", package: "6.8 LPA" },
        { name: "Sneha V. Kulkarni", branch: "Civil Engineering", company: "BuildCon PVT. LTD", package: "6.0 LPA" },
        { name: "Amit S. Patil", branch: "Computer Engineering", company: "TechCorp Solutions", package: "8.5 LPA" },
    ];

    const recruiterLogos = [
        microsoft, mindtree, netwin, nitor, ouinnox, rishabh, sbiLife, tataConsultancy, yesBank
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection
                backgroundImage={heroBg}
                title="Placement Cell"
                subtitle="Empowering students with career opportunities and industry connection.."
                overlay={true}
            />

            <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
                {/* About Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
                >
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">About Our Placement Cells</h2>
                    <div className="text-gray-600 space-y-6 leading-relaxed text-lg">
                        <p>
                            The Placement Cell at Brahma Valley College of Engineering & Research Institute is dedicated to bridging the gap between students and industry. Our mission is to ensure every student is equipped with the skills, confidence, and opportunities to excel in their chosen career path.
                        </p>
                        <p>
                            We organize regular training sessions, including resume building, mock interviews, and soft skills development, to prepare students for the competitive job market. Our strong industry connections enable us to invite top-tier companies for campus placements, offering roles in fields like IT, Mechanical, Civil, Electrical, and more.
                        </p>
                        <p>
                            The Placement Cell also facilitates internships, industry visits, and guest lectures to provide hands-on exposure. With a focus on holistic development, we aim to produce not just skilled engineers but also confident professionals ready to contribute to the global workforces.
                        </p>
                    </div>
                </motion.section>

                {/* Gallery Slideshow */}
                <section className="space-y-10">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-extrabold text-blue-900">Placement Activities Gallery</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <motion.div
                            className="flex gap-6 py-4 px-2"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 40,
                                ease: "linear"
                            }}
                            whileHover={{ transition: { duration: 80 } }}
                        >
                            {[...galleryImages, ...galleryImages].map((img, index) => (
                                <div key={index} className="flex-shrink-0 w-[400px] h-[280px] rounded-2xl overflow-hidden shadow-xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                                    <img src={img} alt={`Activity ${index}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </motion.div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    </div>
                </section>

                {/* Recently Placed Students */}
                <section className="space-y-10">
                    <h2 className="text-3xl font-bold text-center text-blue-900">Recently Placed Students</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {placedStudents.map((student, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-xl transition-shadow group"
                            >
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-700 transition-colors">{student.name}</h3>
                                        <FaUserGraduate className="text-blue-200 text-3xl group-hover:text-blue-500 transition-colors" />
                                    </div>
                                    <p className="text-sm text-blue-600 font-semibold">{student.branch}</p>
                                    <div className="pt-4 border-t border-gray-100 space-y-3">
                                        <div className="flex items-center gap-2">
                                            <FaBuilding className="text-gray-400 text-sm" />
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-gray-400">Company</p>
                                                <p className="font-semibold text-gray-700 text-sm">{student.company}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaMoneyBillWave className="text-green-400 text-sm" />
                                            <div>
                                                <p className="text-[10px] uppercase tracking-wider text-gray-400">Package</p>
                                                <p className="font-bold text-green-600">{student.package}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Top Recruiters */}
                <section className="space-y-10">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-extrabold text-blue-900">Top Recruiters</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <motion.div
                            className="flex gap-12 py-8 items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 30,
                                ease: "linear"
                            }}
                        >
                            {[...recruiterLogos, ...recruiterLogos].map((logo, index) => (
                                <div key={index} className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-md border border-gray-100 p-6 flex items-center justify-center hover:shadow-lg transition-shadow group/logo">
                                    <img
                                        src={logo}
                                        alt="Recruiter"
                                        className="max-w-full max-h-full object-contain filter grayscale group-hover/logo:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </motion.div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                    </div>
                </section>

                {/* Contacts Table */}
                <section className="space-y-8">
                    <div className="bg-blue-600 text-white p-4 rounded-t-xl">
                        <h2 className="text-2xl font-bold">Placement Cell Contacts</h2>
                    </div>
                    <div className="bg-white rounded-b-xl shadow-lg border border-gray-200 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="p-4 border-b border-gray-700">Name</th>
                                    <th className="p-4 border-b border-gray-700">Designation</th>
                                    <th className="p-4 border-b border-gray-700">Contact Number</th>
                                    <th className="p-4 border-b border-gray-700">E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {placementContacts.map((contact, index) => (
                                    <tr key={index} className="hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-0 text-sm md:text-base">
                                        <td className="p-4 font-medium text-gray-800">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                                    {contact.name.split(' ').pop()?.charAt(0) || contact.name.charAt(0)}
                                                </div>
                                                {contact.name}
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-600">{contact.designation}</td>
                                        <td className="p-4 text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <FaPhoneAlt className="text-blue-400 text-xs" />
                                                {contact.contact}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap">
                                                <FaEnvelope className="text-xs" />
                                                {contact.email}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="bg-blue-600 p-6 text-white">
                        <h2 className="text-2xl font-bold">Contact to Placement Cell</h2>
                    </div>
                    <form className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                <input type="text" placeholder="Enter your full name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                            <input type="tel" placeholder="Enter your phone number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Message</label>
                            <textarea rows="4" placeholder="Enter your message" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95">
                            Submit
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default PlacementCell;
