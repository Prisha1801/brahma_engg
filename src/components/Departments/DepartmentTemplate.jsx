import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";


const SectionHeader = ({ title }) => (
    <div className="bg-slate-900 rounded-t-lg px-6 py-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
    </div>
);

const HomeSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700 leading-relaxed">
            <div className="flex flex-col gap-2 mb-4">
                <p><span className="font-bold">UG(B.E.) Establishment Year:</span> {data.establishmentYear}</p>
                <p><span className="font-bold">UG Intake:</span> {data.intake}</p>
                <p><span className="font-bold">UG Duration of Course:</span> {data.duration}</p>
                <p><span className="font-bold">Affiliated to:</span> {data.affiliatedTo}</p>
                <p><span className="font-bold">Location:</span> {data.location}</p>
                <p><span className="font-bold">Contact:</span> {data.contact}</p>
            </div>
            <hr className="my-5 border-gray-200" />
            <h3 className="text-slate-900 font-semibold text-base mb-2">Our Vision</h3>
            <p className="text-gray-500 italic mb-4">
                {data.vision}
            </p>
            <h3 className="text-slate-900 font-semibold text-base mb-2">Our Mission</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1 mb-4">
                {data.mission.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3 className="text-slate-900 font-semibold text-base mb-2">Quality Policy</h3>
            <p>{data.qualityPolicy}</p>
        </div>
    </div>
);

// --- HOD's Desk Section ---
const HodSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700 leading-relaxed">
            <div className="flex flex-wrap gap-6 items-start mb-5">
                <div className="flex flex-col items-center">
                    <div className="w-28 h-28 rounded-full bg-slate-100 border-4 border-slate-800 flex items-center justify-center text-5xl overflow-hidden">
                        <img src={data.image} alt={data.name} className='w-full h-full object-cover rounded-full' />
                    </div>
                    <p className="mt-2 font-semibold text-gray-800 text-center text-xs">{data.name}</p>
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <p><span className="font-bold">Designation:</span> {data.designation}</p>
                    <p><span className="font-bold">Qualification:</span> {data.qualification}</p>
                    <p><span className="font-bold">Experience:</span> {data.experience}</p>
                    <p><span className="font-bold">Specialization:</span> {data.specialization}</p>
                    <p><span className="font-bold">Mobile:</span> {data.mobile}</p>
                    <p><span className="font-bold">Email-id:</span> {data.email}</p>
                    <p><span className="font-bold">Office-Address:</span> {data.officeAddress}</p>
                </div>
            </div>
            {data.about && (
                <>
                    <hr className="my-5 border-gray-200" />
                    <h3 className="text-slate-900 font-semibold text-base mb-2">About the Department</h3>
                    {data.about.split('\n\n').map((para, index) => (
                        <p key={index} className={index > 0 ? 'mt-3' : ''}>{para}</p>
                    ))}
                </>
            )}
            <hr className="my-5 border-gray-200" />
            <h3 className="text-slate-900 font-semibold text-base mb-2">Our Vision</h3>
            <p className="text-gray-500 italic mb-4">
                {data.vision}
            </p>
            <h3 className="text-slate-900 font-semibold text-base mb-2">Our Mission</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1 mb-4">
                {data.mission.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

// --- Faculty Section ---
const FacultySection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Sr.No.</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Name of Faculty</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Designation</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Qualification</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Teaching Experience</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {data.faculty.map((faculty, index) => (
                        <tr
                            key={faculty.id}
                            className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                        >
                            <td className="px-4 py-3 border-b border-gray-100">{faculty.id}</td>
                            <td className="px-4 py-3 border-b border-gray-100">{faculty.name}</td>
                            <td className="px-4 py-3 border-b border-gray-100">{faculty.designation}</td>
                            <td className="px-4 py-3 border-b border-gray-100">{faculty.qualification}</td>
                            <td className="px-4 py-3 border-b border-gray-100">{faculty.experience}</td>
                            <td className="px-4 py-3 border-b border-gray-100">
                                {faculty.resume ? (
                                    <a
                                        href={faculty.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-700 font-semibold hover:text-slate-900 hover:underline transition-colors"
                                    >
                                        View
                                    </a>
                                ) : (
                                    <span className="text-gray-400">NA</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// --- Laboratory Section ---
const LaboratorySection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700 leading-relaxed">
            <ul className="list-disc pl-5 flex flex-col gap-2">
                {data.labs.map((lab, index) => (
                    <li key={index}>
                        {typeof lab === 'string' ? (
                            lab
                        ) : (
                            <>
                                {lab.name}
                                {lab.subItems && (
                                    <ul className="list-[circle] pl-6 mt-1 flex flex-col gap-1">
                                        {lab.subItems.map((sub, i) => <li key={i}>{sub}</li>)}
                                    </ul>
                                )}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

// --- Student Projects Section ---
const StudentProjectsSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Sr No.</th>
                        <th className="px-4 py-3 text-left font-semibold">Topic</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Guide</th>
                        <th className="px-4 py-3 text-left font-semibold">Students</th>
                    </tr>
                </thead>
                <tbody>
                    {data.projects.map((project, index) => (
                        <tr key={project.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{project.id}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{project.topic}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top whitespace-nowrap">{project.guide}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">
                                <ul className="list-disc pl-4 flex flex-col gap-1">
                                    {project.students.map((s, i) => <li key={i}>{s}</li>)}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const InnovativeTeachingSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700 leading-relaxed">
            {data.methods.map((item, index, arr) => (
                <div key={index}>
                    <p>
                        <span className="font-semibold">{item.title}:</span> {item.desc}
                    </p>
                    {index < arr.length - 1 && <hr className="my-4 border-gray-100" />}
                </div>
            ))}
        </div>
    </div>
);

// --- Placements Section ---
const PlacementsSection = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const openModal = (index) => {
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setCurrentIndex(null);
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? data.images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === data.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div>
            <SectionHeader title={data.title} />

            <div className="bg-white rounded-b-lg shadow p-6">
                <div className="grid grid-cols-3 gap-4">
                    {data.images.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => openModal(i)}
                            className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-44 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {currentIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white text-2xl hover:text-gray-300"
                    >
                        <FaTimes />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-6 text-white text-3xl hover:text-gray-300"
                    >
                        <FaChevronLeft />
                    </button>

                    <img
                        src={data.images[currentIndex].src}
                        alt={data.images[currentIndex].alt}
                        className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
                    />

                    <button
                        onClick={nextImage}
                        className="absolute right-6 text-white text-3xl hover:text-gray-300"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

// --- News Letter Section ---
const NewsLetterSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6 text-sm text-gray-700">
            <div className="border-b border-gray-200 pb-4">
                <p className="font-medium mb-2">{data.pdfLabel}</p>
                <a
                    href={data.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-slate-900 hover:underline transition-colors"
                >
                    View PDF
                </a>
            </div>
        </div>
    </div>
);

// --- Staff Achievement Section ---
const StaffAchievementSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Sr.No.</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Name of Staff</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">FDP/STTP/Industrial Training</th>
                        <th className="px-4 py-3 text-left font-semibold">Role(Expert/Participant)</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {data.achievements.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{item.id}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top whitespace-nowrap">{item.name}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{item.fdp}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top">{item.role}</td>
                            <td className="px-4 py-3 border-b border-gray-100 align-top whitespace-nowrap">{item.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// --- Student Achievements Section ---
const StudentAchievementsSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Sr.No.</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Name</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Event/Training</th>
                        <th className="px-4 py-3 text-left font-semibold">Achievement</th>
                        <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {data.achievements.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-4 py-3 border-b border-gray-100">{item.id}</td>
                            <td className="px-4 py-3 border-b border-gray-100 whitespace-nowrap">{item.name}</td>
                            <td className="px-4 py-3 border-b border-gray-100">{item.fdp}</td>
                            <td className="px-4 py-3 border-b border-gray-100">{item.role}</td>
                            <td className="px-4 py-3 border-b border-gray-100 whitespace-nowrap">{item.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// --- Syllabus Section ---
const SyllabusSection = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <div>
            <SectionHeader title={data.title} />
            <div className="bg-white rounded-b-lg shadow p-6">
                <p className="text-sm font-semibold text-gray-700 mb-4">{data.subtitle}</p>
                <div className="flex flex-col gap-3">
                    {data.categories.map((item, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border border-slate-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full text-left px-5 py-3 bg-slate-900 text-white font-semibold text-sm"
                            >
                                {item.year}
                            </button>
                            {openIndex === index && item.links.length > 0 && (
                                <div className="px-5 py-3 flex flex-col gap-2 bg-white">
                                    {item.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-700 text-sm hover:underline hover:text-slate-900 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Video Section ---
const VideoSection = ({ data }) => (
    <div>
        <SectionHeader title={data.title} />
        <div className="bg-white rounded-b-lg shadow p-6">
            <div className="flex flex-wrap gap-4">
                {data.videos.map((video, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border border-gray-200 shadow-sm w-72">
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={video.embedUrl}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <p className="text-center text-sm font-semibold text-slate-900 py-3 border-t border-gray-100">
                            {video.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// --- Photo Gallery Section ---
const PhotoGallerySection = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const openModal = (index) => {
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setCurrentIndex(null);
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? data.images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === data.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div>
            <SectionHeader title={data.title} />

            {/* Gallery Grid */}
            <div className="bg-white rounded-b-lg shadow p-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {data.images.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(index)}
                            className="cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentNode.classList.add(
                                        'bg-slate-100',
                                        'flex',
                                        'items-center',
                                        'justify-center',
                                        'h-44'
                                    );
                                    e.target.parentNode.innerHTML =
                                        `<p class="text-gray-400 text-xs text-center p-3">${img.alt}</p>`;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {currentIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
                    >
                        <FaTimes />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-6 text-white text-4xl hover:text-gray-300 transition"
                    >
                        <FaChevronLeft />
                    </button>

                    <div className="flex flex-col items-center">
                        <img
                            src={data.images[currentIndex].src}
                            alt={data.images[currentIndex].alt}
                            className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                        />
                        <p className="text-white text-sm mt-4">
                            {data.images[currentIndex].alt}
                        </p>
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-6 text-white text-4xl hover:text-gray-300 transition"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

// --- Placeholder Section ---
const PlaceholderSection = ({ title }) => (
    <div>
        <SectionHeader title={title} />
        <div className="bg-white rounded-b-lg shadow px-6 py-16 text-center text-gray-400 text-sm">
            Content for <span className="font-semibold text-gray-600">{title}</span> will be added soon.
        </div>
    </div>
);

// --- Section Renderer ---
const renderSection = (active, data) => {
    // Map section names to their corresponding data keys and components
    const sectionMap = {
        'Home': { component: HomeSection, dataKey: 'homeSection' },
        "HOD's Desk": { component: HodSection, dataKey: 'hodSection' },
        'Faculty': { component: FacultySection, dataKey: 'facultySection' },
        'Laboratory': { component: LaboratorySection, dataKey: 'laboratorySection' },
        'Student Projects': { component: StudentProjectsSection, dataKey: 'studentProjectsSection' },
        'Innovative Teaching Methods': { component: InnovativeTeachingSection, dataKey: 'innovativeTeachingSection' },
        'Placements': { component: PlacementsSection, dataKey: 'placementsSection' },
        'News Letter': { component: NewsLetterSection, dataKey: 'newsLetterSection' },
        'Staff Achievement': { component: StaffAchievementSection, dataKey: 'staffAchievementSection' },
        'Student Achievements': { component: StudentAchievementsSection, dataKey: 'studentAchievementsSection' },
        'Syllabus': { component: SyllabusSection, dataKey: 'syllabusSection' },
        'Video': { component: VideoSection, dataKey: 'videoSection' },
        'Photo Gallery': { component: PhotoGallerySection, dataKey: 'photoGallerySection' },
    };

    const sectionConfig = sectionMap[active];
    
    if (sectionConfig && data[sectionConfig.dataKey]) {
        const Component = sectionConfig.component;
        return <Component data={data[sectionConfig.dataKey]} />;
    }

    // Fallback to placeholder if section not found or data missing
    return <PlaceholderSection title={active} />;
};

// --- Main Department Template Component ---
const DepartmentTemplate = ({ data }) => {
    const [activeSection, setActiveSection] = useState(data.sidebarItems[0] || 'Home');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div>
            <HeroSection {...data.hero} />

            <motion.div
                ref={ref}
                className="max-w-6xl mx-auto px-5 py-10 flex gap-6 items-start"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >

                {/* Sidebar */}
                <motion.aside
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="lg:sticky lg:top-24 w-64 flex-shrink-0"
                >
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{data.sidebarTitle}</p>
                        </div>
                        <div className="p-2">
                            {data.sidebarItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveSection(item)}
                                    className={`mb-1 block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${activeSection === item
                                        ? "bg-slate-900 text-white"
                                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.aside>

                {/* Main Content */}
                <motion.main
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="flex-1 min-w-0"
                >
                    {renderSection(activeSection, data)}
                </motion.main>

            </motion.div>
        </div>
    );
};

export default DepartmentTemplate;
