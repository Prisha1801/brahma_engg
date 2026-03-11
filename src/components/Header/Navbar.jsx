import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../../assets/posters/left-logo.jpg";
import logo2 from "../../assets/posters/right-logo.jpg";

const NestedDropdown = ({ item, onClose }) => {
    const [open, setOpen] = useState(false);
    const nestedRef = useRef(null);

    const handleToggle = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
        onClose();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (nestedRef.current && !nestedRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="relative" ref={nestedRef}>
            <button
                onClick={handleToggle}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
            >
                <span>{item.title}</span>
                <FaChevronDown
                    className={`text-[8px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && item.items && (
                <ul className="absolute left-full top-0 ml-1 w-auto bg-white border border-gray-200 shadow-md z-50 rounded-md">
                    {item.items.map((subItem, index) => (
                        <li key={index}>
                            <Link
                                to={subItem.link}
                                onClick={handleClose}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                            >
                                {subItem.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const Dropdown = ({ title, items }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <li className="relative" ref={dropdownRef}>
            <button
                onClick={handleToggle}
                className="flex items-center gap-0.5 px-3 py-2 text-[12px] xl:text-[13px] font-semibold text-gray-800 hover:text-green-700 uppercase tracking-wide"
            >
                {title}
                <FaChevronDown
                    className={`text-[10px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && items.length > 0 && (
                <ul className="absolute left-0 top-full mt-1 w-64 bg-white border border-gray-200 shadow-md z-[80] rounded-md">
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.items ? (
                                // Nested dropdown
                                <NestedDropdown item={item} onClose={handleClose} />
                            ) : (
                                // Regular link
                                <Link
                                    to={item.link}
                                    onClick={handleClose}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef(null);
    const stickyStartYRef = useRef(0);
    const isStickyRef = useRef(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const updateNavMetrics = () => {
            if (navRef.current) {
                const currentNavHeight = navRef.current.offsetHeight;
                setNavHeight(currentNavHeight);

                // Recalculate start point only while navbar is in normal flow.
                if (!isStickyRef.current) {
                    const navTop = navRef.current.getBoundingClientRect().top + window.scrollY;
                    stickyStartYRef.current = navTop + currentNavHeight;
                }
            }
        };

        const updateStickyState = () => {
            const shouldStick = window.scrollY >= stickyStartYRef.current;

            if (shouldStick !== isStickyRef.current) {
                isStickyRef.current = shouldStick;
                setIsSticky(shouldStick);
            }
        };

        updateNavMetrics();
        updateStickyState();

        window.addEventListener("scroll", updateStickyState, { passive: true });
        window.addEventListener("resize", updateNavMetrics);
        window.addEventListener("resize", updateStickyState);

        return () => {
            window.removeEventListener("scroll", updateStickyState);
            window.removeEventListener("resize", updateNavMetrics);
            window.removeEventListener("resize", updateStickyState);
        };
    }, []);

    const navData = [
        {
            title: "About Us",
            items: [
                { label: "Board Members", link: "/board-members" },
                { label: "President Desk", link: "/president-desk" },
                { label: "General Secretory Desk", link: "/secretary-desk" },
                { label: "Vice President Desk", link: "/vice-president-desk" },
                { label: "Principal Desk", link: "/principal-desk" },
                { label: "Local Managing Committee", link: "/local-managing-committee" },
                { label: "College Committee", link: "/college-committee" },
                { label: "Vision & Mission", link: "/vision-mission" },
                { label: "Approvals & Affiliations", link: "/approvals-affiliations" },
            ],
        },
        {
            title: "Departments",
            items: [
                { label: "Mechanical Engg", link: "/departments/mechanical-engineering" },
                { label: "Computer Engg", link: "/departments/computer-engineering" },
                { label: "Civil Engg", link: "/departments/civil-engineering" },
                { label: "Electrical Engg", link: "/departments/electrical-engineering" },
                { label: "First Year Engg", link: "/departments/first-year-engineering" },
                { label: "M.B.A", link: "/departments/mba" },
            ],
        },
        {
            title: "Admissions",
            items: [
                { label: "Program Details", link: "/addmission/program-details" },
                { label: "Eligibility", link: "/addmission/eligibility" },
                { label: "Fee Structure", link: "/addmission/fees-structure" },
                { label: "Information Brochures", link: `${window.location.origin}/pdf/information brochure.pdf`, external: true },
                { label: "Rules & Regulations", link: "/rules-regulations" },
                { label: "Admission Form", link: "/addmission/admission-form" },
                {
                    title: "Institute Level Admission",
                    items: [
                        { label: "FE Admission", link: "/addmission/fe-admission" },
                        { label: "DSE Admission", link: "/addmission/dse-admission" },
                        { label: "MBA Admission", link: "/addmission/mba-admission" },
                    ]
                },
                {
                    title: "Against CAP vacancy admission",
                    items: [
                        { label: "FE Admission", link: "/addmission/fe-admission" },
                        { label: "DSE Admission", link: "/addmission/dse-admission" },
                        { label: "MBA Admission", link: "/addmission/mba-admission" },
                    ]
                },
            ],
        },
        {
            title: "NAAC",
            items: [
                { label: "IQAC", link: "/naac/iqac" },
                { label: "IIQA", link: "/naac/iiqa" },
                { label: "Best Practices", link: "/naac/best-practices" },
                { label: "Feedback", link: "/naac/feedback" },
                {
                    title: "NAAC SSR",
                    items: [
                        { label: "Cycle-1", link: "/naac/cycle-1" }
                    ]
                },
                { label: "NAAC Documents", link: "/naac/naac-documents" },
                {
                    title: "AQAR",
                    items: [
                        { label: "2022-23", link: "/naac/aqar-2022-23" },
                        { label: "2023-24", link: "/naac/aqar-2023-24" }
                    ]
                },
                { label: "AQAR Documents", link: "/naac/aqar-documents" },
                { label: "NIRF", link: "/naac/nirf" },
            ],
        },
        {
            title: "Student Corner",
            items: [
                { label: "Notices", link: "/notices" },
                { label: "Examination", link: "/examination" },
                { label: "Rules & Regulations", link: "/rules-regulations" },
                { label: "Important Contacts", link: "/important-contacts" },
                { label: "Student Council Committee", link: "/student-council-committee" },
                {
                    title: "Alumni", items: [
                        { label: "Alumni Student Details", link: "/alumni-student-details" },
                        { label: "Registration Form Details", link: "/registration-form-details" },
                        { label: "Alumni Meet Details", link: "/alumni-meet-details" },
                        { label: "Alumni in Different Countries", link: "/alumni-in-different-countries" },
                    ]
                },
            ],
        },
        {
            title: 'Facilities',
            items: [
                { label: 'Library', link: '/facilities/library' },
                { label: 'Hostel', link: '/facilities/hostel' },
                { label: 'Transport', link: '/facilities/transport' },
                { label: 'Cafeteria', link: '/facilities/cafeteria' },
                { label: 'Sports', link: '/facilities/sports' },
            ],
        },
        {
            title: "Media Coverage",
            items: [
                { label: "Events", link: "/events" },
                { label: "News", link: "/news" },
            ],
        },
    ];

    return (
        <>
            {isSticky && <div style={{ height: navHeight }} />}
            <header
                ref={navRef}
                className={`w-full bg-white shadow-sm border-b border-gray-200 transition-all duration-200 ${isSticky ? "fixed top-0 left-0 right-0 z-50" : "relative"
                    }`}
            >
                <nav className="w-full px-6 xl:px-10 py-3 flex items-center">

                    {/* LEFT LOGO */}
                    <div className="shrink-0">
                        <Link to="/">
                            <img src={logo1} alt="Logo" className="h-10 md:h-12 xl:h-14" />
                        </Link>
                    </div>

                    {/* DESKTOP MENU - Hidden on Mobile/Laptop (up to XL) */}
                    <div className="flex-1 hidden xl:flex items-center justify-center px-2">
                        <ul className="flex items-center space-x-1 text-[12px] xl:text-[13px] font-semibold uppercase tracking-wide whitespace-nowrap">
                            <li>
                                <Link to="/" className="px-1.5 hover:text-bviom-green transition-colors">
                                    Home
                                </Link>
                            </li>

                            {/* About Us, Departments, Admissions, NAAC */}
                            {navData.slice(0, 4).map((group, idx) => (
                                <li key={idx}>
                                    <Dropdown
                                        title={group.title}
                                        items={group.items}
                                        closeMenu={() => setIsMobileMenuOpen(false)}
                                    />
                                </li>
                            ))}

                            {/* Placement Cell after NAAC */}
                            <li>
                                <Link to="/placement-cell" className="px-1.5 hover:text-bviom-green transition-colors">
                                    Placement Cell
                                </Link>
                            </li>

                            {/* Student Corner */}
                            <li>
                                <Dropdown
                                    title={navData[4].title}
                                    items={navData[4].items}
                                    closeMenu={() => setIsMobileMenuOpen(false)}
                                />
                            </li>

                            {/* Gallery after Student Corner */}
                            <li>
                                <Link to="/gallery" className="px-1.5 hover:text-bviom-green transition-colors">
                                    Gallery
                                </Link>
                            </li>

                            {/* Facilities, Media Coverage */}
                            {navData.slice(5, 7).map((group, idx) => (
                                <li key={idx}>
                                    <Dropdown
                                        title={group.title}
                                        items={group.items}
                                        closeMenu={() => setIsMobileMenuOpen(false)}
                                    />
                                </li>
                            ))}

                            <li>
                                <Link to="/contact" className="px-1.5 hover:text-bviom-green transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT LOGO & MOBILE BUTTON CONTAINER */}
                    <div className="flex-1 xl:flex-none flex items-center justify-end gap-2 xl:gap-0">
                        {/* RIGHT LOGO - Now visible on all screens */}
                        <div className="flex-shrink-0 xl:pl-6">
                            <Link to="/">
                                <img src={logo2} alt="Right Logo" className="h-10 md:h-14 xl:h-20" />
                            </Link>
                        </div>

                        {/* MOBILE MENU BUTTON - Only visible on XL and smaller */}
                        <div className="xl:hidden flex items-center">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-2xl p-2 text-gray-700 hover:text-green-700 transition-colors focus:outline-none"
                            >
                                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>

                </nav>

                {/* MOBILE SIDE MENU OVERLAY */}
                <div
                    className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 xl:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={closeMobileMenu}
                ></div>

                {/* MOBILE SIDE MENU */}
                <div
                    className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform xl:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="p-6 flex flex-col h-full overflow-y-auto">
                        <div className="flex justify-between items-center mb-8">
                            <img src={logo1} alt="Logo" className="h-10" />
                            <button onClick={closeMobileMenu} className="text-2xl text-gray-700">
                                <FaTimes />
                            </button>
                        </div>

                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    onClick={closeMobileMenu}
                                    className="block py-2 text-sm font-semibold text-gray-800 hover:text-green-700 uppercase"
                                >
                                    Home
                                </Link>
                            </li>

                            {/* About Us, Departments, Admissions, NAAC */}
                            {navData.slice(0, 4).map((group, idx) => (
                                <li key={idx}>
                                    <div className="py-2">
                                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">
                                            {group.title}
                                        </span>
                                        <ul className="pl-4 space-y-1">
                                            {group.items.map((item, i) => (
                                                <li key={i}>
                                                    <Link
                                                        to={item.link}
                                                        onClick={closeMobileMenu}
                                                        className="block py-1.5 text-sm text-gray-600 hover:text-green-700 border-l border-gray-100 pl-3"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}

                            {/* Placement Cell */}
                            <li>
                                <Link
                                    to="/placement-cell"
                                    onClick={closeMobileMenu}
                                    className="block py-2 text-sm font-semibold text-gray-800 hover:text-green-700 uppercase"
                                >
                                    Placement Cell
                                </Link>
                            </li>

                            {/* Student Corner */}
                            <li>
                                <div className="py-2">
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">
                                        {navData[4].title}
                                    </span>
                                    <ul className="pl-4 space-y-1">
                                        {navData[4].items.map((item, i) => (
                                            <li key={i}>
                                                <Link
                                                    to={item.link}
                                                    onClick={closeMobileMenu}
                                                    className="block py-1.5 text-sm text-gray-600 hover:text-green-700 border-l border-gray-100 pl-3"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>

                            {/* Gallery */}
                            <li>
                                <Link
                                    to="/gallery"
                                    onClick={closeMobileMenu}
                                    className="block py-2 text-sm font-semibold text-gray-800 hover:text-green-700 uppercase"
                                >
                                    Gallery
                                </Link>
                            </li>

                            {/* Facilities, Media Coverage */}
                            {navData.slice(5, 7).map((group, idx) => (
                                <li key={idx}>
                                    <div className="py-2">
                                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">
                                            {group.title}
                                        </span>
                                        <ul className="pl-4 space-y-1">
                                            {group.items.map((item, i) => (
                                                <li key={i}>
                                                    <Link
                                                        to={item.link}
                                                        onClick={closeMobileMenu}
                                                        className="block py-1.5 text-sm text-gray-600 hover:text-green-700 border-l border-gray-100 pl-3"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}

                            <li>
                                <Link
                                    to="/contact"
                                    onClick={closeMobileMenu}
                                    className="block py-2 text-sm font-semibold text-gray-800 hover:text-green-700 uppercase"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
