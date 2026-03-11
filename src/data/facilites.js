const facilitiesData = [
  {
    id: 1,
    slug: "library",
    navLabel: "Library",
    title: "Library",
    kicker: "Empowering Academic & Personal Excellence",
    image: "/images/facilities/library.png",
    description:
      "At Brahma Valley College of Engineering & Research Institute, we strive to provide a nurturing and resource-rich environment that enhances both academic and personal growth. Our library facilities are designed to meet modern standards of engineering education.",
    points: [
      "2000+ books, journals, and periodicals.",
      "Access to e-journals and digital resources.",
      "Online databases and engineering content.",
      "Comfortable reading space for focused study.",
    ],
  },

  {
    id: 2,
    slug: "hostel",
    navLabel: "Hostel",
    title: "Hostel",
    kicker: "Comfortable | Secure | Student-Centric Accommodation",
    image: "/images/facilities/hostel.jpg",
    description:
      "At Brahma Valley College of Engineering & Research Institute, we provide a safe and comfortable hostel environment that allows students to focus on academics while enjoying a healthy, community-based lifestyle.",
    points: [
      "Separate hostels for boys and girls within or near campus.",
      "Spacious 2/3-sharing rooms with beds, study tables, and storage.",
      "24/7 security with CCTV surveillance and night wardens.",
      "Essential facilities: RO water, hot water, laundry, Wi-Fi, medical help.",
      "Hygienic mess facility serving 3 vegetarian meals daily.",
      "Regular maintenance and cleaning services.",
      "Hostel Fees: ₹50,000 – ₹60,000 per year (including mess).",
    ],
  },

  {
    id: 3,
    slug: "transport",
    navLabel: "Transport",
    title: "Transport",
    kicker: "Safe, Convenient & Student-Friendly Commute",
    image: "/images/facilities/transport.png",
    description:
      "At Brahma Valley Institute, we understand the importance of reliable and comfortable transportation for students and staff. Our transport facility ensures safe and timely travel across Nashik city and surrounding regions.",
    points: [
      "Well-maintained buses regularly serviced for safety and comfort.",
      "Wide route coverage: Nashik, Trimbak Road, Panchavati & nearby villages.",
      "Affordable annual or semester-wise transport charges.",
      "Experienced drivers and support staff ensuring punctuality.",
      "Fixed timings with emergency backup support.",
    ],
  },

  {
    id: 4,
    slug: "cafeteria",
    navLabel: "Cafeteria",
    title: "Cafeteria",
    kicker: "Hygienic | Nutritious | Student-Friendly",
    image: "/images/facilities/cafeteria.png",
    description:
      "Our on-campus cafeteria provides healthy, hygienic, and affordable food options for students and staff. It is a welcoming space to relax, dine, and interact during academic breaks.",
    points: [
      "Clean and hygienic environment maintained to high standards.",
      "Nutritious vegetarian meals, snacks, and beverages.",
      "Affordable pricing suitable for students.",
      "Spacious seating area for comfortable dining.",
      "Filtered and purified drinking water available.",
      "Quick and efficient service during peak hours.",
      "Open from 8:30 AM to 5:00 PM (Monday to Saturday).",
      "Break hours aligned with class and lab schedules.",
    ],
  },

  {
    id: 5,
    slug: "sports",
    navLabel: "Sports",
    title: "Sports",
    kicker: "Fitness, Teamwork & Holistic Development",
    image: "/images/facilities/sport.png",
    description:
      "We believe sports are essential for student health and overall development. Our facilities and events promote physical fitness, teamwork, leadership, and discipline.",
    points: [
      "Outdoor Games: Volleyball, Cricket, Football, Kho-Kho, Kabaddi.",
      "Indoor Games: Table Tennis, Badminton, Chess, Carrom, Yoga Hall.",
      "Annual Sports Week with competitive events.",
      "Intercollegiate tournament participation.",
      "Fitness & wellness programs including yoga and health drives.",
      "Student Sports Committee manages and organizes activities.",
    ],
  },
];

export const facilitiesBySlug = facilitiesData.reduce((acc, item) => {
  acc[item.slug] = item;
  return acc;
}, {});

export default facilitiesData;
