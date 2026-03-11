import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { contactHero } from '../components/common/data/heroData';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { contactAPI } from '../services/api';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    
    // Contact data state
    const [contactData, setContactData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState('');

    // Fetch contact data from API
    useEffect(() => {
        const fetchContactData = async () => {
            try {
                setLoading(true);
                const data = await contactAPI.getContactInfo();
                // API returns {status: 200, success: true, data: {hero: {...}, contact: [...]}}
                // We'll use the first contact as main contact info, or create a summary
                const contacts = data?.data?.contact || [];
                setContactData({
                    // Use hero data for general info
                    college_name: data?.data?.hero?.title || 'brahma valley college of engineering and research institute',
                    // For now, use static address since it's not in the API response
                    address: 'Anjaneri, Trimbak Road, Nashik, Maharashtra 422213',
                    // Use first contact's phone or fallback
                    phone: contacts[0]?.contact_number || '02594299162',
                    phone_hours: 'Mon to Fri, 9am - 6pm',
                    // Use static email for now
                    email: 'princi.bvcoe@gmail.com',
                    email_description: 'Send us your query anytime!',
                    contacts_list: contacts // Store all contacts for potential use
                });
                setError(null);
            } catch (err) {
                console.error('Failed to fetch contact data:', err);
                setError('Failed to load contact information');
            } finally {
                setLoading(false);
            }
        };

        fetchContactData();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitting(true);
        setFormMessage('');

        try {
            const response = await contactAPI.submitContactForm(formData);
            setFormMessage('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (err) {
            console.error('Failed to submit form:', err);
            setFormMessage('Failed to send message. Please try again.');
        } finally {
            setFormSubmitting(false);
        }
    };

    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <HeroSection {...contactHero} />

            <motion.div
                ref={ref}
                className="max-w-7xl mx-auto px-6 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                {/* GOOGLE MAP */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg mb-16 border border-gray-100"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3750.3966382785698!2d73.575866!3d19.949815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddf3443b96f067%3A0x34188a49959a588d!2sBrahma%20Valley%20College%20of%20Engineering%20and%20Research%20Institute!5e0!3m2!1sen!2sin!4v1771840364056!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* LEFT - CONTACT INFO */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.15 }}
                        className="space-y-10"
                    >
                        {loading ? (
                            <div className="space-y-10">
                                <div className="animate-pulse">
                                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                                </div>
                                <div className="animate-pulse">
                                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                                </div>
                                <div className="animate-pulse">
                                    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-red-700">{error}</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0b2c4d] uppercase mb-2">
                                            {contactData?.college_name || 'brahma valley college of engineering and research institute'}
                                        </h3>
                                        <p className="text-gray-500 leading-relaxed">
                                            {contactData?.address || 'Anjaneri, Trimbak Road, Nashik, Maharashtra 422213'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <FaPhoneAlt className="text-blue-600 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0b2c4d] mb-2 uppercase">
                                            {contactData?.phone || '02594299162'}
                                        </h3>
                                        <p className="text-gray-500">
                                            {contactData?.phone_hours || 'Mon to Fri, 9am - 6pm'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <FaEnvelope className="text-blue-600 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#0b2c4d] mb-2 lowercase">
                                            {contactData?.email || 'princi.bvcoe@gmail.com'}
                                        </h3>
                                        <p className="text-gray-500">
                                            {contactData?.email_description || 'Send us your query anytime!'}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>

                    {/* RIGHT - CONTACT FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-6 py-4 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email Address"
                                    required
                                    className="w-full px-6 py-4 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Subject"
                                    required
                                    className="w-full px-6 py-4 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                rows="6"
                                required
                                className="w-full px-6 py-4 rounded-lg bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            ></textarea>
                            
                            {formMessage && (
                                <div className={`p-4 rounded-lg border ${formMessage.includes('success') ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                                    {formMessage}
                                </div>
                            )}
                            
                            <button
                                type="submit"
                                disabled={formSubmitting}
                                className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
