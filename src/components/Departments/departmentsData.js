const createFaculty = (id, name, designation, qualification, experience, resume = null) => ({
    id, name, designation, qualification, experience, resume
});

const createProject = (id, topic, guide, students) => ({
    id, topic, guide, students
});

const createAchievement = (id, name, fdp, role, year) => ({
    id, name, fdp, role, year
});

const createTeachingMethod = (title, desc) => ({ title, desc });

export const mechanicalEnggData = {
    hero: {
        backgroundImage: '/departments/mechanicalHero.png',
        title: 'Department of Mechanical Engineering',
        subtitle: 'Excellence in Engineering Education',
        overlay: true
    },
    
    sidebarTitle: 'Department of Mechanical',
    
    sidebarItems: [
        'Home',
        "HOD's Desk",
        'Faculty',
        'Laboratory',
        'Student Projects',
        'Innovative Teaching Methods',
        'Placements',
        'News Letter',
        'Staff Achievement',
        'Student Achievements',
        'Syllabus',
        'Video',
        'Photo Gallery',
    ],
    
    homeSection: {
        title: 'Mechanical Engineering',
        establishmentYear: '2008',
        intake: '120',
        duration: '4 Years',
        affiliatedTo: 'Savitribai Phule, Pune University.',
        location: "Building 'A', Ground and First Floor",
        contact: '02594-299204',
        vision: 'To become a leading department where the best in research, learning, and teaching collaborate.',
        mission: [
            'To provide quality technical education through academic programs.',
            'To provide a career platform to the students through exposure to industry.',
            'To promote excellence by encouraging creativity, soft skills improvisation and discipline.',
        ],
        qualityPolicy: 'Committed to provide quality education to the students enabling them to excel in the fields of Science, Engineering & Technology to cater to the changing and challenging needs of society and industry.',
    },
    
    hodSection: {
        title: "HOD's Desk",
        name: 'Dr. Santosh H. Pawar',
        image: '/departments/hod/santosh pawar.png',
        designation: 'Head of Department',
        qualification: 'Ph.D ME',
        experience: '12 Year',
        specialization: 'CAD CAM, Design',
        mobile: '7743895341',
        email: 'hod.mech@engg.bramhavalley.com',
        officeAddress: 'Bramha Valley College, Nashik',
        about: `Mechanical Engineering is the biggest department of the institute with student strength around 450 and sanctioned intake is 120. The department has well qualified and dedicated faculty and is known for his academic standards. The department has centre of excellence in the field of Computer Aided Design & Computer Aided Manufacturing (CAD/CAM) with latest design & analysis software. The department is contributing its best to train the brains and with the aid of well qualified and experience faculty and ultra-modern laboratories.

The department focus on Value Addition Courses and developing overall orientation towards the manufacturing industries and frequent industrial visits, guest lectures and training by prominent industrial experts.`,
        vision: 'To become a leading department where the best in research, learning, and teaching collaborate.',
        mission: [
            'To provide quality technical education through academic programs.',
            'To provide a career platform to the students through exposure to industry.',
            'To promote excellence by encouraging creativity, soft skills improvisation and discipline.',
        ],
        qualityPolicy: 'Committed to provide quality education to the students enabling them to excel in the fields of Science, Engineering & Technology to cater to the changing and challenging needs of society and industry.',
    },
    
    facultySection: {
        title: 'Name of Faculty',
        faculty: [
            createFaculty(1, 'Dr. Kudal Hari N.', 'Principal & Professor', 'PhD, M.Tech', 29, '/pdf/faculties-resume/resume1.pdf'),
            createFaculty(2, 'Dr. Patil Chandrashekhar. K.', 'Professor', 'Ph.D, ME', 30, '/pdf/faculties-resume/resume2.pdf'),
            createFaculty(3, 'Dr. Pawar Santosh H.', 'Vice Principal & HoD', 'Ph.D., M.E', 10, '/pdf/faculties-resume/resume3.pdf'),
            createFaculty(4, 'Dr. Sanjay Mohite', 'Assistant Professor', 'PhD, ME', 23, '/pdf/faculties-resume/resume4.pdf'),
            createFaculty(5, 'Dr. Rathod Nikhil J.', 'Assistant Professor', 'PhD, ME', 10, '/pdf/faculties-resume/resume5.pdf'),
            createFaculty(6, 'Dr. Ghongade Harshvardhan. P.', 'Assistant Professor', 'PhD, ME', 15, '/pdf/faculties-resume/resume6.pdf'),
            createFaculty(7, 'Dr. Saidane Udaykumar V.', 'Assistant Professor', 'PhD, ME', 12, '/pdf/faculties-resume/resume7.pdf'),
            createFaculty(8, 'Dr. Shinde Shirish N.', 'Assistant Professor', 'PhD, ME', 9, null),
            createFaculty(9, 'Prof. Patil Dilip D.', 'Assistant Professor', 'ME', 23, '/pdf/faculties-resume/resume9.pdf'),
            createFaculty(10, 'Prof. Dhumal Ajay V.', 'Assistant Professor', 'ME', 16, '/pdf/faculties-resume/resume10.pdf'),
            createFaculty(11, 'Prof. Pingale Pradeep R.', 'Assistant Professor', 'ME', 10, '/pdf/faculties-resume/resume11.pdf'),
            createFaculty(12, 'Prof. Jeughale Gokul R.', 'Assistant Professor', 'ME', 10, '/pdf/faculties-resume/resume12.pdf'),
            createFaculty(13, 'Prof. Bonde Avinash U.', 'Assistant Professor', 'ME', 13, '/pdf/faculties-resume/resume13.pdf'),
            createFaculty(14, 'Prof. Deshmukh Rahul S.', 'Assistant Professor', 'ME', 8, '/pdf/faculties-resume/resume14.pdf'),
            createFaculty(15, 'Prof. Dhake Nilesh P.', 'Assistant Professor', 'ME', 17, '/pdf/faculties-resume/resume15.pdf'),
            createFaculty(16, 'Prof. Wani Mahesh S.', 'Assistant Professor', 'ME', 16, '/pdf/faculties-resume/resume16.pdf'),
            createFaculty(17, 'Prof. Shinde Dhananjay G.', 'Assistant Professor', 'ME', 4, '/pdf/faculties-resume/resume17.pdf'),
            createFaculty(18, 'Prof. Wagh Anjali S', 'Assistant Professor', 'ME', 2, '/pdf/faculties-resume/resume18.pdf'),
        ]
    },
    
    laboratorySection: {
        title: 'About Laboratories',
        labs: [
            'CAD/CAM',
            'HVAC & RAC',
            'Applied Thermodynamics',
            'Engineering Materials And Metallurgy',
            'Turbomachinery',
            'Fluid Mechanics & Power',
            'BME & Measurment',
            'Heat Transfer',
            'TOM & DOM',
            {
                name: 'Workshop',
                subItems: ['Machine Shop', 'Fitting', 'Welding', 'Carpentry']
            }
        ]
    },
    
    studentProjectsSection: {
        title: 'Students Projects',
        projects: [
            createProject(1, 'Experimental setup for whirling of Shaft', 'Prof. A.V.Dhumal', ['Abhishek kailas jadhav', 'Harshad Rajkumar Kanade', 'Pritesh Satish Deore', 'Darshan Deore']),
            createProject(2, 'Performance analysis of diesel engine with Biofuel extracted from Macroalgea', 'Prof. A.U.Bonde', ['Nikhil Jagtap', 'Dhiraj Hatkar', 'Hirey Ghanshyam']),
            createProject(3, 'Automatic Car washer &Dryer System(topic Changed)', 'Prof. P.R.Pingale', ['Sarthak vijay Birari', 'Samadhan Damodher Bhogir', 'Nishant Sunil Dusane', 'Tusahr balasaheb khairnar']),
            createProject(4, 'Design & Development fixture For Clamping And To Provide Ease of Manufacturing For Chock Valve body', 'Prof. D.D.Patil', ['chitte sanjay bhagwan', 'Sarthak vijay Birari', 'Samadhan Damodher Bhogir', 'Nishant Sunil Dusane', 'Tusahr balasaheb khairnar']),
            createProject(5, 'Design & Fabrication of Magnetic repulsive Horizontal axis Wind Turbine', 'Prof. N.P.dhake', ['Chaudhary lokesh Murlidher', 'Gangurde Sachin Bhagwan', 'kedar amol milind', 'Santosh Yadav Gaikwad']),
            createProject(7, 'Underflower Heat Exchnger For Onion Storage facility', 'Prof. G.R.Jeughale', ['kadam sandesh abba', 'Deore Rushikesh ravindra', 'Khandge harish Shivaji']),
            createProject(9, 'Design & development of Seed Sawing Machine', 'Prof. A.V.Dhumal', ['Khare nishant sanjay', 'Mahajan Dnyaneshwar Subhash', 'Mahajan Mayur nivrutti', 'Vaibhav m Kalal']),
            createProject(10, 'Development and performance Evaluation of greenhouse based Solar Dryer', 'Prof. M.S.Wani', ['Pardeshi Shubham Samirkumar', 'Patil vijay Sopan', 'Gangurde prasad shivaji', 'wackchaure rushikesh']),
            createProject(11, 'Adjustable Double lapping machine', 'Prof. R.S.Deshmukh', ['Pawar Tejas manik', 'Ahire Yogesh Nandkishore', 'Hiray lalit Dadaji', 'Pimpare Abhijit Sanjay']),
            createProject(12, 'Blood Collecting Calculation Monitor', 'Prof. R.S.Deshmukh', ['Mistri Varun sunil', 'Nirbhavane sachin Sanjay', 'Pagar vaibhav dadaji', 'More Akansha']),
            createProject(13, 'Design of Automatic battery cooling system for EV', 'Prof. K.S.Shivde', ['Shirode Ajinkya Kishore', 'Shelke Vaibhav Shivaji', 'Shete Sanket rajendra', 'Satpute Ashish Shivnath']),
            createProject(14, 'AC Combine Water heater', 'Prof. M.S.Wani', ['Shinde mayur vijay', 'Shinde Om Valu', 'talekar Shubham Vilas', 'Renu Raju']),
            createProject(15, 'Development & Development of Polymer Heat Exchanger for BTMS in Electrical vehicle', 'Dr. S.H.Pawar', ['NETKE SANDEEP PRABHAKAR', 'NAGARE ABHIJEET DEEPAK', 'KHAIRE RAJESH TUKARAM', 'NIKAM GANESH AJAY']),
            createProject(16, 'Movable Headlight with steering Mechanism', 'Prof. S.N.Shinde', ['SALVE PRATIKSHA UTTAM', 'RATHOD MONIKA JANARDHAN', 'DEORE SHUBHAM MADHUKAR', 'BHAMARE PRATIK PANDIT']),
            createProject(17, 'Solar Powered multipurpose Floor Cleaning Machine', 'Prof. K.S.Shivde', ['KHADE PRANIL NANDU', 'MUNGASE TUSHAR PRAKASH']),
        ]
    },
    
    innovativeTeachingSection: {
        title: 'Innovative Teaching Method',
        methods: [
            createTeachingMethod('Flipped Classroom', 'Students study content at home (e.g., through videos), and do problem-solving or discussions in class.'),
            createTeachingMethod('Project-Based Learning (PBL)', 'Students learn by working on real-world projects.'),
            createTeachingMethod('Gamification', 'Using game elements like points, levels, or challenges to motivate learning.'),
            createTeachingMethod('Blended Learning', 'Combining traditional classroom teaching with online digital media.'),
            createTeachingMethod('Collaborative Learning', 'Students work in groups to solve problems and learn from each other.'),
            createTeachingMethod('Use of Technology', 'Smartboards, AR/VR, simulations, and educational apps.'),
        ]
    },
    
    placementsSection: {
        title: 'Mechanical Engineering Placed Students',
        images: [
            { src: '/departments/placement-banners/b1.webp', alt: 'TCS Placement Batch 2024' },
            { src: '/departments/placement-banners/b2.webp', alt: 'TCS Placement - Naser Ali' },
            { src: '/departments/placement-banners/b3.webp', alt: 'Axis Colleges TCS Placement' },
        ]
    },
    
    newsLetterSection: {
        title: 'News Letter',
        pdfLink: '/pdf/news_letter.pdf',
        pdfLabel: 'Newsletter'
    },
    
    staffAchievementSection: {
        title: 'Mechanical Engineering Staff Achievement',
        achievements: [
            createAchievement(1, 'Prof. K.S. Shivade', 'UGC', 'Performance Evaluation Of Flat Face Heat Exchanger With FDM Printed Micro-Channel Fin Holders', '2024'),
            createAchievement(2, 'Prof. K.S. Shivade', 'UGC', 'Design And Experimental Investigation Of Curved Face Heat Exchanger With FDM Printed Micro-Channel F', '2024'),
            createAchievement(3, 'Prof. K.S. Shivade', 'UGC', 'A Review: The Impact Of Geometry And FDM application On Water-Cooled Microchannel Heat Exchanger Per', '2019'),
            createAchievement(4, 'Prof. K.S. Shivade', 'UGC', 'Design And Development of a pollution monitoring system using carbon and oxygen sensors with arduino', '2025'),
            createAchievement(5, 'Prof.Pingale P.R', 'AICTE', 'Smart Manufacturing Experience : Navigating the future of Industry 4.0', '27/01/2025 to 01/02/2025'),
            createAchievement(6, 'Dr. Shinde S.N', 'FDP', 'Advances in engineering and Technology', '10/02/2025 to 14/02/2025'),
            createAchievement(7, 'Prof.Jeughale G.R', 'FDP', 'Advances in engineering and Technology', '10/02/2025 to 14/02/2025'),
            createAchievement(8, 'Prof.Shivade K.S', 'FDP', 'Advances in engineering and Technology', '10/02/2025 to 14/02/2025'),
            createAchievement(9, 'Prof. Deshmukh R.S', 'IQAC', 'Intellectual property rights', '3/12/2025'),
        ]
    },
    
    studentAchievementsSection: {
        title: 'Mechanical Engineering Student Achievements',
        achievements: [
            createAchievement(1, 'Dr. Santosh H. Pawar', 'FDP', 'Participant', '2021-22 to 2022-23'),
        ]
    },
    
    syllabusSection: {
        title: 'Syllabus',
        subtitle: 'Course & Program Outcomes (Mechanical Engineering)',
        categories: [
            {
                year: 'Final Year (BE)',
                links: [
                    { label: 'Final Year (BE_2012)', href: '/pdf/syllabus/final_year/Final Year (BE_2012).pdf' },
                    { label: 'Final Year (BE_2015)', href: '/pdf/syllabus/final_year/Final Year (BE_2015).pdf' },
                    { label: 'Final Year (BE_2008)', href: '/pdf/syllabus/final_year/Final Year (BE_2008).pdf' },
                ]
            },
            {
                year: 'Second Year (SE)',
                links: [
                    { label: 'Second Year (SE_2012)', href: '/pdf/syllabus/second_year/Second Year (SE_2012).pdf' },
                    { label: 'Second Year (SE_2008)', href: '/pdf/syllabus/second_year/Second Year (SE_2008).pdf' },
                    { label: 'Second Year (SE_2015)', href: '/pdf/syllabus/second_year/Second Year (SE_2015).pdf' },
                    { label: 'Second Year (SE_2019)', href: '/pdf/syllabus/second_year/Second Year (SE_2019).pdf' },
                ]
            },
            {
                year: 'Third Year (TE)',
                links: [
                    { label: 'Third Year (TE_2008)', href: '/pdf/syllabus/third_year/Third Year (TE_2008).pdf' },
                    { label: 'Third Year (TE_2012)', href: '/pdf/syllabus/third_year/Third Year (TE_2012).pdf' },
                    { label: 'Third Year (TE_2015)', href: '/pdf/syllabus/third_year/Third Year (TE_2015).pdf' },
                    { label: 'Third Year (TE_2019)', href: '/pdf/syllabus/third_year/Third Year (TE_2019).pdf' },
                ]
            },
            {
                year: 'Other',
                links: [
                    { label: 'Course Outcome', href: '/pdf/syllabus/others/Course Outcome.pdf' },
                    { label: 'Program Outcome', href: '/pdf/syllabus/others/Program Outcome.pdf' },
                ]
            },
        ]
    },
    
    videoSection: {
        title: 'Video',
        videos: [
            { title: 'Video', embedUrl: 'https://www.youtube.com/embed/c2u77NAf5x8?si=4WWkkyWXTTL4NsTs' },
        ]
    },
    
    photoGallerySection: {
        title: 'Gallery',
        images: [
            { src: '/departments/mech-gallery/g1.jpg', alt: 'Industrial Visit 1' },
            { src: '/departments/mech-gallery/g2.jpg', alt: 'Industrial Visit 2' },
            { src: '/departments/mech-gallery/g3.jpg', alt: 'Industrial Visit 3' },
            { src: '/departments/mech-gallery/g4.jpg', alt: 'Industrial Visit 4' },
            { src: '/departments/mech-gallery/g5.jpg', alt: 'Industrial Visit 5' },
            { src: '/departments/mech-gallery/g6.jpg', alt: 'Laboratory Activity' },
        ]
    }
};

export const computerEnggData = {
    hero: {
        backgroundImage: '/departments/compHero.png',
        title: 'Department of Computer Engineering',
        subtitle: 'Innovating the Future of Technology',
        overlay: true
    },
    
    sidebarTitle: 'Department of Computer',
    
    sidebarItems: [
        'Home',
        "HOD's Desk",
        'Faculty',
        'Laboratory',
        'Student Projects',
        'Innovative Teaching Methods',
        'Placements',
        'News Letter',
        'Staff Achievement',
        'Student Achievements',
        'Syllabus',
        'Video',
        'Photo Gallery',
    ],
    
    homeSection: {
        title: 'Computer Engineering',
        establishmentYear: '2008',
        intake: '60',
        duration: '4 Years',
        affiliatedTo: 'Savitribai Phule, Pune University.',
        location: "Building 'B', First and Second Floor",
        contact: '02594-299205',
        vision: 'To be a leading center of excellence in Computer Engineering education, producing competent professionals who contribute to technological advancement and societal development.',
        mission: [
            'To impart quality education in computer engineering through modern teaching methodologies.',
            'To foster research and innovation in emerging areas of computer science and technology.',
            'To develop industry-ready professionals with strong ethical values and technical competencies.',
        ],
        qualityPolicy: 'Committed to delivering quality technical education that nurtures innovation, research, and professional excellence in the field of Computer Engineering.',
    },
    
    hodSection: {
        title: "HOD's Desk",
        name: 'Priyanka Kakade',
        image: '/departments/hod/priyanka kakade.png',
        designation: 'Head of Department',
        qualification: 'PHD, M.Tech.',
        experience: '13 Years',
        specialization: 'NA',
        mobile: '7875075013',
        email: 'kakade.priyanka88@gmail.com',
        officeAddress: 'NGSPM’s Brahma Valley College, Nashik',
        about: `The Department has all the leading edge software and hardware laboratories, because we believe that it will be here from where global professionals will be created. A total 200 computers along with a well-equipped project lab have been set up exclusively for final year students for their project work. The Wi-Fi and system department is looking after the centralized computing facilities having an internet center consisting of 200 nodes with dedicated leased line connectivity. To complement and make the curriculum more interesting, competitive and practical, there are a lot of co-curricular activities. The Department has formed a Brahma Valley Computer Engineering Students Association (BVCASA). 
        Department has established the student chapters of professional bodies like CSI. We are conducting short term courses and seminars on advanced C, C++, Python, Networking, Oracle, JAVA Technology, HADOOP Technology, LATEX Technology, Android Development, Web Technology and Sales Force Technology. The department has its own library consisting of around 275 books and also Department adopted teaching learning process i.e. CBT (Computer Based Teaching) with audio-video facility. The department focuses on Value Addition Courses and developing overall orientation towards the software industries and frequent industrial visits, guest lectures and training by prominent industrial experts.`,
        vision: 'To be a leading center of excellence in Computer Engineering education, producing competent professionals who contribute to technological advancement and societal development.',
        mission: [
            'To impart quality education in computer engineering through modern teaching methodologies.',
            'To foster research and innovation in emerging areas of computer science and technology.',
            'To develop industry-ready professionals with strong ethical values and technical competencies.',
        ],
        qualityPolicy: 'Committed to delivering quality technical education that nurtures innovation, research, and professional excellence in the field of Computer Engineering.',
    },
    
    facultySection: {
        title: 'Name of Faculty',
        faculty: [
            createFaculty(1, 'Prof. P.P.Kakade', 'Head of Department', 'Phd , M.Tech.', 13, '#'),
            createFaculty(2, 'Prof. S. R. Jadhav', 'Assistant Professor', 'M.Tech.', 9, '#'),
            createFaculty(3, 'Pof. A. Y. Bhamare', 'Assistant Professor', 'M.Tech.', 8, '#'),
            createFaculty(4, 'Prof. J. Y. Patil', 'Assistant Professor', 'ME', 8, '#'),
            createFaculty(5, 'Prof. A. H. Pilay', 'Assistant Professor', 'ME', 8, '#'),
            createFaculty(6, 'Prof. M. R. Jadhav', 'Assistant Professor', 'ME', 7, '#'),
            createFaculty(7, 'Prof. A. R. Suryawanshi', 'Assistant Professor', 'M.Tech', 6, '#'),
            createFaculty(8, 'Prof. A. S. Datir', 'Assistant Professor', 'ME', 5, '#'),
            createFaculty(9, 'Prof. S. J.Mukane', 'Assistant Professor', 'M.Tech.', 6, '#'),
            createFaculty(10, 'Prof .S.B.Gangurde', 'Assistant Professor', 'ME', 3, '#'),
            createFaculty(11, 'Mr. Sandeep Y. Jadhav', 'Netwok Administrator', 'MTech, BE Computer', 21, '#'),
            createFaculty(12, 'Mrs. Yogita Dhikale', 'Technical Assistant', 'Diploma Computer', 12, '#'),
            createFaculty(13, 'Ms. Prajkta Laute', 'Technical Assistant', 'B.E. Computer', 3, '#'),
        ]
    },
    
    laboratorySection: {
        title: 'About Laboratories',
        labs: [
            'Computer Center',
            'Programming Laboratory-I',
            'Programming Laboratory-II',
            'Software Laboratory',
            'Database Laboratory',
            'Network Laboratory',
            'Hardware Laboratory',
            'Project Laboratory'
        ]
    },
    
    studentProjectsSection: {
        title: 'Students Projects',
        projects: [
            createProject(1, 'Distributed Online Learning And Session Tracking', '-', [
                'DEVKAR MUKESH BABAJI',
                'KHAIRNAR VAIBHAV SUSHIL',
                'NIRMAL TUSHAR EKNATH'
            ]),

            createProject(2, 'AI Powered Placement Cell WEB Applications', '-', [
                'GHANDAT GAURAV UTTAM',
                'MAITY SAPTARSHI SUBODH',
                'SOLANKHE MAYURI PRAVIN'
            ]),

            createProject(3, 'Psychometric Test Analysis', '-', [
                'GANGODE HARSHALI RAMDAS',
                'MAHALE SAMRUDDHI ABHIJIT',
                'SONAWANE NEHA JAYRAM'
            ]),

            createProject(4, 'NI-sparsh: Invisible Mouse And Voice controlled AI Assistant', '-', [
                'GODSE SAMARTH BALKRISHNA',
                'MAHAJAN DNYANESH PRAVIN',
                'MENGE ANIKET SATISH'
            ]),

            createProject(5, 'Automated Decision Review system', '-', [
                'HATKAR PRANAV SANJAY',
                'KHATIB ARSHEEN SABA WASIM',
                'LOHAR SANIKA DINESH',
                'MASUTE MANSI SHASHIKANT'
            ]),

            createProject(6, 'Sign Language Recognition using Deep Learning', '-', [
                'KHAIRNAR GAURAV SUBHASH'
            ]),

            createProject(7, 'Conversational AI Data Analysis and Visualization Chatbot', '-', [
                'KHAIRNAR SAURABH VIJAY',
                'NIMSE KUNAL LAKSHMAN',
                'PAKHARE ROHIT PARMESHWAR'
            ]),

            createProject(8, 'Human Safety Application Using Flutter', '-', [
                'KHOKALE KOMAL PRABHAKAR',
                'ZOPE MINAKSHEE HARISH'
            ]),

            createProject(9, 'A Human Face Recognition for Video Surveillance Using Deep Learning', '-', [
                'SANGALE RUSHIKESH'
            ]),

            createProject(10, 'Intruder Detection system', '-', [
                'SONAWANE UNNATI RAJENDRA',
                'TAKALKAR SANSKRUTI SUDARSHAN',
                'TAMBOLI AFTAB ASIF'
            ]),
        ]
    },
    
    innovativeTeachingSection: {
        title: 'Innovative Teaching Method',
        methods: [
            createTeachingMethod(
                'Flipped Classroom',
                'Students study content at home (e.g., through videos) and engage in problem-solving or discussions in class.'
            ),

            createTeachingMethod(
                'Project-Based Learning (PBL)',
                'Students learn by working on real-world projects.'
            ),

            createTeachingMethod(
                'Gamification',
                'Using game elements like points, levels, or challenges to motivate learning.'
            ),

            createTeachingMethod(
                'Blended Learning',
                'Combining traditional classroom teaching with online digital media.'
            ),

            createTeachingMethod(
                'Collaborative Learning',
                'Students work in groups to solve problems and learn from each other.'
            ),

            createTeachingMethod(
                'Use of Technology',
                'Smartboards, AR/VR, simulations, and educational apps are integrated into teaching.'
            ),
        ]
    },
    
    placementsSection: {
        title: 'Computer Engineering Placed Students',
        images: [
            { src: '/departments/placement-banners/b1.webp', alt: 'TCS Placement Batch 2024' },
            { src: '/departments/placement-banners/b2.webp', alt: 'TCS Placement - Naser Ali' },
            { src: '/departments/placement-banners/b3.webp', alt: 'Axis Colleges TCS Placement' },
        ]
    },
    
    newsLetterSection: {
        title: 'News Letter',
        pdfLink: '/pdf/news_letter.pdf',
        pdfLabel: 'Newsletter'
    },
    
    staffAchievementSection: {
        title: 'Computer Engineering Staff Achievement',
        achievements: [
            createAchievement(1, 'Dr. Santosh H. Pawar', 'FDP', 'Participant', '2021-22 to 2022-23'),
        ]
    },
    
    studentAchievementsSection: {
        title: 'Computer Engineering Student Achievements',
        achievements: [
            createAchievement(1, 'Mr. Dhruv Swapnil Torne', 'FDP', 'Sports', '2024 - 2025'),
            createAchievement(2, 'Mr. Prabhat Vilas Charaskar', 'Participated', 'Sports', '2024 - 2025'),
        ]
    },
    
    syllabusSection: {
        title: 'Syllabus',
        subtitle: 'Course & Program Outcomes (Computer Engineering)',
        categories: [
            {
                year: 'First Year (BE)',
                links: [
                    { label: 'Final Year (BE_2008)', href: '/pdf/comp-syllabus/first_year/Final Year (BE_2008).pdf' },
                    { label: 'Final Year (BE_2012)', href: '/pdf/comp-syllabus/first_year/Final Year (BE_2012).pdf' },
                    { label: 'Final Year (BE_2015)', href: '/pdf/comp-syllabus/first_year/Final Year (BE_2015).pdf' },
                ]
            },
            {
                year: 'Second Year (SE)',
                links: [
                    { label: 'Second Year (SE_2019)', href: '/pdf/comp-syllabus/second_year/Second Year (SE_2008).pdf' },
                    { label: 'Second Year (SE_2012)', href: '/pdf/comp-syllabus/second_year/Second Year (SE_2012).pdf' },
                    { label: 'Second Year (SE_2015)', href: '/pdf/comp-syllabus/second_year/Second Year (SE_2015).pdf' },
                    { label: 'Second Year (SE_2019)', href: '/pdf/comp-syllabus/second_year/Second Year (SE_2019).pdf' },

                ]
            },
            {
                year: 'Third Year (TE)',
                links: [
                    { label: 'Third Year (TE_2019)', href: '/pdf/comp-syllabus/third_year/Third Year (TE_2008).pdf' },
                    { label: 'Third Year (TE_2012)', href: '/pdf/comp-syllabus/third_year/Third Year (TE_2012).pdf' },
                    { label: 'Third Year (TE_2015)', href: '/pdf/comp-syllabus/third_year/Third Year (TE_2015).pdf' },
                    { label: 'Third Year (TE_2019)', href: '/pdf/comp-syllabus/third_year/Third Year (TE_2019).pdf' },
                ]
            },
        ]
    },
    
    videoSection: {
        title: 'Video',
        videos: [
            { title: 'Department Overview', embedUrl: 'https://www.youtube.com/embed/c2u77NAf5x8?si=x-4v_BqRKLOqqIVo' },
        ]
    },
    
    photoGallerySection: {
        title: 'Gallery',
        images: [
            { src: '/departments/comp-gallery/g1.jpg', alt: 'Lab Activity 1' },
            { src: '/departments/comp-gallery/g2.jpg', alt: 'Lab Activity 2' },
            { src: '/departments/comp-gallery/g3.jpg', alt: 'Lab Activity 3' },
        ]
    }
};

export const civilEnggData = {
    hero: {
        backgroundImage: '/departments/civilHero.png',
        title: 'Department of Civil Engineering',
        subtitle: 'Building the Future Infrastructure',
        overlay: true
    },
    
    sidebarTitle: 'Department of Civil',
    
    sidebarItems: [
        'Home',
        "HOD's Desk",
        'Faculty',
        'Laboratory',
        'Student Projects',
        'Innovative Teaching Methods',
        'Placements',
        'News Letter',
        'Staff Achievement',
        'Student Achievements',
        'Syllabus',
        'Video',
        'Photo Gallery',
    ],
    
    homeSection: {
        title: 'Civil Engineering',
        establishmentYear: '2008',
        intake: '60',
        duration: '4 Years',
        affiliatedTo: 'Savitribai Phule, Pune University.',
        location: "Building ‘A’, Ground and First Floor",
        contact: '02594-299204',
        vision: 'To become a leading department where the best in research, learning, and teaching collaborate.',
        mission: [
            'To provide quality technical education through academic programs.',
            'To provide a career platform to the students through exposure to industry.',
            'To promote excellence by encouraging creativity, soft skills improvisation and discipline.',
        ],
        qualityPolicy: 'Committed to provide quality education to the students enabling them to excel in the fields of Science, Engineering & Technology to cater to the changing and challenging needs of society and industry.',
    },
    
    hodSection: {
        title: "HOD's Desk",
        name: 'Mr. K.U. Saraf',
        image: '/departments/hod/Mr. K.U. Saraf.png',
        designation: 'Head of Department',
        qualification: 'M.E. Structures',
        experience: '16 Years',
        specialization: 'Literature',
        mobile: '9876543210',
        email: 'Saraf.bramhavalley@gmail.com',
        officeAddress: 'Bramha Valley College of Enginering & Research Institude , Nashik',
        about: `Civil Engineering is a profession which is concerned with the ways in which humans interact with the natural and built environments. As a Civil Engineer, you will embark on a career that is challenging, rewarding and that will make a real difference in people's everyday lives.

The Mission of the Civil Engineering program is to achieve a nationally recognized, student-centered, industry-oriented, construction program that prepares graduates to become outstanding future leaders, well versed in relevant management practices, current construction techniques and in the conduct of applied research.

The Department of Civil Engineering has experienced and qualified staff, specious and modern laboratories with facilities like Computer Center with internet facility & Civil Engineering software. The Department also arranges site visits, seminars and workshops to have proper interaction of students with Industry`,
        vision: 'To become a leading department where the best in research, learning, and teaching collaborate.',
        mission: [
            'To provide quality technical education through academic programs.',
            'To provide a career platform to the students through exposure to industry.',
            'To promote excellence by encouraging creativity, soft skills improvisation and discipline.',
        ],
        qualityPolicy: 'Committed to provide quality education to the students enabling them to excel in the fields of Science, Engineering & Technology to cater to the changing and challenging needs of society and industry.',

    },
    
    facultySection: {
        title: 'Name of Faculty',
        faculty: [
            createFaculty(1, 'Dr. K.U. Saraf', 'Professor', 'M.E. Structures', 16, '/pdf/civil-resume/resume1.pdf'),
            createFaculty(2, 'Mr. K.M. Dumbre', 'Assistant Professor', 'M.E. Structures', 16, '/pdf/civil-resume/resume2.pdf'),
            createFaculty(3, 'Mr. P.D. Daware', 'Assistant Professor', 'Ph.D. (Pursuing), M.E. Constrcution Management', 13, '/pdf/civil-resume/resume3.pdf'),
            createFaculty(4, 'Mr. B.E. Rajput', 'Assistant Professor', 'M.Tech Enviromental Engineering', 9, '/pdf/civil-resume/resume4.pdf'),
            createFaculty(5, 'Mr. V.K. Kulkarni', 'Assistant Professor', 'M.E. M.E. Constrcution Management', 13, '/pdf/civil-resume/resume5.pdf'),
            createFaculty(6, 'Mr. K.G. Sasane', 'Assistant Professor', 'M.E. Structures', 8, '/pdf/civil-resume/resume6.pdf'),
        ]
    },
    
    laboratorySection: {
        title: 'About Laboratories',
        labs: [
            'Surveying Lab',
            'Engineering Mechanics Lab',
            'Geotechnical Engineering Lab',
            'Computer Aided Design Lab',
            'Concrete Technology Lab',
            'Fluid Mechanics Lab',
            'Engineering Geology Lab',
            'Concrete Technology Lab',
            'Testing of Material Lab',
            'Environmental Engineering Lab',
            'Transportation Lab'
        ]
    },
    
    studentProjectsSection: {
        title: 'Students Projects',
        projects: [
            createProject(1, 'Risk Analysis of Precast Prefabricated Structure (Bridge)', 'Prof. K.U. Saraf', ['Fatangale Manoj Madhav', 'Mahale Manisha Santosh', 'Mane Shivraj Gangadhar', 'Shewale Charuta Pradip', 'Vikram Dadaji Ahire']),
            createProject(2, 'Planning for Sadhugram and Shashi Marg for Sadhus/Mahantas and another Route for Piligrims During Kumbh Mela in Nashik/ Trimbakeshwar', 'Mr. B.E. Rajput', ['Bhalerao Satyam Santosh', 'Dalvi Mayur Nitin', 'Dusane Monika Chintaman', 'Gawali Akash Nivrutti', 'Nikam Karan Ashok']),
            createProject(3, 'Repearing of Potholes by Using Geotextile Sheet', 'Mr. V.K. Kulkarni', ['Bagul Rahul Pandhrinath', 'Bhadange Bhushan Kacharu', 'Mahajan Lalit Vijay']),
            createProject(4, 'Sesmic Behavior on Multistory Prefabricated Modular Building', 'Mr. K.G. Sasane', ['Gayakhe Devraj Nandu', 'Ghatal Vivek Hari', 'Kankate Omkar Gokul', 'Vidhate Pranav Subhash']),
            createProject(5, 'Use of PVC Pipe Crush Material for Making of Bricks', 'Mr. K.M. Dumbre', ['Gangurde Dhanashree Deshiram', 'Nikumbh Bhumika Manoj', 'Wagh Harshal Divakar']),
        ]
    },
    
    innovativeTeachingSection: {
        title: 'Innovative Teaching Method',
        methods: [
            createTeachingMethod('Flipped Classroom', 'Students study content at home (e.g., through videos), and do problem-solving or discussions in class.'),
            createTeachingMethod('Project-Based Learning (PBL)', 'Students learn by working on real-world projects.'),
            createTeachingMethod('Gamification', 'Using game elements like points, levels, or challenges to motivate learning.'),
            createTeachingMethod('Blended Learning', 'Combining traditional classroom teaching with online digital media.'),
            createTeachingMethod('Collaborative Learning', 'Students work in groups to solve problems and learn from each other.'),
            createTeachingMethod('Use of Technology', 'Smartboards, AR/VR, simulations, and educational apps.')
        ]
    },
    
    placementsSection: {
        title: 'Civil Engineering Placed Students',
        images: [
            { src: '/departments/comp-placed/p1.png', alt: 'Placement 1' },
            { src: '/departments/comp-placed/p2.png', alt: 'Placement 2' },
            { src: '/departments/comp-placed/p3.png', alt: 'Placement 3' },
            { src: '/departments/comp-placed/p4.png', alt: 'Placement 4' },
            { src: '/departments/comp-placed/p5.png', alt: 'Placement 5' },
            { src: '/departments/comp-placed/p6.png', alt: 'Placement 6' },
            { src: '/departments/comp-placed/p7.png', alt: 'Placement 7' },
        ]
    },
    
    newsLetterSection: {
        title: 'News Letter',
        pdfLink: '/pdf/news_letter.pdf',
        pdfLabel: 'Newsletter'
    },
    
    staffAchievementSection: {
        title: 'Civil Engineering Staff Achievement',
        achievements: [
            createAchievement(1, 'Mr. B.E. Rajput', 'FDP', 'Sustainable Smart Cities: Integrating Technology and Infrastructure', '06 January 2025 to 11 January 2025'),
            createAchievement(2, 'Mr. B.E. Rajput', 'FDP', 'Air Pollution and Control', 'January 2025 to April 2025'),
            createAchievement(3, 'Mr. B.E. Rajput', 'NPTEL', 'Air Pollution and Control', 'January 2025 to April 2025'),
            createAchievement(4, 'Mr. K.G. Sasane', 'Workshop', 'Earthquake Resilient design of Structure', '14 October 2024 to 18 October 2024'),
        ]
    },
    
    studentAchievementsSection: {
        title: 'Civil Engineering Student Achievements',
        achievements: [
            createAchievement(1, 'Mr. Dhruv Swapnil Torne', 'FDP', 'Participant', '2024-2025'),
            createAchievement(2, 'Mr. Prabhat Vilas Charaskar', 'FDP', 'Participant', '2024 - 2025'),
        ]
    },
    
    syllabusSection: {
        title: 'Syllabus',
        subtitle: 'Course & Program Outcomes (Civil Engineering)',
        categories: [
            {
                year: 'First Year (BE)',
                links: [
                    { label: 'Final Year (BE_2008)', href: '/pdf/civil-syllabus/first_year/Final Year (BE_2008).pdf' },
                    { label: 'Final Year (BE_2012)', href: '/pdf/civil-syllabus/first_year/Final Year (BE_2012).pdf' },
                ]
            },
            {
                year: 'Second Year (BE)',
                links: [
                    { label: 'Second Year (SE_2008)', href: '/pdf/civil-syllabus/second_year/Second Year (SE_2008).pdf' },
                    { label: 'Second Year (SE_2012)', href: '/pdf/civil-syllabus/second_year/Second Year (SE_2012).pdf' },
                    { label: 'Second Year (SE_2015)', href: '/pdf/civil-syllabus/second_year/Second Year (SE_2015).pdf' },
                ]
            },
            {
                year: 'Third Year (BE)',
                links: [
                    { label: 'Third Year (TE_2008)', href: '/pdf/civil-syllabus/third_year/Third Year (TE_2008).pdf' },
                    { label: 'Third Year (TE_2012)', href: '/pdf/civil-syllabus/third_year/Third Year (TE_2012).pdf' },
                    { label: 'Third Year (TE_2015)', href: '/pdf/civil-syllabus/third_year/Third Year (TE_2015).pdf' },
                ]
            },
        ]
    },
    
    videoSection: {
        title: 'Video',
        videos: [
            { title: 'Department Overview', embedUrl: 'https://www.youtube.com/embed/c2u77NAf5x8?si=W9wLbnAfhKPF4Mxp' },
        ]
    },
    
    photoGallerySection: {
        title: 'Gallery',
        images: [
            { src: '/departments/civil-gallery/g1.jpg', alt: 'Lab Activity 1' },
            { src: '/departments/civil-gallery/g2.jpg', alt: 'Lab Activity 2' },
            { src: '/departments/civil-gallery/g3.jpg', alt: 'Lab Activity 3' },
            { src: '/departments/civil-gallery/g4.png', alt: 'Lab Activity 4' },
            { src: '/departments/civil-gallery/g5.png', alt: 'Lab Activity 5' },
            { src: '/departments/civil-gallery/g6.png', alt: 'Lab Activity 6' },
            { src: '/departments/civil-gallery/g7.png', alt: 'Lab Activity 7' },
            { src: '/departments/civil-gallery/g8.png', alt: 'Lab Activity 8' },
            { src: '/departments/civil-gallery/g9.png', alt: 'Lab Activity 9' },
            { src: '/departments/civil-gallery/g10.png', alt: 'Lab Activity 10' },
            { src: '/departments/civil-gallery/g11.png', alt: 'Lab Activity 11' },
            { src: '/departments/civil-gallery/g12.png', alt: 'Lab Activity 12' },
        ]
    }
};

export const electricalEnggData = {
    hero: {
        backgroundImage: '/departments/electicHero.png',
        title: 'Department of Electrical Engineering',
        subtitle: 'Powering Innovation and Excellence',
        overlay: true
    },
    
    sidebarTitle: 'Department of Electrical',
    
    sidebarItems: [
        'Home',
        "HOD's Desk",
        'Faculty',
        'Laboratory',
        'Student Projects',
        'Innovative Teaching Methods',
        'Placements',
        'News Letter',
        'Staff Achievement',
        'Student Achievements',
        'Syllabus',
        'Video',
        'Photo Gallery',
    ],
    
    homeSection: {
        title: 'Electrical Engineering',
        establishmentYear: '2008',
        intake: '60',
        duration: '4 Years',
        affiliatedTo: 'Savitribai Phule, Pune University.',
        location: "Building 'D', Ground Floor",
        contact: '02594-299207',
        vision: 'To be a leading center in Electrical Engineering education, producing innovative engineers who contribute to power systems and renewable energy solutions.',
        mission: [
            'To provide quality education in electrical engineering fundamentals and applications.',
            'To promote research in renewable energy and smart grid technologies.',
            'To develop skilled professionals for power and energy sectors.',
        ],
        qualityPolicy: 'Committed to excellence in electrical engineering education through practical training and industry collaboration.',
    },
    
    hodSection: {
        title: "HOD's Desk",
        name: 'Dr. Md.Ikramuddin',
        image: '/departments/hod/Dr. Md.Ikramuddin.png',
        designation: 'Head of Department',
        qualification: 'Ph.D Electrical Engineering',
        experience: '16 Years',
        specialization: 'Modern Marathi Literature',
        mobile: '9890500667',
        email: 'hod.elect@engg.brahmavalley.com',
        officeAddress: 'Bramha Valley College, Nashik',
        about: `Welcome to the Department of Electrical Engineering

It is with great pleasure that we welcome you to the Department of Electrical Engineering at NGSPM Brahma Valley College of Engineering & Research Institute, Nashik. Since its inception in 2013, our department has been dedicated to providing high-quality technical education while promoting innovation, problem-solving abilities, and professional excellence.Our faculty members, who possess robust academic and research credentials, are devoted to guiding and mentoring students throughout their academic careers. We take pride in our state-of-the-art laboratories, modern infrastructure, and an industry-relevant curriculum designed to equip students with the knowledge and skills necessary for a successful career in electrical engineering. We believe in fostering holistic development, ensuring that our students not only excel academically but also evolve into proficient professionals capable of addressing real-world challenges. We are enthusiastic about being part of your educational journey and look forward to supporting you in the achievement of your goals.We invite you to join us in shaping a future characterized by innovation and excellence in the field of Electrical Engineering.`,
        vision: 'To be a leading center in Electrical Engineering education, producing innovative engineers who contribute to power systems and renewable energy solutions.',
        mission: [
            'To provide quality education in electrical engineering fundamentals and applications.',
            'To promote research in renewable energy and smart grid technologies.',
            'To develop skilled professionals for power and energy sectors.',
        ],
        qualityPolicy: 'Committed to excellence in electrical engineering education through practical training and industry collaboration.',
    },
    
    facultySection: {
        title: 'Name of Faculty',
        faculty: [
            createFaculty(
                1,
                'Dr. Md. Ikramuddin',
                'Head of Department',
                'Ph.D, M.Tech, B.E. Electronics Engg.',
                17,
                '/pdf/elect-resume/resume1.pdf'
            ),

            createFaculty(
                2,
                'Prof. Abhishek J. Tripathi',
                'Assistant Professor',
                'M.E (EPS), B.E (Electrical Engg), Ph.D Pursuing',
                10,
                '/pdf/elect-resume/resume2.pdf'
            ),

            createFaculty(
                3,
                'Prof. Ghuge Kapil Eknath',
                'Assistant Professor',
                'M.E (EPS), B.E (Electrical Engg), Ph.D Pursuing',
                11,
                '/pdf/elect-resume/resume3.pdf'
            ),

            createFaculty(
                4,
                'Prof. Megha G. Nagapure',
                'Assistant Professor',
                'M.E (CS), B.E (Electrical Engg), Ph.D Pursuing',
                8,
                '/pdf/elect-resume/resume4.pdf'
            ),

            createFaculty(
                5,
                'Prof. Priyanka P. Kakade',
                'Assistant Professor',
                'M.Tech (EC), B.E (EC), Ph.D Pursuing',
                11,
                '/pdf/elect-resume/resume5.pdf'
            ),

            createFaculty(
                6,
                'Prof. Zope Rahul Nivrutti',
                'Assistant Professor',
                'ME (Power System), BE (Electrical Engineering)',
                4,
                '/pdf/elect-resume/resume6.pdf'
            ),

            createFaculty(
                7,
                'Prof. Lukare Yamaji Vishvanath',
                'Assistant Professor',
                'ME (Power System), BE (Electrical Engineering)',
                8,
                '/pdf/elect-resume/resume7.pdf'
            ),
        ]
    },
    
    laboratorySection: {
        title: 'About Laboratories',
        labs: [
            'Basic Electrical Lab',
            'Transformer & Induction Machine Lab',
            'Computer Programming Lab',
            'Electrical Machines Lab',
            'PLC & SCADA Lab',
            'Control System Lab',
            'Power System',
            'Relay and high voltage lab'
        ]
    },
    
    studentProjectsSection: {
        title: 'Students Projects',
        projects: [
            createProject(
                1,
                'Automation in Steel Manufacturing Industry Using PLC & SCADA',
                'Dr. Md. Ikramuddin',
                [
                    'KASTURE SWAPNIL SOMESHWAR',
                    'MOKAL SIDDHESH JANARDAN',
                    'PATIL MRUNALINI NARENDRA',
                    'SABALE NIKITA DEVANAND'
                ]
            ),

            createProject(
                2,
                'Electric Vehicle Charging Station Locator',
                'Dr. Md. Ikramuddin',
                [
                    'GONDRAWAR SHIVAM MOHAN',
                    'HINGOLE SUNIL NAGSEN',
                    'KAMBALE LEKRAJ RAVINDRA',
                    'KHARATE SAURABH SANTOSH'
                ]
            ),

            createProject(
                3,
                'Four Quadrant DC Motor With Microcontroller',
                'Prof. Y. V. Lukare',
                [
                    'BHINGARDIVE RUTHIK SANTOSH',
                    'PATANGE PRATIK NARESH',
                    'PAWAR PRANIL PRAMOD',
                    'SHIGWAN AAKASH DATTARAM'
                ]
            ),

            createProject(
                4,
                'IOT Based Automatic Vehicle Accident Detection And Rescue System',
                'Dr. Mahadev G. Unde',
                [
                    'SHINDE AKASH GANESH',
                    'SHIRKE ANKITA DATTATRAYA',
                    'SORATE VAISHNAVI AVINASH'
                ]
            ),

            createProject(
                5,
                'Third Eye for Blind With Ultrasonic Glove',
                'Dr. Mahadev G. Unde',
                [
                    'JADHAV SAIRAJ SATISH',
                    'SHEDGE SUMIT DAYANAND',
                    'MAHINDRAKAR RUSHIKESH ANILRAO',
                    'KARALE MAYUR NAGESH'
                ]
            ),
        ]
    },
    
    innovativeTeachingSection: {
        title: 'Innovative Teaching Method',
        methods: [
            createTeachingMethod('Virtual Labs', 'Simulation-based learning for electrical systems.'),
            createTeachingMethod('Industry Visits', 'Visits to power plants and substations.'),
        ]
    },
    
    placementsSection: {
        title: 'Electrical Engineering Placed Students',
        images: [
            { src: '/departments/elect-placed/p1.png', alt: 'Placement 1' },
            { src: '/departments/elect-placed/p2.png', alt: 'Placement 2' },
            { src: '/departments/elect-placed/p3.png', alt: 'Placement 3' },
            { src: '/departments/elect-placed/p4.png', alt: 'Placement 4' },
            { src: '/departments/elect-placed/p5.png', alt: 'Placement 5' },
            { src: '/departments/elect-placed/p6.png', alt: 'Placement 6' },
            { src: '/departments/elect-placed/p7.png', alt: 'Placement 7' },
            { src: '/departments/elect-placed/p8.png', alt: 'Placement 8' },
            { src: '/departments/elect-placed/p9.png', alt: 'Placement 9' },
            { src: '/departments/elect-placed/p10.png', alt: 'Placement 10' },
            { src: '/departments/elect-placed/p11.png', alt: 'Placement 11' },
        ]
    },
    
    newsLetterSection: {
        title: 'News Letter',
        pdfLink: '/pdf/news_letter.pdf',
        pdfLabel: 'Newsletter'
    },
    
    staffAchievementSection: {
        title: 'Electrical Engineering Staff Achievement',
        achievements: [
            createAchievement(1, 'Dr. Santosh H. Pawar', 'FDP', 'Participant', '2021-22 to 2022-23'),
        ]
    },
    
    studentAchievementsSection: {
        title: 'Electrical Engineering Student Achievements',
        achievements: [
            createAchievement(1, 'Dr. Santosh H. Pawar', 'FDP', 'Participant', '2021-22 to 2022-23'),
        ]
    },
    
    syllabusSection: {
        title: 'Syllabus',
        subtitle: 'Course & Program Outcomes (Electrical Engineering)',
        categories: [
            {
                year: 'First Year (BE)',
                links: [
                    { label: 'Final Year (BE_2012)', href: '/pdf/elect-syllabus/first_year/Final Year (BE_2012).pdf' },
                    { label: 'Final Year (BE_2015)', href: '/pdf/elect-syllabus/first_year/Final Year (BE_2015).pdf' },
                ]
            },
            {
                year: 'Second Year (BE)',
                links: [
                    { label: 'Second Year (BE_2012)', href: '/pdf/elect-syllabus/second_year/Second Year (BE_2012).pdf' },
                    { label: 'Second Year (BE_2015)', href: '/pdf/elect-syllabus/second_year/Second Year (BE_2015).pdf' },
                    { label: 'Second Year (BE_2019)', href: '/pdf/elect-syllabus/second_year/Second Year (BE_2019).pdf' },
                ]
            },
            {
                year: 'Third Year (BE)',
                links: [
                    { label: 'Third Year (BE_2012)', href: '/pdf/elect-syllabus/third_year/Third Year (BE_2012).pdf' },
                    { label: 'Third Year (BE_2015)', href: '/pdf/elect-syllabus/third_year/Third Year (BE_2015).pdf' },
                    { label: 'Third Year (BE_2019)', href: '/pdf/elect-syllabus/third_year/Third Year (BE_2019).pdf' },
                ]
            },
            {
                year: 'Others',
                links: [
                    { label: 'Course Outcome', href: '/pdf/elect-syllabus/others/Course Outcome.pdf' },
                ]
            }
        ]
    },
    
    videoSection: {
        title: 'Video',
        videos: [
            { title: 'Department Overview', embedUrl: 'https://www.youtube.com/embed/c2u77NAf5x8?si=xTGGxaO3V7kFW7oA' },
        ]
    },
    
    photoGallerySection: {
        title: 'Gallery',
        images: [
            { src: '/departments/elect-gallery/g1.jpg', alt: 'Lab Activity 1' },
            { src: '/departments/elect-gallery/g2.jpg', alt: 'Lab Activity 2' },
            { src: '/departments/elect-gallery/g3.jpg', alt: 'Lab Activity 3' },
        ]
    }
};

export const firstYearEnggData = {
    hero: {
        backgroundImage: '/departments/FirstYearHero.png',
        title: 'First Year Engineering',
        subtitle: 'Welcome To First Year Engineering',
        overlay: true
    },
    
    sidebarTitle: 'First Year Engineering',
    
    sidebarItems: [
        'Home',
        "HOD's Desk",
        'Faculty',
        'Laboratory',
        'Innovative Teaching Methods',
        'News Letter',
        'Staff Achievement',
        'Student Achievements',
        'Syllabus',
        'Video',
    ],
    
    homeSection: {
        title: 'First Year Engineering',
        establishmentYear: '2008',
        duration: '4 Year',
        affiliatedTo: 'Savitribai Phule, Pune University.',
        location: "Building ‘A’, Ground and First Floor",
        contact: '02594-299204',
        vision: 'To become a leading department where the best in research, learning, and teaching collaborate.',
        mission: [
            'To provide quality technical education through academic programs.',
            'To provide a career platform to the students through exposure to industry.',
            'To promote excellence by encouraging creativity, soft skills improvisation and discipline.',
        ],
        qualityPolicy: 'Committed to provide quality education to the students enabling them to excel in the fields of Science, Engineering & Technology to cater to the changing and challenging needs of society and industry.',
    },
    
    hodSection: {
        title: "HOD's Desk",
        name: 'Prof. K.M.Dumbre',
        image: '/departments/hod/Prof. K.M.Dumbre.png',
        designation: 'Head of Department',
        qualification: 'Ph.D',
        experience: '17 Years',
        specialization: 'Structural Engineering',
        mobile: '9604085614',
        email: 'dumbre@engg.brahmavalley.com',
        officeAddress: 'Brahma Valley College of Engineering and Research Institute, Nashik',
        about: `It gives me immense pleasure to welcome you into an exciting world of engineering. The first year is the foundation upon which your entire academic journey will be built, and we are committed to providing you with the knowledge, support, and opportunities you need to grow both academically and personally.Our department is home to experienced faculty, well-equipped laboratories, and a culture that fosters innovation and critical thinking. We encourage students to not only focus on academics but also to explore extracurricular activities, technical events, and research projects that will help shape them into well-rounded engineers.`,
        vision: 'To become a leading department where the best in research, learning, and teaching collaborate.',
        mission: [
            'To provide quality technical education through academic programs.',
            'To provide a career platform to the students through exposure to industry.',
            'To promote excellence by encouraging creativity, soft skills improvisation and discipline.',
        ],
        qualityPolicy: 'Committed to provide quality education to the students enabling them to excel in the fields of Science, Engineering & Technology to cater to the changing and challenging needs of society and industry.',
    },
    
    facultySection: {
        title: 'Name of Faculty',
        faculty: [
            createFaculty(1, 'Prof. K.M. Dumbre', 'F.E. Coordinator', 'M.E., B.E.', 17, 'NA'),
            createFaculty(2, 'Dr. V.Y. Patil (Sonawane)', 'Assistant Professor', 'Ph.D., M.Sc.', 29, 'NA'),
            createFaculty(3, 'Prof. M.S. Patil', 'Assistant Professor', 'M.Sc., B.Ed.', 4, 'NA'),
            createFaculty(4, 'Prof. N.D. Pawar', 'Assistant Professor', 'M.Sc., B.Ed.', 4, 'NA'),
            createFaculty(5, 'Prof. J.E. Sadgir', 'Assistant Professor', 'M.Sc., B.Ed.', 3, 'NA'),
        ]
    },
    
    laboratorySection: {
        title: 'About Laboratories',
        labs: [
            'Engineering Chemistry Lab',
            'Engineering Physics Lab',
            'Engineering Graphics Lab',
            'Engineering Mechanics Lab',
            'Basic Electrical Engineering Lab',
            'Basic Electronics Engineering Lab',
            'Computer Center Lab',
            'Engineering Workshop'
        ]
    },
    
    faculty: [
        createFaculty(
            1,
            'Prof. K. M. Dumbre',
            'F.E. Coordinator',
            'M.E., B.E.',
            17,
            null
        ),

        createFaculty(
            2,
            'Dr. V. Y. Patil (Sonawane)',
            'Assistant Professor',
            'Ph.D, M.Sc.',
            29,
            null
        ),

        createFaculty(
            3,
            'Prof. M. S. Patil',
            'Assistant Professor',
            'M.Sc., B.Ed.',
            4,
            null
        ),

        createFaculty(
            4,
            'Prof. N. D. Pawar',
            'Assistant Professor',
            'M.Sc., B.Ed.',
            4,
            null
        ),

        createFaculty(
            5,
            'Prof. J. E. Sadgir',
            'Assistant Professor',
            'M.Sc., B.Ed.',
            3,
            null
        ),
    ],
    
    innovativeTeachingSection: {
    title: 'Innovative Teaching Method',
        methods: [
            createTeachingMethod(
                'Flipped Classroom',
                'Students watch lectures or review materials before class; classroom time is used for problem-solving, discussion, and practical application.'
            ),

            createTeachingMethod(
                'Project-Based Learning (PBL)',
                'Students work on open-ended, real-world engineering problems to develop practical and analytical skills.'
            ),

            createTeachingMethod(
                'Design Thinking Workshops',
                'Structured sessions focused on empathizing, ideating, prototyping, and testing innovative engineering solutions.'
            ),

            createTeachingMethod(
                'Peer Teaching & Learning Circles',
                'Students lead discussions and teach key concepts in small collaborative groups to strengthen understanding.'
            ),

            createTeachingMethod(
                'Collaborative Online Whiteboards & AI Tools',
                'Use of platforms like Miro, Figma, and AI-driven tools such as WolframAlpha or ChatGPT for collaborative problem-solving and visualization.'
            ),

            createTeachingMethod(
                'Use of Technology',
                'Integration of smartboards, AR/VR tools, simulations, and educational applications to enhance interactive learning.'
            ),

            createTeachingMethod(
                'Bridge Courses',
                'Additional academic support programs to strengthen fundamental subjects and core engineering concepts.'
            ),

            createTeachingMethod(
                'Peer Learning',
                'Structured group study sessions and mentoring led by senior students to improve collaborative learning.'
            ),
        ]
    },
    
    newsLetterSection: {
        title: 'News Letter',
        pdfLink: '/pdf/news_letter.pdf',
        pdfLabel: 'Newsletter'
    },
    
    staffAchievementSection: {
        title: 'First Year Staff Achievement',
        achievements: [
            createAchievement(1, 'Prof. K.M.Dumbre', 'Design to Alignometer', 'Participant', '2024-25'),
        ]
    },
    
    studentAchievementsSection: {
        title: 'First Year Student Achievements',
        achievements: [
            createAchievement(1, 'SARODE PIYUSH SUNIL', '8.14', 'Participant', '-'),
            createAchievement(2, 'VHARGAL RAVINDRA LAHANU', '7.73', 'Participant', '-'),
        ]
    },
    
    syllabusSection: {
        title: 'Syllabus',
        subtitle: 'Course & Program Outcomes (First Year Engineering)',
        categories: [
            {
                year: 'Final Year',
                links: [
                    { label: 'Final Year (BE_2008)', href: '/pdf/first-syllabus/final_year/Final Year (BE_2008).pdf' },
                ]
            },
            {
                year: 'Second Year',
                links: [
                    {label: ' '}
                ]
            },
            {
                year: 'Third Year',
                links: [{label: ' '}]
            },
        ]
    },
    
    videoSection: {
        title: 'Video',
        videos: [
            { title: 'Department Overview', embedUrl: 'https://www.youtube.com/embed/c2u77NAf5x8?si=xTGGxaO3V7kFW7oA' },
        ]
    },
};

export const mbaData = {
    hero: {
        backgroundImage: '/departments//MBAhero.png',
        title: 'Master of Business Administration',
        subtitle: 'Developing Future Business Leaders',
        overlay: true
    },
    
    sidebarTitle: 'MBA Department',
    
    sidebarItems: [
        'Home',
        "HOD's Desk",
        'Faculty',
        'Laboratory',
        'Student Projects',
        'Innovative Teaching Methods',
        'Placements',
        'News Letter',
        'Staff Achievement',
        'Student Achievements',
        'Syllabus',
        'Video',
        'Photo Gallery',
    ],
    
    homeSection: {
        title: 'M.B.A',
        establishmentYear: '2008',
        intake: '60',
        duration: '4 Years',
        affiliatedTo: 'Savitribai Phule, Pune University.',
        location: "Building ‘A’, Ground and First Floor",
        contact: '02594-299204',
        vision: 'To become a leading department where the best in research, learning, and teaching collaborate.',
        mission: [
            'To provide quality technical education through academic programs.',
            'To provide a career platform to the students through exposure to industry.',
            'To promote excellence by encouraging creativity, soft skills improvisation and discipline.',
        ],
        qualityPolicy: 'Committed to provide quality education to the students enabling them to excel in the fields of Science, Engineering & Technology to cater to the changing and challenging needs of society and industry.',
    },
    
    hodSection: {
        title: "HOD's Desk",
        name: 'Dr. P. D. Daware',
        image: '/departments/hod/person.jpg',
        designation: 'Head of Department',
        qualification: 'Ph. D. (pursuing) M. E. (Construction and Management) B. E. (Civil Engineering) D. C. E. (Civil Engineering) M. M. S. (Material Management) P. G. D. B. M.',
        experience: '13',
        specialization: 'M.E(C&M) B.E (CIVIL) D.C.E MMS (MM) PGDBM',
        mobile: '-',
        email: '-',
        officeAddress: 'Nashik Gramin Shikshan Prasarak Mandal’s Brahma Valley College of Engineering and Research Institute',
        about: `The MBA program of Nashik Gramin Shikshan Prasarak Mandal’s Brahma Valley College of Engineering and Research Institute at Anjaneri Nasik accredited A grade by NAAC is affiliated to SPPU with 60 student’s intake offers various specialisation as well as dual specialization.In MBA Programme of BVCOE and RI, our students receive the highest quality of education. This is facilitated by paying utmost importance to teaching quality and practical learning. We are not just confined to the classroom teaching but also notably active in conducting Conferences, Workshops, Seminars, Guest Lectures, Industrial visits and other Co-curricular activities. These activities expose students to aspects beyond the curriculum, thus adding value to their professional success. This also helps our graduates with relevant knowledge; managerial, analytical, interpersonal and communication skills; and the right attitudes, with a strong emphasis on personal values. 

I strongly believe in the concept that Moral and values-based Education leads to all round development". Empowerment of students for all round development through education is our cherished motto. Today education means acquisition of knowledge and skills, building character and improving employability of our young talent, the future leadership. Our Academic Record has been outstanding since the inception of the institution. Moreover, the institute has a commendable record of very high pass percentage every year with maximum number of 1st Divisions in both theory as well as in practical examination.

I am proud of being the HoD of such a wonderful institute dedicated to the causes of better India through education and their real empowerment. Come on let's give our best and make this institute a modern temple of learning through our diligence, devotion and dedication.`,
vision: 'To become a leading department where the best in research, learning, and teaching collaborate.',
        mission: [
            'To provide quality technical education through academic programs.',
            'To provide a career platform to the students through exposure to industry.',
            'To promote excellence by encouraging creativity, soft skills improvisation and discipline.',
        ],
        qualityPolicy: 'Committed to provide quality education to the students enabling them to excel in the fields of Science, Engineering & Technology to cater to the changing and challenging needs of society and industry.',
    },
    
    facultySection: {
        title: 'Name of Faculty',
        faculty: [
            createFaculty(1, 'Dr. P. D. Daware', 'HOD', 'Ph. D. (pursuing) M. E. (Construction and Management) B. E. (Civil Engineering) D. C. E. (Civil Engineering) M. M. S. (Material Management) P. G. D. B. M.', 13, '/pdf/mba-resume/resume1.pdf'),
            createFaculty(2, 'V. B. Gangurde', 'Assistant Professor', 'MBA (HR & FINANCE) B. Com', 3, '/pdf/mba-resume/resume2.pdf'),
            createFaculty(3, 'V. K. Kekan', 'Assistant Professor', 'MBA (HR & FINANCE) B. Com', 2, '/pdf/mba-resume/resume3.pdf'),
            createFaculty(4, 'P. S. Jangam', 'Assistant Professor', 'MBA (Finance & Marketing) BBA (Finance)', 1, '/pdf/mba-resume/resume4.pdf'),
            createFaculty(5, 'A. H. Raundal', 'Assistant Professor', 'MBA (Marketing) B. Sc (Biotechnology)', 1, '/pdf/mba-resume/resume5.pdf'),
        ]
    },
    
    laboratorySection: {
        title: 'About Laboratories',
        labs: [
            'CAD/CAM',
            'HVAC & RAC',
            'Applied Thermodynamics',
            'Engineering Materials And Metallurgy',
            'Turbomachinery',
            'Fluid Mechanics & Power',
            'BME & Measurment',
            'Heat Transfer',
            'TOM & DOM',
            'Workshop',
            {
                name: 'Workshop',
                subItems: ['Machine Shop', 'Fitting', 'Welding', 'Carpentry']
            }
        ]
    },
    
    studentProjectsSection: {
        title: 'Students Projects',
        projects: [
            createProject(
                1,
                'A STUDY OF EFFECTIVENESS OF DIGITAL MARKETING STRATEGIES OF THE FOLIAGE OUTDOORS PUNE',
                'Prof. P. D. DAWARE',
                ['AHIRE GAURAV CHANDRAKANT']
            ),
            createProject(
                2,
                'BRAND PREFERENCE TOWARDS AMUL FRESH PRODUCTS',
                'Prof. P. D. DAWARE',
                ['AHIRE MAYUR RAVINDRA']
            ),
            createProject(
                3,
                'DRIVING GROWTH THROUGH STRATEGY AND INNOVATION : A CASE STUDY ON NITIRAJ ENG LTD DHULE',
                'Prof. P. D. DAWARE',
                ['BADGUJAR DIVYESH KISHOR']
            ),
            createProject(
                4,
                'A STUDY OF MERGER AND ACQUISITION OF MARUTI SUZUKI',
                'Prof. P. D. DAWARE',
                ['BHAMARE PRACHITI KISHOR']
            ),
            createProject(
                5,
                'GREEN LOGISTICS EVALUATING THE IMPACT OF ECO-FRIENDLY PACKAGING FOR SHREE GANESH ENGINEERING',
                'Prof. P. D. DAWARE',
                ['BHAMARE SAURABH VISHWAS']
            ),
            createProject(
                6,
                'CONSUMER PERCEPTION TOWARDS PEPSICO SOFT DRINKS WITH SPECIAL REFERENCE TO NASHIK',
                'Prof. P. D. DAWARE',
                ['BOMBALE KIRAN UTTAM']
            ),
            createProject(
                7,
                'A STUDY OF CONSUMER SATISFACTION TOWARDS HOME LOAN',
                'Prof. P. D. DAWARE',
                ['BORSE VARUN RAMESH']
            ),
            createProject(
                8,
                'RECRUITMENT AND SELECTION PROCESS WITH SPECIAL REFERENCE TO PARVEEN INDUSTRIES PVT LTD',
                'Prof. P. D. DAWARE',
                ['CHAURE DNYANESHWAR VITTHAL']
            ),
            createProject(
                9,
                'ROTAVATOR AND ROTAVATOR SPARE PARTS FEEDBACK ANALYSIS',
                'Prof. P. D. DAWARE',
                ['DEORE UMESH SURESH']
            ),
            createProject(
                10,
                'A STUDY OF LOAN PROCEDURE (AUTO) WITH REFERENCE TO AXIS BANK LTD NASHIK',
                'Prof. P. D. DAWARE',
                ['DHAGE SANKET ANANT']
            ),
        ]
    },
    
    innovativeTeachingSection: {
        title: 'Innovative Teaching Method',
        methods: [
            createTeachingMethod('Flipped Classroom', 'Students study content at home (e.g., through videos), and do problem-solving or discussions in class.'),
            createTeachingMethod('Project-Based Learning (PBL)', 'Students learn by working on real-world projects.'),
            createTeachingMethod('Gamification', 'Using game elements like points, levels, or challenges to motivate learning.'),
            createTeachingMethod('Blended Learning', 'Combining traditional classroom teaching with online digital media.'),
            createTeachingMethod('Collaborative Learning', 'Students work in groups to solve problems and learn from each other.'),
            createTeachingMethod('Use of Technology', 'Smartboards, AR/VR, simulations, and educational apps.')
        ]
    },
    
    placementsSection: {
        title: 'MBA Placed Students',
        images: [
            { src: '/departments/mba-placed/p1.png', alt: 'Placement 1' },
            { src: '/departments/mba-placed/p2.png', alt: 'Placement 2' },
            { src: '/departments/mba-placed/p3.png', alt: 'Placement 3' },
            { src: '/departments/mba-placed/p4.png', alt: 'Placement 4' },
            { src: '/departments/mba-placed/p5.png', alt: 'Placement 5' },
            { src: '/departments/mba-placed/p6.png', alt: 'Placement 6' },
            { src: '/departments/mba-placed/p7.png', alt: 'Placement 7' },
            { src: '/departments/mba-placed/p8.png', alt: 'Placement 8' },
            { src: '/departments/mba-placed/p9.png', alt: 'Placement 9' },
            { src: '/departments/mba-placed/p10.png', alt: 'Placement 10' },
            { src: '/departments/mba-placed/p11.png', alt: 'Placement 11' },
            { src: '/departments/mba-placed/p12.png', alt: 'Placement 12' },
            { src: '/departments/mba-placed/p13.png', alt: 'Placement 13' },
            { src: '/departments/mba-placed/p14.png', alt: 'Placement 14' },
            { src: '/departments/mba-placed/p15.png', alt: 'Placement 15' },

        ]
    },
    
    newsLetterSection: {
        title: 'News Letter',
        pdfLink: '/pdf/mba_news_letter.pdf',
        pdfLabel: 'Newsletter'
    },
    
    staffAchievementSection: {
        title: 'MBA Staff Achievement',
        achievements: [
            createAchievement(1, 'Dr. Santosh H. Pawar', 'FDP', 'Participant', '2021-22 to 2022-23'),
        ]
    },
    
    studentAchievementsSection: {
        title: 'MBA Student Achievements',
        achievements: [
            createAchievement(1, 'Dr. Santosh H. Pawar', 'FDP', 'Participant', '2021-22 to 2022-23'),
        ]
    },
    
    syllabusSection: {
        title: 'Syllabus',
        subtitle: 'Course & Program Outcomes (MBA)',
        categories: [
            {
                year: 'First Year',
                links: [
                    { label: 'MBA I Year', href: '/pdf/mba-syllabus/first_year/Final Year.pdf' },
                ]
            },
            {
                year: 'Second Year',
                links: [
                    { label: '', href: '' },
                ]
            },
            {
                year: 'Third Year',
                links: [
                    { label: '', href: '' },
                ]
            },
        ]
    },
    
    videoSection: {
        title: 'Video',
        videos: [
            { title: 'Department Overview', embedUrl: 'https://www.youtube.com/embed/example' },
        ]
    },
    
    photoGallerySection: {
        title: 'Gallery',
        images: [
            { src: '/departments/mba-gallery/g1.jpg', alt: 'Lab Activity 1' },
            { src: '/departments/mba-gallery/g2.jpg', alt: 'Lab Activity 2' },
            { src: '/departments/mba-gallery/g3.jpg', alt: 'Lab Activity 3' },
        ]
    }
};

export const allDepartmentsData = {
    mechanical: mechanicalEnggData,
    computer: computerEnggData,
    civil: civilEnggData,
    electrical: electricalEnggData,
    firstYear: firstYearEnggData,
    mba: mbaData
};
