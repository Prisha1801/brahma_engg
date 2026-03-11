import { motion } from "framer-motion";

const reports = [
    {
        title: "Alumni Meet",
        location: "In Germany",
        year: "2023",
        image: "/alumni/alumni-meet.webp",
    },
    {
        title: "Alumni Meet",
        location: "In UK",
        year: "2024",
        image: "/alumni/alumni-meet.webp",
    },
    {
        title: "Alumni Meet",
        location: "In Delhi",
        year: "2022",
        image: "/alumni/alumni-meet.webp",
    },
    {
        title: "Alumni",
        location: "In Canada",
        year: "2021",
        image: "/alumni/alumni-meet.webp",
    },
];

export default function AlumniReports() {
    return (
        <div className="bg-white">

            {/* HERO */}
            <section className="relative h-[420px] overflow-hidden">
                <img
                    src="/alumni/alumni-in-different-countries.png"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-5xl font-semibold tracking-wide">
                            Alumni Meet Reports
                        </h1>
                        <p className="mt-3 text-sm text-neutral-300">
                            Catch a glimpse of our global alumni reunions
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* DESCRIPTION */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-xl font-semibold text-neutral-800">
                    Bramha Valley Education Society's Alumni Meet at Vapi, Gujarat
                </h2>

                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                    Dear Alumni, we are excited to announce that Bramha Valley Education
                    Society, Nashik is organizing alumni meet at Hotel Fortune Park
                    Galaxy, NH 8, Vapi, Gujarat on 24th November 2024 at 10:00 AM,
                    followed by lunch.
                </p>

                <p className="mt-2 text-sm text-neutral-600">
                    The Management, Principal, Faculty, and Staff warmly invite you to
                    join us for this special reunion and honor us with your presence.
                </p>
            </section>

            {/* CARDS */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {reports.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl transition"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-5 text-center">
                                <p className="text-sm font-semibold text-neutral-800">
                                    {item.title}
                                </p>

                                <p className="text-xs text-neutral-500 mt-1">
                                    {item.location}
                                </p>

                                <p className="text-xs text-neutral-400 mt-1">
                                    Year: {item.year}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </section>

        </div>
    );
}