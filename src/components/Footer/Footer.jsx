import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiGlobe } from "react-icons/fi";
import BROUCHER_ENGG from "../../assets/BROUCHER_ENGG.pdf";

const Footer = () => {
    return (
        <footer className="bg-[#072E4A] text-white pt-14 pb-6">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                {/* Top Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-[15px]">
                            <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
                            <li><Link to={BROUCHER_ENGG} target="_blank" className="hover:text-gray-300 transition">Download E-Brochures</Link></li>
                            <li><Link to="/addmission/admission-form" className="hover:text-gray-300 transition">Admission</Link></li>
                            <li><Link to="/gallery" className="hover:text-gray-300 transition">Gallery</Link></li>
                            <li><Link to="/fees-regulatory-authority" className="hover:text-gray-300 transition">Fees Regulatory Authority</Link></li>
                        </ul>
                    </div>

                    {/* Additional Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Additional Links</h3>
                        <ul className="space-y-4 text-[15px]">
                            <li><Link to="/" className="hover:text-gray-300 transition">DTE Code</Link></li>
                            <li><Link to="/naac/iqac" className="hover:text-gray-300 transition">IQAC</Link></li>
                            <li><Link to="/naac/iiqa" className="hover:text-gray-300 transition">IIQC-Documents</Link></li>
                            <li><Link to="/naac/best-practices" className="hover:text-gray-300 transition">Best Practice</Link></li>
                            <li><Link to="/naac/naac-documents" className="hover:text-gray-300 transition">NAAC-Document</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">CONTACT INFO</h3>
                        <ul className="space-y-4 text-[15px]">
                            <li className="flex items-center gap-3">
                                <FiMail />
                                <span>princi.bvcoe@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone />
                                <span>+91 8087561281</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone />
                                <span>+91 7743895341</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiGlobe />
                                <span>www.brahmavalley.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Map</h3>
                        <div className="w-full h-56 rounded overflow-hidden">
                            <iframe
                                title="Brahma Valley Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120012.53937557008!2d73.42349089726565!3d19.950016300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddf3443b96f067%3A0x34188a49959a588d!2sBrahma%20Valley%20College%20of%20Engineering%20and%20Research%20Institute!5e0!3m2!1sen!2sin!4v1771669327413!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-gray-300 text-center md:text-left">
                        Copyright © 2026 Brahma Valley Group of Institutions. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <a href="#" className="bg-white/10 p-3 rounded hover:bg-white/20 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-white/10 p-3 rounded hover:bg-white/20 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-white/10 p-3 rounded hover:bg-white/20 transition">
                            <FaDribbble />
                        </a>
                        <a href="#" className="bg-white/10 p-3 rounded hover:bg-white/20 transition">
                            <FaLinkedinIn />
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;