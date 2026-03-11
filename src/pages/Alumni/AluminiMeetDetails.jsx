import { motion } from "framer-motion";

export default function AluminiMeetDetails() {
    return (
        <div className="w-full bg-white">

            {/* HERO */}
            <section className="relative w-full h-[420px] overflow-hidden">
                <img
                    src="/alumni/alumni-meet-details.png"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-5xl font-semibold tracking-wide">
                            Alumni Student
                        </h1>
                        <p className="mt-3 text-sm tracking-wide text-gray-200">
                            Stay connected. Reunite. Celebrate your journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-2 bg-neutral-200 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition"></div>

                        <img
                            src="/alumni/alumni-meet.webp"
                            className="relative rounded-xl shadow-lg object-cover"
                        />
                    </motion.div>

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-neutral-800">
                            Bramhа Valley Education Society's Alumni Meet –
                            <br /> Vapi, Gujarat
                        </h2>

                        <p className="mt-6 text-sm leading-relaxed text-neutral-600">
                            Dear Alumni, we are thrilled to invite you to an unforgettable
                            gathering hosted by Brahma Valley Education Society. Join us at
                            Hotel Fortune Park Galaxy, NH 8, Vapi, Gujarat on 24th November
                            2024 at 10:00 AM, followed by a delightful lunch.
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                            This is a special moment to reconnect with your peers, teachers,
                            and the institution that helped shape your journey. Your presence
                            will make it even more meaningful.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            className="mt-8 px-6 py-3 bg-black text-white text-sm rounded-lg tracking-wide"
                        >
                            Register Now for Alumni Meet
                        </motion.button>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}