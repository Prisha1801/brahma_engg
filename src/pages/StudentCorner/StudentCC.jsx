import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiPhone, FiSearch, FiUser, FiBriefcase } from "react-icons/fi";

// ── Mock Data — replace with API later
const contactData = [
    { id: 1, name: "Mr Dhumal Ajay Vitthal", designation: "Head", department: "Assistant Professor - Mech", contact: "9822897933" },
    { id: 2, name: "Ms Kakade Priyanka Prakash", designation: "Member", department: "HOD - Engg Sciences", contact: "9373977574" },
    { id: 3, name: "Mr Landge Hitesh Sandip", designation: "Member", department: "Student Representative", contact: "9511881406" },
    { id: 4, name: "Mr Jadhav Ghanasham Sandeep", designation: "Member", department: "Student Representative", contact: "9021959065" },
    { id: 5, name: "Ms Kuwar Gayatri Sanjay", designation: "Member", department: "Student Representative", contact: "7620932590" },
    { id: 6, name: "Ms Dani Rajnandini Harish", designation: "Member", department: "Student Representative", contact: "9075750612" },
];

// Initials avatar
function Avatar({ name }) {
    const parts = name.replace(/^(Dr\.|Prof\.|Mr\.|Mrs\.)\s*/i, "").trim().split(" ");
    const initials = parts.length >= 2
        ? parts[0][0] + parts[1][0]
        : parts[0][0];

    return (
        <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
            <span className="text-gray-500 text-xs font-semibold uppercase">{initials}</span>
        </div>
    );
}

export default function StudentCC() {
    const [search, setSearch] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    const filtered = contactData.filter(
        (c) =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.designation.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section ref={ref} className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* ── Header ── */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 14 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45 }}
                >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-1.5">
                                Faculty & Staff
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Contact Information
                            </h2>
                        </div>

                        {/* Search */}
                        <div className="relative w-full sm:w-64">
                            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search name or role..."
                                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition-all duration-200"
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* ── Table card ── */}
                <motion.div
                    className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                >
                    {/* Column headers */}
                    <div className="grid grid-cols-[48px_1fr_1fr_1fr_auto] items-center px-6 py-3.5 bg-gray-50 border-b border-gray-200">
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">#</span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                            <FiUser className="w-3.5 h-3.5" /> Name
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                            <FiBriefcase className="w-3.5 h-3.5" /> Designation
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                            <FiBriefcase className="w-3.5 h-3.5" /> Department
                        </span>
                        <span className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                            <FiPhone className="w-3.5 h-3.5" /> Contact
                        </span>
                    </div>

                    {/* Rows */}
                    {filtered.length > 0 ? (
                        <div className="divide-y divide-gray-100">
                            {filtered.map((person, i) => (
                                <motion.div
                                    key={person.id}
                                    className="grid grid-cols-[48px_1fr_1fr_1fr_auto] items-center px-6 py-4 hover:bg-gray-50 transition-colors duration-150 group"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.04, duration: 0.25 }}
                                >
                                    {/* Sr No */}
                                    <span className="text-gray-300 text-xs font-mono">
                                        {String(person.id).padStart(2, "0")}
                                    </span>

                                    {/* Name */}
                                    <div className="flex items-center gap-3 min-w-0 pr-4">
                                        <Avatar name={person.name} />
                                        <span className="text-gray-800 text-sm font-medium truncate group-hover:text-gray-900">
                                            {person.name}
                                        </span>
                                    </div>

                                    {/* Designation */}
                                    <span className="text-gray-500 text-sm pr-6 truncate">
                                        {person.designation}
                                    </span>

                                    {/* Department */}
                                    <span className="text-gray-500 text-sm pr-6 truncate">
                                        {person.department}
                                    </span>

                                    {/* Contact */}
                                    <a
                                        href={`tel:${person.contact}`}
                                        className="flex items-center gap-2 text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors duration-150 whitespace-nowrap group/tel"
                                    >
                                        <span className="w-7 h-7 rounded-full bg-gray-100 group-hover/tel:bg-gray-200 flex items-center justify-center transition-colors duration-150 shrink-0">
                                            <FiPhone className="w-3.5 h-3.5 text-gray-500" />
                                        </span>
                                        {person.contact}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-16 text-center">
                            <p className="text-gray-400 text-sm">No results found for "{search}"</p>
                            <button
                                onClick={() => setSearch("")}
                                className="mt-3 text-gray-500 text-xs font-semibold hover:text-gray-800 transition-colors"
                            >
                                Clear search
                            </button>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                        <p className="text-gray-400 text-xs">
                            {filtered.length} of {contactData.length} contacts
                        </p>
                        <p className="text-gray-400 text-xs hidden sm:block">
                            Click on a number to call directly
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}