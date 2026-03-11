import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const YOUTUBE_ID = "c2u77NAf5x8";

const BrahmaValleyCampus = () => {
    const [playing, setPlaying] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.section
            ref={ref}
            className="bg-[#0d1b2a] py-16 px-5 font-['Plus_Jakarta_Sans',sans-serif]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .play-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .play-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 40px rgba(255, 0, 0, 0.5);
        }

        .yt-thumb {
          transition: transform 0.6s cubic-bezier(0.23,1,0.32,1);
        }
        .video-wrapper:hover .yt-thumb {
          transform: scale(1.03);
        }

        .shimmer-line {
          background: linear-gradient(90deg, #08863C, #4ade80, #08863C);
          background-size: 200% 100%;
          animation: shimmer 2.5s linear infinite;
        }
        @keyframes shimmer {
          from { background-position: 0 0; }
          to   { background-position: 200% 0; }
        }
      `}</style>

            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* ── LEFT: Video ── */}
                <div className="w-full lg:w-[55%] flex-shrink-0">
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.5)] aspect-video video-wrapper">

                        {playing ? (
                            /* Actual YouTube iframe after click */
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                                title="Bramha Valley Education Campus"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            /* Custom thumbnail + play button */
                            <>
                                {/* YouTube thumbnail */}
                                <img
                                    src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                                    alt="Bramha Valley Education Campus"
                                    className="yt-thumb w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = `https://img.youtube.com/vi/${YOUTUBE_ID}/hqdefault.jpg`;
                                    }}
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-black/30" />

                                {/* Top bar (mimics YouTube UI) */}
                                <div className="absolute top-0 left-0 right-0 flex items-center gap-3 px-4 py-3 bg-linear-to-b from-black/60 to-transparent">
                                    {/* YouTube logo circle placeholder */}
                                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </div>
                                    <p className="text-white text-sm font-medium drop-shadow leading-tight line-clamp-1">
                                        Bramha Valley Education Campus | Bramha Valley …
                                    </p>
                                </div>

                                {/* Red Play Button */}
                                <button
                                    onClick={() => setPlaying(true)}
                                    className="play-btn absolute inset-0 flex items-center justify-center"
                                    aria-label="Play video"
                                >
                                    <div className="w-20 h-14 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                                        <svg className="w-7 h-7 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* ── RIGHT: Text ── */}
                <div className="w-full lg:w-[45%]">
                    {/* Green shimmer accent line */}
                    <div className="shimmer-line h-1 w-16 rounded-full mb-5" />

                    <h2 className="text-white text-3xl lg:text-4xl font-extrabold leading-tight mb-6">
                        Bramha Valley<br />
                        <span className="text-[#08863C]">Engineering Colleges</span>
                    </h2>

                    <p className="text-gray-300 text-[15.5px] leading-[1.9] font-normal">
                        To Impart Education to Students to Become the Best Professional Minds
                        and Entrepreneurs of today who will Lead their Activities Successfully.
                        To Provide an Environment which Fosters continuous Improvement and
                        Innovation with Desired Support and Facilities to Enhance Student
                        Learning and Faculty Effectiveness. To Provide Facilities for Personality
                        Grooming, Physical Fitness, and a Strong Sense of Social and
                        Environmental Responsibility.
                    </p>



                    {/* CTA */}
                    <div className="mt-8 flex items-center gap-4">
                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 bg-[#08863C] hover:bg-[#065f2b] text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(8,134,60,0.4)] hover:shadow-[0_4px_28px_rgba(8,134,60,0.6)] hover:-translate-y-0.5"
                        >
                            Know More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href={`https://youtu.be/${YOUTUBE_ID}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-1.5"
                        >
                            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Watch on YouTube
                        </a>
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default BrahmaValleyCampus;