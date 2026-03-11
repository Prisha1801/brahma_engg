import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    FiUser, FiMail, FiPhone, FiMapPin, FiBook,
    FiCalendar, FiChevronDown, FiCheck, FiArrowRight
} from "react-icons/fi";

const genderOptions = ["Male", "Female", "Other", "Prefer not to say"];
const qualifications = ["SSC (10th)", "HSC (12th)", "Diploma", "B.E. / B.Tech", "MBA", "M.E. / M.Tech", "B.Pharm", "M.Pharm", "B.Ed", "Other"];
const courseOptions = [
    "B.E. Computer Engineering",
    "B.E. Mechanical Engineering",
    "B.E. Civil Engineering",
    "B.E. Electronics & Telecom",
    "MBA",
    "B.Pharm",
    "M.Pharm",
    "D.Pharm",
    "B.Ed",
    "D.Ed",
    "Diploma in Computer Engineering",
    "Diploma in Mechanical Engineering",
    "B.A.",
    "B.Com",
    "B.Sc. Computer Science",
];
const passingYears = Array.from({ length: 26 }, (_, i) => String(2000 + i));

const inputBase =
    "w-full px-4 py-3 rounded-xl border border-gray-900 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200";

const selectBase =
    "w-full px-4 py-3 rounded-xl border border-gray-900 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 transition-all duration-200 appearance-none cursor-pointer";

function Label({ children, required }) {
    return (
        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
            {children}
            {required && <span className="text-gray-900 ml-0.5">*</span>}
        </label>
    );
}

function SectionHeading({ step, title, subtitle }) {
    return (
        <div className="flex items-start gap-4 mb-6">
            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">{step}</span>
            </div>
            <div>
                <h3 className="text-gray-900 font-bold text-base">{title}</h3>
                <p className="text-gray-400 text-xs mt-0.5">{subtitle}</p>
            </div>
        </div>
    );
}

function SelectWrapper({ children }) {
    return (
        <div className="relative">
            {children}
            <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
    );
}

export default function AlumniRegistrationForm() {
    const [form, setForm] = useState({
        firstName: "", lastName: "", dob: "", gender: "",
        address: "", email: "", phone: "",
        qualification: "", percentage: "", course: "", passingYear: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white min-h-screen">

            <div
                className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/alumni/registration-form.png')",
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
                        Registration Form
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        Discover excellence in education and innovation.
                    </p>
                </motion.div>
            </div>

            {/* ── Form card ── */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 py-20" ref={ref}>
                <motion.div
                    className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {/* Form header */}
                    <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900">Registration Form</h2>
                        <p className="text-gray-400 text-sm mt-1">
                            Fill in all the required details carefully. Fields marked with <span className="text-gray-900 font-semibold">*</span> are mandatory.
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                className="px-8 py-20 flex flex-col items-center text-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-5">
                                    <FiCheck className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-gray-900 font-bold text-xl mb-2">Application Submitted</h3>
                                <p className="text-gray-500 text-sm max-w-sm">
                                    Thank you for registering with Brahma Valley. We'll review your application and get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 px-6 py-2.5 border border-gray-900 rounded-xl text-gray-900 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200"
                                >
                                    Submit Another
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                onSubmit={handleSubmit}
                                className="px-8 pt-8 pb-8 space-y-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >

                                {/* ── 1. Personal Information ── */}
                                <div>
                                    <SectionHeading
                                        step="1"
                                        title="Personal Information"
                                        subtitle="Your basic personal details"
                                    />
                                    <div className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label required>First Name</Label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={form.firstName}
                                                        onChange={set("firstName")}
                                                        placeholder="Samiksha"
                                                        required
                                                        className={inputBase + " pl-10"}
                                                    />
                                                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                            <div>
                                                <Label required>Last Name</Label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={form.lastName}
                                                        onChange={set("lastName")}
                                                        placeholder="savdekar"
                                                        required
                                                        className={inputBase + " pl-10"}
                                                    />
                                                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label required>Date of Birth</Label>
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        value={form.dob}
                                                        onChange={set("dob")}
                                                        required
                                                        className={inputBase + " pl-10"}
                                                    />
                                                    <FiCalendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                                </div>
                                            </div>
                                            <div>
                                                <Label required>Gender</Label>
                                                <SelectWrapper>
                                                    <select
                                                        value={form.gender}
                                                        onChange={set("gender")}
                                                        required
                                                        className={selectBase}
                                                    >
                                                        <option value="">Select Gender</option>
                                                        {genderOptions.map((g) => (
                                                            <option key={g} value={g}>{g}</option>
                                                        ))}
                                                    </select>
                                                </SelectWrapper>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-100" />

                                {/* ── 2. Contact Information ── */}
                                <div>
                                    <SectionHeading
                                        step="2"
                                        title="Contact Information"
                                        subtitle="How can we reach you"
                                    />
                                    <div className="space-y-5">
                                        <div>
                                            <Label required>Address</Label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    value={form.address}
                                                    onChange={set("address")}
                                                    placeholder="1234 Main St, Nashik, Maharashtra"
                                                    required
                                                    className={inputBase + " pl-10"}
                                                />
                                                <FiMapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label required>Email Address</Label>
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        value={form.email}
                                                        onChange={set("email")}
                                                        placeholder="email@example.com"
                                                        required
                                                        className={inputBase + " pl-10"}
                                                    />
                                                    <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                            <div>
                                                <Label required>Phone Number</Label>
                                                <div className="relative">
                                                    <input
                                                        type="tel"
                                                        value={form.phone}
                                                        onChange={set("phone")}
                                                        placeholder="123-456-7890"
                                                        required
                                                        className={inputBase + " pl-10"}
                                                    />
                                                    <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-100" />

                                {/* ── 3. Academic Information ── */}
                                <div>
                                    <SectionHeading
                                        step="3"
                                        title="Academic Information"
                                        subtitle="Your educational background"
                                    />
                                    <div className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label required>Last Qualification</Label>
                                                <SelectWrapper>
                                                    <select
                                                        value={form.qualification}
                                                        onChange={set("qualification")}
                                                        required
                                                        className={selectBase}
                                                    >
                                                        <option value="">Select Qualification</option>
                                                        {qualifications.map((q) => (
                                                            <option key={q} value={q}>{q}</option>
                                                        ))}
                                                    </select>
                                                </SelectWrapper>
                                            </div>
                                            <div>
                                                <Label required>Percentage / Grade</Label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={form.percentage}
                                                        onChange={set("percentage")}
                                                        placeholder="75% or A+"
                                                        required
                                                        className={inputBase + " pl-10"}
                                                    />
                                                    <FiBook className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-100" />

                                {/* ── 4. Course Selection ── */}
                                <div>
                                    <SectionHeading
                                        step="4"
                                        title="Course Selection"
                                        subtitle="Choose the programme you wish to apply for"
                                    />
                                    <div className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <Label required>Select Course</Label>
                                                <SelectWrapper>
                                                    <select
                                                        value={form.course}
                                                        onChange={set("course")}
                                                        required
                                                        className={selectBase}
                                                    >
                                                        <option value="">Select Course</option>
                                                        {courseOptions.map((c) => (
                                                            <option key={c} value={c}>{c}</option>
                                                        ))}
                                                    </select>
                                                </SelectWrapper>
                                            </div>
                                            <div>
                                                <Label required>Passing Year</Label>
                                                <SelectWrapper>
                                                    <select
                                                        value={form.passingYear}
                                                        onChange={set("passingYear")}
                                                        required
                                                        className={selectBase}
                                                    >
                                                        <option value="">Select Year</option>
                                                        {passingYears.map((y) => (
                                                            <option key={y} value={y}>{y}</option>
                                                        ))}
                                                    </select>
                                                </SelectWrapper>
                                            </div>
                                        </div>

                                        <div>
                                            <Label>Additional Message</Label>
                                            <textarea
                                                value={form.message}
                                                onChange={set("message")}
                                                placeholder="Any additional information you'd like to share..."
                                                rows={4}
                                                className={inputBase + " resize-none"}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* ── Submit ── */}
                                <div className="pt-2">
                                    <div className="h-px bg-gray-100 mb-6" />
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <p className="text-gray-400 text-xs">
                                            By submitting, you agree to our terms and privacy policy.
                                        </p>
                                        <motion.button
                                            type="submit"
                                            className="flex items-center gap-2 px-8 py-3.5 bg-blue-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors duration-200 w-full sm:w-auto justify-center"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Submit Application
                                            <FiArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}