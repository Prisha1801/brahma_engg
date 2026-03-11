export const coursesData = [
  {
    id: 1,
    courseName: "Civil Engineering",
    choiceCode: "0513019110",
    intake: 60,
  },
  {
    id: 2,
    courseName: "Computer Engineering",
    choiceCode: "0513024510",
    intake: 60,
  },
  {
    id: 3,
    courseName: "Electrical Engineering",
    choiceCode: "0513029310",
    intake: 60,
  },
  {
    id: 4,
    courseName: "Mechanical Engineering",
    choiceCode: "0513061210",
    intake: 120,
  },
  {
    id: 5,
    courseName: "M.B.A.",
    choiceCode: "0513010110",
    intake: 60,
  },
];


export const eligibilityData = [
  {
    id: 1,
    title: "1. First Year – Engineering or Technology (4 Years Duration)",
    description: "Maharashtra State Candidature Candidate",
    points: [
      {
        text: "Should be a citizen of India."
      },
      {
        text: "Should have passed 10+2 or equivalent examination with:",
        subPoints: [
          {
            text: "Physics and Mathematics as compulsory subjects"
          },
          {
            text: "One of the following subjects:",
            subPoints: [
              { text: "Chemistry" },
              { text: "Biotechnology" },
              { text: "Biology" },
              { text: "Technical Vocational subject" },
              { text: "Computer Science" },
              { text: "Information Technology" },
              { text: "Informatics Practices" },
              { text: "Agriculture" },
              { text: "Engineering Graphics" },
              { text: "Business Studies" },
              { text: "Electronics" },
              { text: "Entrepreneurship" },
            ]
          },
          {
            text: "Minimum 45% marks (40% for Reserved/EWS/PWD of Maharashtra only) in above subjects taken together."
          }
        ]
      },
      {
        text: "Appeared in PCM MHT-CET and obtained a non-zero score, or obtained non-zero positive score in JEE (Main) for the respective academic year."
      }
    ],
    note: "Kindly refer to the information brochure issued by the State Common Entrance Test Cell, Government of Maharashtra for detailed information.",
    table: {
      headers: [
        "Type of Student",
        "Eligibility (General Category)",
        "Eligibility (Reserved / EWS / PwD)"
      ],
      rows: [
        [
          "MHT-CET / JEE (Mains)",
          "Appeared with non-zero score",
          "Appeared with non-zero score"
        ],
        [
          "Diploma in Engineering & Technology",
          "Minimum 3 years Diploma passed with at least 45% marks",
          "Minimum 3 years Diploma passed with at least 40% marks"
        ],
        [
          "D.Voc. (Diploma of Vocation)",
          "Passed 3-year D.Voc. in same or allied sector",
          "Passed 3-year D.Voc. in same or allied sector"
        ]
      ]
    }
  },
  {
    id: 2,
    title: "2. Direct Second Year Engineering / Technology (3 Years Duration)",
    description: "For Maharashtra State & All India Candidature Candidates",
    points: [
      {
        text: "Should be a citizen of India."
      },
      {
        text: "Should have passed minimum 3-year or 2-year (Lateral Entry) Diploma Course in Engineering and Technology with at least 45% marks (40% for Reserved/EWS/PwD of Maharashtra) from AICTE/State/Central Government approved Institution or its equivalent.",
        boldParts: ["45%", "40%"]
      },
      {
        text: "Or, should have passed B.Sc. Degree from a UGC or AIU recognized University with at least 45% marks (40% for Reserved/EWS/PwD of Maharashtra) & must have passed HSC or equivalent with Mathematics as a subject.",
        boldParts: ["B.Sc. Degree", "45%", "40%", "Mathematics"]
      },
      {
        text: "Or, should have passed 3-year D.Voc. stream in the same or allied sector.",
        boldParts: ["D.Voc. stream"]
      },
      {
        text: "Must satisfy any other eligibility criteria as declared by the competent authority."
      }
    ],
    note: "Kindly refer to the information brochure issued by the State Common Entrance Test Cell, Government of Maharashtra for detailed information.",
    table: {
      headers: [
        "Type of Student",
        "Eligibility (General Category)",
        "Eligibility (Reserved / EWS / PwD)"
      ],
      rows: [
        [
          "B.Sc. Degree",
          "Passed B.Sc. Degree from UGC recognized university with at least 45% marks & Passed HSC or equivalent with Mathematics",
          "Passed B.Sc. Degree from UGC recognized university with at least 40% marks & Passed HSC or equivalent with Mathematics"
        ],
        [
          "D.Voc. (Diploma of Vocation)",
          "Passed 3-year D.Voc. in the same or allied sector",
          "Passed 3-year D.Voc. in the same or allied sector"
        ]
      ]
    }
  },
  {
    id: 3,
    title: "3. M.B.A. (2 Years Duration)",
    description: "For Maharashtra State Candidature Candidates",
    points: [
      {
        text: "Should be a citizen of India."
      },
      {
        text: "Should have passed a minimum 3-year Bachelor's Degree awarded by any of the universities recognized by UGC or AIU in any discipline with at least 50% marks in aggregate (45% for Reserved / EWS / PwD candidates of Maharashtra State).",
        boldParts: ["50%", "45%"]
      },
      {
        text: "Should have obtained non-zero score in MAH-MBA/MMS-CET conducted by the Competent Authority.",
        boldParts: ["MAH-MBA/MMS-CET"]
      },
      {
        text: "OR, should have obtained non-zero positive score in any one of the following exams:",
        subPoints: [
          { text: "CET (Competent Authority)" },
          { text: "CAT (IIM)" },
          { text: "CMAT (NTA)" },
          { text: "XAT (Xavier School of Management, Jamshedpur)" },
          { text: "ATMA (AIMS)" },
          { text: "MAT (AIMA)" },
          { text: "GMAT (GMAC, USA)" },
        ]
      }
    ],
    tableTitle: "Eligibility Summary Table",
    note: "Kindly refer to the information brochure issued by the State Common Entrance Test Cell, Government of Maharashtra for detailed information.",
    noteLink: {
      text: "https://cetcell.mahacet.org/",
      url: "https://cetcell.mahacet.org/"
    },
    table: {
      headers: [
        "Type of Student",
        "Eligibility (General Category)",
        "Eligibility (Reserved / EWS / PwD)"
      ],
      rows: [
        [
          "Bachelor's Degree",
          "Non-zero positive score in any of: MAH-MBA/MMS-CET, CAT, CMAT, XAT, ATMA, MAT, GMAT",
          "Non-zero positive score in any of: MAH-MBA/MMS-CET, CAT, CMAT, XAT, ATMA, MAT, GMAT"
        ]
      ]
    }
  }
];


export const feesStructureData = {
  title: "Total Fees Payable by Student (Rs.)",
  headers: [
    {
      label: "Category",
      rowSpan: 2
    },
    {
      label: "Total Fees Payable by Student (Rs.)",
      colSpan: 2
    }
  ],
  subHeaders: [
    "F.E. & D.S.E.",
    "M.B.A. / D.S.Y M.B.A."
  ],
  rows: [
    {
      category: "SC / ST",
      fe: "0",
      mba: "0"
    },
    {
      category: "SBC / NT / DT / VJ / TFV / Girls Admitted through CAP",
      fe: "11,327",
      mba: "9,941"
    },
    {
      category: "OBC / EBC / SEBC / EWS",
      fe: "52,664",
      mba: "46,220"
    },
    {
      category: "Open, General Category (Non EBC) / Out of Maharashtra",
      fe: "94,000",
      mba: "82,500"
    }
  ]
};



// FE Admission Data
export const feAdmissionData = [
  {
    title: "Advertisement",
    file: "/pdf/fe-admission/Advertisement.pdf",
  },
  {
    title: "First Year Engineering",
    file: "/pdf/fe-admission/First Year Engineering.pdf",
  },
  {
    title: "Merit List",
    file: "/pdf/fe-admission/Merit List.pdf",
  },
];

// DSE Admission Data
export const dseAdmissionData = [
  {
    title: "Advertisement",
    file: "/pdf/dse-admission/Advertisement.pdf",
  },
  {
    title: "Direct Second Year Engineering",
    file: "/pdf/dse-admission/Direct Second Year Engineering.pdf",
  },
];

// MBA Admission Data
export const mbaAdmissionData = [
  {
    title: "MBA Admission",
    file: "/pdf/mba-admission/MBA Admission.pdf",
  },
];


// NAAC Section Data
// PDFs are located in: public/pdf/naac/

export const IQACData = [
  { id: 1, title: "IQAC Cell", pdf: "/pdf/naac/IQAC Cell.pdf" },
  { id: 2, title: "Meetings", pdf: "/pdf/naac/Meetings.pdf" },
];

export const IIQCData = [
  // No records found - leave empty or add when available
];

export const BestPracticesData = [
  { id: 1, title: "BEST PRACTICES", pdf: "/pdf/naac/BEST PRACTICES.pdf" },
  { id: 2, title: "BEST PRACTICE FOR WEBSITE", pdf: "/pdf/naac/BEST PRACTICE FOR WEBSITE.pdf" },
];

export const CycleDocumentsData = [
  { id: 1, title: "Cycle 1", pdf: "/pdf/naac/Cycle-1.pdf" },
];


export const FeedbackData = [
  { id: 1, title: "EMPLOYERS FEEDBACK", pdf: "#" },
  { id: 2, title: "STUDENT FEEDBACK", pdf: "#" },
  { id: 3, title: "STUDENT FEEDBACK (ABOUT SYLLABUS)", pdf: "#" },
  { id: 4, title: "ALUMNI FEEDBACK", pdf: "#" },
  { id: 5, title: "TEACHER's FEEDBACK", pdf: "#" },
  { id: 6, title: "Sample Feedback Form", pdf: "#" },
  { id: 7, title: "Action Taken Report", pdf: "#" },
];



export const AQARDocData = [
  { id: 1, title: "Workload", pdf: "/pdf/naac/Workload.pdf" },
  { id: 2, title: "E-Resources and E-Journals Subscription List", pdf: "/pdf/naac/E-Resources and E-Journals Subscription List.pdf" },
  { id: 3, title: "Scholarship", pdf: "/pdf/naac/Scholarship.pdf" },
  { id: 4, title: "Competitive Exams", pdf: "/pdf/naac/Competitive Exams.pdf" },
];

export const NIRFData = [
  { id: 1, title: "2025 NIRF", pdf: "/pdf/naac/2025 NIRF.pdf" },
];

// =============================================
// NAAC Documents Data
// PDFs located in: public/pdf/naac-documents/
// =============================================

export const naacDocumentsData = {
  "extended-profile": {
    "1.1": [
      { year: "2017-18", pdf: "/pdf/naac-documents/extended-profile/1.1/2017-18.pdf" },
      { year: "2018-19", pdf: "/pdf/naac-documents/extended-profile/1.1/2018-19.pdf" },
      { year: "2019-20", pdf: "/pdf/naac-documents/extended-profile/1.1/2019-20.pdf" },
      { year: "2020-21", pdf: "/pdf/naac-documents/extended-profile/1.1/2020-21.pdf" },
      { year: "2021-22", pdf: "/pdf/naac-documents/extended-profile/1.1/2021-22.pdf" },
    ],
    "2.1": [
      { year: "2017-18-2021-22 (Without Repeating Count)", pdf: "2017-18-2021-22 (Without Repeating Count)" },
      { year: "2017-18", pdf: "/pdf/naac-documents/extended-profile/2.1/2017-18.pdf" },
      { year: "2018-19", pdf: "/pdf/naac-documents/extended-profile/2.1/2018-19.pdf" },
      { year: "2019-20", pdf: "/pdf/naac-documents/extended-profile/2.1/2019-20.pdf" },
      { year: "2020-21", pdf: "/pdf/naac-documents/extended-profile/2.1/2020-21.pdf" },
      { year: "2021-22", pdf: "/pdf/naac-documents/extended-profile/2.1/2021-22.pdf" },
    ],
  },
  "criteria-1": {
    "1.1.1": [
      { year: "1.1.1 C", pdf: "/pdf/naac-documents/criteria-1/1.1.1/1.1.1 C.pdf" },
      { year: "FINAL 2017-18", pdf: "/pdf/naac-documents/criteria-1/1.1.1/FINAL 2017-18.pdf" },
      { year: "FINAL 2018-19", pdf: "/pdf/naac-documents/criteria-1/1.1.1/FINAL 2018-19.pdf" },
      { year: "FINAL 2019-20", pdf: "/pdf/naac-documents/criteria-1/1.1.1/FINAL 2019-20.pdf" },
      { year: "FINAL 2020-21", pdf: "/pdf/naac-documents/criteria-1/1.1.1/FINAL 2020-21.pdf" },
      { year: "FINAL 2021-22", pdf: "/pdf/naac-documents/criteria-1/1.1.1/FINAL 2021-22.pdf" },
    ],
    "1.2.1": [
      { year: "FINAL 2017-18", pdf: "/pdf/naac-documents/criteria-1/1.2.1/FINAL 2017-18.pdf" },
      { year: "FINAL 2018-19", pdf: "/pdf/naac-documents/criteria-1/1.2.1/FINAL 2018-19.pdf" },
      { year: "FINAL 2019-20", pdf: "/pdf/naac-documents/criteria-1/1.2.1/FINAL 2019-20.pdf" },
      { year: "FINAL 2020-21", pdf: "/pdf/naac-documents/criteria-1/1.2.1/FINAL 2020-21.pdf" },
      { year: "FINAL 2021-22", pdf: "/pdf/naac-documents/criteria-1/1.2.1/FINAL 2021-22.pdf" },
    ],
    "1.3.1": [
      { year: "1.3.1 C", pdf: "/pdf/naac-documents/criteria-1/1.3.1/1.3.1 C.pdf" },
    ],
    "1.3.2": [
      { year: "BE Civil Project", pdf: "/pdf/naac-documents/criteria-1/1.3.2/BE Civil Project.pdf" },
      { year: "Computer Internship", pdf: "/pdf/naac-documents/criteria-1/1.3.2/Computer Internship.pdf" },
      { year: "Computer Project", pdf: "/pdf/naac-documents/criteria-1/1.3.2/Computer Project.pdf" },
      { year: "Electrical Project", pdf: "/pdf/naac-documents/criteria-1/1.3.2/Electrical_Project.pdf" },
      { year: "MBA PROJECT", pdf: "/pdf/naac-documents/criteria-1/1.3.2/MBA PROJECT.pdf" },
      { year: "MECHANICAL INTERNSHIP", pdf: "/pdf/naac-documents/criteria-1/1.3.2/MECHANICAL INTERNSHIP.pdf" },
      { year: "MECHANICAL PROJECT", pdf: "/pdf/naac-documents/criteria-1/1.3.2/MECHANICAL PROJECT.pdf" },
      { year: "T.E.Elect Intership", pdf: "/pdf/naac-documents/criteria-1/1.3.2/T.E.Elect Intership.pdf" },
      { year: "TE Civil INTERNSHIP", pdf: "/pdf/naac-documents/criteria-1/1.3.2/TE Civil INTERNSHIP.pdf" },
    ],
    "1.4.1": [
      { year: "ACTION TAKEN REPORT", pdf: "/pdf/naac-documents/criteria-1/1.4.1/ACTION TAKEN REPORT.pdf" },
      { year: "ANALYSIS", pdf: "/pdf/naac-documents/criteria-1/1.4.1/ANALYSIS.pdf" },
      { year: "FEEDBACK FORM", pdf: "/pdf/naac-documents/criteria-1/1.4.1/FEEDBACK FORM.pdf" },
    ],
    "2.3.1": [
      { year: "2.3.1 Final", pdf: "/pdf/naac-documents/criteria-1/2.3.1/2.3.1 Final.pdf" },
    ],
    "3.2.2": [
      { year: "3.2.2", pdf: "/pdf/naac-documents/criteria-1/3.2.2/3.2.2.pdf" },
    ],
  },
  "criteria-2": {
    "2.1.1": [
      { year: "merit list 2017-18", pdf: "/pdf/naac-documents/criteria-2/2.1.1/merit list 2017-18.pdf" },
      { year: "merit list 2018-19", pdf: "/pdf/naac-documents/criteria-2/2.1.1/merit list 2018-19.pdf" },
      { year: "Merit list 2019-20", pdf: "/pdf/naac-documents/criteria-2/2.1.1/Merit list 2019-20.pdf" },
      { year: "Merit list 2020-21", pdf: "/pdf/naac-documents/criteria-2/2.1.1/Merit list 2020-21.pdf" },
      { year: "Merit list 2021-22", pdf: "/pdf/naac-documents/criteria-2/2.1.1/Merit list 2021-22.pdf" },
    ],
    "2.1.2": [
      { year: "Brochure DVV", pdf: "/pdf/naac-documents/criteria-2/2.1.2/Brochure DVV.pdf" },
    ],
    "2.5.1": [
      { year: "class test time table", pdf: "/pdf/naac-documents/criteria-2/2.5.1/class test time table.pdf" },
      { year: "class test", pdf: "/pdf/naac-documents/criteria-2/2.5.1/class test.pdf" },
      { year: "internal assesment", pdf: "/pdf/naac-documents/criteria-2/2.5.1/internal assesment.pdf" },
      { year: "project diary", pdf: "/pdf/naac-documents/criteria-2/2.5.1/project diary.pdf" },
      { year: "SPPU_Exam Photocopy", pdf: "/pdf/naac-documents/criteria-2/2.5.1/SPPU_Exam Photocopy.pdf" },
      { year: "Unipune (1)", pdf: "/pdf/naac-documents/criteria-2/2.5.1/Unipune (1).pdf" },
    ],
    "2.6.1": [
      { year: "CO Mech", pdf: "/pdf/naac-documents/criteria-2/2.6.1/CO Mech.pdf" },
      { year: "POs PEOs PSOs of all programmes", pdf: "/pdf/naac-documents/criteria-2/2.6.1/POs PEOs PSOs of all programmes.pdf" },
    ],
    "2.6.2": [
      { year: "2.6.2 c", pdf: "/pdf/naac-documents/criteria-2/2.6.2/2.6.2 c.pdf" },
      { year: "2017-18 Result", pdf: "/pdf/naac-documents/criteria-2/2.6.2/2017-18 Result.pdf" },
      { year: "2018-19 Result", pdf: "/pdf/naac-documents/criteria-2/2.6.2/2018-19 Result.pdf" },
      { year: "2019-20 Result", pdf: "/pdf/naac-documents/criteria-2/2.6.2/2019-20 Result.pdf" },
      { year: "2020-21 Result", pdf: "/pdf/naac-documents/criteria-2/2.6.2/2020-21 Result.pdf" },
      { year: "2021-22 Result", pdf: "/pdf/naac-documents/criteria-2/2.6.2/2021-22 Result.pdf" },
    ],
  },
  "criteria-3": {
    "3.3.1": [
      { year: "3.3.1", pdf: "/pdf/naac-documents/criteria-3/3.3.1/3.3.1.pdf" },
    ],
    "3.3.2": [
      { year: "3.3.2", pdf: "/pdf/naac-documents/criteria-3/3.3.2/3.3.2.pdf" },
    ],
    "3.4.3": [
      { year: "NSS-17-18", pdf: "/pdf/naac-documents/criteria-3/3.4.3/NSS-17-18.pdf" },
      { year: "NSS-18-19", pdf: "/pdf/naac-documents/criteria-3/3.4.3/NSS-18-19.pdf" },
      { year: "NSS-19-20", pdf: "/pdf/naac-documents/criteria-3/3.4.3/NSS-19-20.pdf" },
      { year: "NSS-20-21", pdf: "/pdf/naac-documents/criteria-3/3.4.3/NSS-20-21.pdf" },
      { year: "NSS-21-22", pdf: "/pdf/naac-documents/criteria-3/3.4.3/NSS-21-22.pdf" },
    ],
    "3.5.1": [
      { year: "Ambika Construction & Earthmovers", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Ambika Construction & Earthmovers.pdf" },
      { year: "Anson Modular Systems", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Anson Modular Systems.pdf" },
      { year: "Build India Education", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Build India Education.pdf" },
      { year: "CAD Institute", pdf: "/pdf/naac-documents/criteria-3/3.5.1/CAD Institute.pdf" },
      { year: "CADD Centre", pdf: "/pdf/naac-documents/criteria-3/3.5.1/CADD Centre.pdf" },
      { year: "Civil Tech", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Civil Tech.pdf" },
      { year: "Dattatraya Ashok Shelar", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Dattatraya Ashok Shelar.pdf" },
      { year: "Diamond Media Technology", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Diamond Media Technology.pdf" },
      { year: "Durga Electricals", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Durga Electricals.pdf" },
      { year: "Durva Construction", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Durva Construction.pdf" },
      { year: "Er. Pravin Ashok Sonawane", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Er. Pravin Ashok Sonawane.pdf" },
      { year: "Excelr Solutions", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Excelr Solutions.pdf" },
      { year: "Institute of CAD Technology", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Institute of CAD Technology.pdf" },
      { year: "Kankariya Land Surveyors", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Kankariya Land Surveyors.pdf" },
      { year: "Mane Developers", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Mane Developers.pdf" },
      { year: "Moraya Construction", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Moraya Construction.pdf" },
      { year: "My Car Doctor", pdf: "/pdf/naac-documents/criteria-3/3.5.1/My Car Doctor.pdf" },
      { year: "NPIT Solutions", pdf: "/pdf/naac-documents/criteria-3/3.5.1/NPIT Solutions.pdf" },
      { year: "Nutan Urja Solutions", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Nutan Urja Solutions.pdf" },
      { year: "Patel NDT & Technical Services", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Patel NDT & Technical Services.pdf" },
      { year: "PB Architects & Interiors", pdf: "/pdf/naac-documents/criteria-3/3.5.1/PB Architects & Interiors.pdf" },
      { year: "Probion Tech Pvt. Ltd.", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Probion Tech Pvt. Ltd..pdf" },
      { year: "Rashtriya Chemicals & Fertilisers Ltd", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Rashtriya Chemicals & Fertilisers Ltd.pdf" },
      { year: "RMC Readymix India", pdf: "/pdf/naac-documents/criteria-3/3.5.1/RMC Readymix India.pdf" },
      { year: "Sai Enerzies", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Sai Enerzies.pdf" },
      { year: "Sai Samarth Transformers", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Sai Samarth Transformers.pdf" },
      { year: "Shivaji M Ghuge", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Shivaji M Ghuge.pdf" },
      { year: "Shree Equipments & Control", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Shree Equipments & Control.pdf" },
      { year: "Vishal Parsharam Katore", pdf: "/pdf/naac-documents/criteria-3/3.5.1/Vishal Parsharam Katore.pdf" },
      { year: "VRF Aircon Pvt. Ltd.", pdf: "/pdf/naac-documents/criteria-3/3.5.1/VRF Aircon Pvt. Ltd..pdf" },
      { year: "VRYSM Solutions Pvt. Ltd.", pdf: "/pdf/naac-documents/criteria-3/3.5.1/VRYSM Solutions Pvt. Ltd..pdf" },
    ],
  },
  "criteria-4": {
    "4.3.1": [
      { year: "4.3.1 Institution frequently updates its IT facilities", pdf: "/pdf/naac-documents/criteria-4/4.3.1/4.3.1 Institution frequently updates its IT facilities.pdf" },
    ],
  },
  "criteria-5": {
    "5.1.1": [
      { year: "All Scholarship G.R.", pdf: "/pdf/naac-documents/criteria-5/5.1.1/All Scholarship G.R..pdf" },
      { year: "EBC 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/EBC 2017-18.pdf" },
      { year: "EBC 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/EBC 2018-19.pdf" },
      { year: "EBC 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/EBC 2019-20.pdf" },
      { year: "EBC 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/EBC 2020-21.pdf" },
      { year: "EBC 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/EBC 2021-22.pdf" },
      { year: "OBC FREESHIP 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC FREESHIP 2017-18.pdf" },
      { year: "OBC FREESHIP 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC FREESHIP 2018-19.pdf" },
      { year: "OBC FREESHIP 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC FREESHIP 2019-20.pdf" },
      { year: "OBC FREESHIP 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC FREESHIP 2020-21.pdf" },
      { year: "OBC FREESHIP 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC FREESHIP 2021-22.pdf" },
      { year: "OBC GOI 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC GOI 2017-18.pdf" },
      { year: "OBC GOI 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC GOI 2018-19.pdf" },
      { year: "OBC GOI 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC GOI 2019-20.pdf" },
      { year: "OBC GOI 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC GOI 2020-21.pdf" },
      { year: "OBC GOI 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/OBC GOI 2021-22.pdf" },
      { year: "SBC FREESHIP 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC FREESHIP 2017-18.pdf" },
      { year: "SBC FREESHIP 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC FREESHIP 2018-19.pdf" },
      { year: "SBC FREESHIP 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC FREESHIP 2019-20.pdf" },
      { year: "SBC FREESHIP 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC FREESHIP 2020-21.pdf" },
      { year: "SBC FREESHIP 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC FREESHIP 2021-22.pdf" },
      { year: "SBC GOI 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC GOI 2017-18.pdf" },
      { year: "SBC GOI 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC GOI 2018-19.pdf" },
      { year: "SBC GOI 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC GOI 2019-20.pdf" },
      { year: "SBC GOI 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC GOI 2020-21.pdf" },
      { year: "SBC GOI 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SBC GOI 2021-22.pdf" },
      { year: "SC FREESHIP 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC FREESHIP 2017-18.pdf" },
      { year: "SC FREESHIP 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC FREESHIP 2018-19.pdf" },
      { year: "SC FREESHIP 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC FREESHIP 2019-20.pdf" },
      { year: "SC FREESHIP 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC FREESHIP 2020-21.pdf" },
      { year: "SC FREESHIP 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC FREESHIP 2021-22.pdf" },
      { year: "SC GOI 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC GOI 2017-18.pdf" },
      { year: "SC GOI 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC GOI 2018-19.pdf" },
      { year: "SC GOI 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC GOI 2019-20.pdf" },
      { year: "SC GOI 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC GOI 2020-21.pdf" },
      { year: "SC GOI 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/SC GOI 2021-22.pdf" },
      { year: "ST FREESHIP 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST FREESHIP 2017-18.pdf" },
      { year: "ST FREESHIP 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST FREESHIP 2018-19.pdf" },
      { year: "ST FREESHIP 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST FREESHIP 2019-20.pdf" },
      { year: "ST FREESHIP 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST FREESHIP 2020-21.pdf" },
      { year: "ST FREESHIP 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST FREESHIP 2021-22.pdf" },
      { year: "ST GOI 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST GOI 2017-18.pdf" },
      { year: "ST GOI 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST GOI 2018-19.pdf" },
      { year: "ST GOI 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST GOI 2019-20.pdf" },
      { year: "ST GOI 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST GOI 2020-21.pdf" },
      { year: "ST GOI 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/ST GOI 2021-22.pdf" },
      { year: "VJNT FREESHIP 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/VJNT FREESHIP 2018-19.pdf" },
      { year: "VJNT FREESHIP 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/VJNT FREESHIP 2019-20.pdf" },
      { year: "VJNT FREESHIP 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/VJNT FREESHIP 2020-21.pdf" },
      { year: "VJNT FREESHIP 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/VJNT FREESHIP 2021-22.pdf" },
      { year: "VJNT GOI 2017-18", pdf: "/pdf/naac-documents/criteria-5/5.1.1/VJNT GOI 2017-18.pdf" },
      { year: "VJNT GOI 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.1.1/VJNT GOI 2018-19.pdf" },
      { year: "VJNT GOI 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.1.1/VJNT GOI 2019-20.pdf" },
      { year: "VJNT GOI 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.1.1/VJNT GOI 2020-21.pdf" },
      { year: "VJNT GOI 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.1.1/VJNT GOI 2021-22.pdf" },
    ],
    "5.1.2": [
      { year: "Communication Skill C", pdf: "/pdf/naac-documents/criteria-5/5.1.2/Communication Skill C.pdf" },
      { year: "ICT Computing Skill C", pdf: "/pdf/naac-documents/criteria-5/5.1.2/ICT Computing Skill C.pdf" },
      { year: "Life Skill C", pdf: "/pdf/naac-documents/criteria-5/5.1.2/Life Skill C.pdf" },
      { year: "Soft Skill C", pdf: "/pdf/naac-documents/criteria-5/5.1.2/Soft Skill C.pdf" },
    ],
    "5.1.3": [
      { year: "5.1.3 c", pdf: "/pdf/naac-documents/criteria-5/5.1.3/5.1.3 c.pdf" },
      { year: "Career Guidance", pdf: "/pdf/naac-documents/criteria-5/5.1.3/Career Guidance.pdf" },
    ],
    "5.2.1": [
      { year: "2017-18 COMP", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2017-18 COMP.pdf" },
      { year: "2017-18 M", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2017-18 M.pdf" },
      { year: "2017-18 MBA", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2017-18 MBA.pdf" },
      { year: "2017-18", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2017-18.pdf" },
      { year: "2018-19 COMP", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2018-19 COMP.pdf" },
      { year: "2018-19 M", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2018-19 M.pdf" },
      { year: "2018-19 MBA", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2018-19 MBA.pdf" },
      { year: "2018-19", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2018-19.pdf" },
      { year: "2019-20 COMP", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2019-20 COMP.pdf" },
      { year: "2019-20 M", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2019-20 M.pdf" },
      { year: "2019-20 MBA", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2019-20 MBA.pdf" },
      { year: "2019-20", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2019-20.pdf" },
      { year: "2020-21 COMP", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2020-21 COMP.pdf" },
      { year: "2020-21 M", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2020-21 M.pdf" },
      { year: "2020-21 MBA", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2020-21 MBA.pdf" },
      { year: "2020-21", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2020-21.pdf" },
      { year: "2021-22 COMP", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2021-22 COMP.pdf" },
      { year: "2021-22 M", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2021-22 M.pdf" },
      { year: "2021-22 MBA", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2021-22 MBA.pdf" },
      { year: "2021-22", pdf: "/pdf/naac-documents/criteria-5/5.2.1/2021-22.pdf" },
      { year: "Electrical 2018-19", pdf: "/pdf/naac-documents/criteria-5/5.2.1/Electrical 2018-19.pdf" },
      { year: "Electrical 2019-20", pdf: "/pdf/naac-documents/criteria-5/5.2.1/Electrical 2019-20.pdf" },
      { year: "Electrical 2020-21", pdf: "/pdf/naac-documents/criteria-5/5.2.1/Electrical 2020-21.pdf" },
      { year: "Electrical 2021-22", pdf: "/pdf/naac-documents/criteria-5/5.2.1/Electrical 2021-22_11zon.pdf" },
      { year: "H EDUCATION", pdf: "/pdf/naac-documents/criteria-5/5.2.1/H EDUCATION.pdf" },
      { year: "Higher Education", pdf: "/pdf/naac-documents/criteria-5/5.2.1/Higher Education.pdf" },
    ],
    "5.3.2": [
      { year: "5.3.2", pdf: "/pdf/naac-documents/criteria-5/5.3.2/5.3.2.pdf" },
    ],
    "5.4.1": [
      { year: "5.4.1", pdf: "/pdf/naac-documents/criteria-5/5.4.1/5.4.1.pdf" },
    ],
  },
  "criteria-6": {
    "6.1.1": [
      { year: "6.1.1", pdf: "/pdf/naac-documents/criteria-6/6.1.1/6.1.1.pdf" },
    ],
    "6.2.1": [
      { year: "6.2.1", pdf: "/pdf/naac-documents/criteria-6/6.2.1/6.2.1.pdf" },
    ],
    "6.3.2": [
      { year: "6.3.2 final", pdf: "/pdf/naac-documents/criteria-6/6.3.2/6.3.2 final.pdf" },
    ],
    "6.3.3": [
      { year: "6.3.3 C", pdf: "/pdf/naac-documents/criteria-6/6.3.3/6.3.3 C.pdf" },
    ],
    "6.4.1": [
      { year: "6.4.1", pdf: "/pdf/naac-documents/criteria-6/6.4.1/6.4.1.pdf" },
    ],
    "6.5.2": [
      { year: "AAA Audit Report", pdf: "/pdf/naac-documents/criteria-6/6.5.2/AAA Audit Report.pdf" },
      { year: "Audit Report", pdf: "/pdf/naac-documents/criteria-6/6.5.2/Audit Report.pdf" },
      { year: "Brahma Valley College (1)", pdf: "/pdf/naac-documents/criteria-6/6.5.2/Brahma Valley College of Engineering & Research Institute, Brahma Valley Campus, Anjaneri, Trimbakeshwar20230117- (6) (1).pdf" },
      { year: "Brahma Valley College (6)", pdf: "/pdf/naac-documents/criteria-6/6.5.2/Brahma Valley College of Engineering & Research Institute, Brahma Valley Campus, Anjaneri, Trimbakeshwar20230117- (6).pdf" },
      { year: "Brahma Valley College (7)", pdf: "/pdf/naac-documents/criteria-6/6.5.2/Brahma Valley College of Engineering & Research Institute, Brahma Valley Campus, Anjaneri, Trimbakeshwar20230117- (7).pdf" },
    ],
  },
  "criteria-7": {
    "7.1.1": [
      { year: "7.1.1", pdf: "/pdf/naac-documents/criteria-7/7.1.1/7.1.1.pdf" },
    ],
    "7.1.3": [
      { year: "ENERGY audit 2018-19", pdf: "/pdf/naac-documents/criteria-7/7.1.3/ENERGY audit 2018-19.pdf" },
      { year: "Energy Audit 2019-20", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Energy Audit 2019-20.pdf" },
      { year: "Energy Audit 2020-21", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Energy Audit 2020-21.pdf" },
      { year: "Energy Audit 2021-22", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Energy Audit 2021-22.pdf" },
      { year: "Envirnomental Audit 2018-19", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Envirnomental Audit 2018-19.pdf" },
      { year: "Envirnomental Audit 2020-21", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Envirnomental Audit 2020-21.pdf" },
      { year: "Envirnomental Audit 2021-22", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Envirnomental Audit 2021-22.pdf" },
      { year: "Environmental Audit 2019-20", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Environmental Audit 2019-20.pdf" },
      { year: "Green Audit 2018-19", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Green Audit 2018-19.pdf" },
      { year: "Green Audit 2019-20", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Green Audit 2019-20.pdf" },
      { year: "Green Audit 2021-22", pdf: "/pdf/naac-documents/criteria-7/7.1.3/Green Audit 2021-22.pdf" },
    ],
    "7.2.1": [
      { year: "BEST PRACTICE FOR WEBSITE", pdf: "/pdf/naac-documents/criteria-7/7.2.1/BEST PRACTICE FOR WEBSITE.pdf" },
      { year: "BEST PRACTICES", pdf: "/pdf/naac-documents/criteria-7/7.2.1/BEST PRACTICES.pdf" },
    ],
    "7.3.1": [
      { year: "Additional Document", pdf: "/pdf/naac-documents/criteria-7/7.3.1/Additional Document.pdf" },
      { year: "Any other relevant information", pdf: "/pdf/naac-documents/criteria-7/7.3.1/Any other relevant information.pdf" },
    ],
  },
};

// =============================================
// Table column structure (order + items per column)
// =============================================
export const tableStructure = [
  { col: "extended-profile", items: ["1.1", "2.1"] },
  { col: "criteria-1", items: ["1.1.1", "1.2.1", "1.2.2", "1.3.1", "1.3.2", "1.4.1", "2.3.1", "3.2.2"] },
  { col: "criteria-2", items: ["2.1.1", "2.1.2", "2.4.1.1", "2.4.2.1", "2.5.1", "2.6.1", "2.6.2"] },
  { col: "criteria-3", items: ["3.1.1", "3.2.1", "3.2.2", "3.3.1", "3.3.2", "3.4.1", "3.4.2", "3.4.3", "3.5.1"] },
  { col: "criteria-4", items: ["4.1.1", "4.1.2.1", "4.2.1", "4.3.1", "4.3.2.1", "4.4.1.1"] },
  { col: "criteria-5", items: ["5.1.1", "5.1.2", "5.1.3", "5.1.4", "5.2.1", "5.2.1.2", "5.2.2.1", "5.2.2.2", "5.3.1.1", "5.3.2", "5.4.1"] },
  { col: "criteria-6", items: ["6.1.1", "6.2.1", "6.3.1", "6.3.2", "6.3.3", "6.4.1", "6.5.1", "6.5.2"] },
  { col: "criteria-7", items: ["7.1.1", "7.1.2", "7.1.3", "7.1.4", "7.2.1", "7.3.1"] },
];

export const columnHeaders = [
  { key: "extended-profile", label: "Extended Profile" },
  { key: "criteria-1", label: "Criteria 1" },
  { key: "criteria-2", label: "Criteria 2" },
  { key: "criteria-3", label: "Criteria 3" },
  { key: "criteria-4", label: "Criteria 4" },
  { key: "criteria-5", label: "Criteria 5" },
  { key: "criteria-6", label: "Criteria 6" },
  { key: "criteria-7", label: "Criteria 7" },
];

export const inactiveItems = new Set([
  "3.1.1", "4.1.1", "3.2.1", "4.1.2.1", "7.1.2", "1.2.2", "2.4.1.1", "3.2.2",
  "4.2.1", "6.3.1", "2.4.2.1", "5.1.4", "7.1.4", "4.3.2.1", "3.4.1", "4.4.1.1",
  "5.2.1.2", "3.4.2", "5.2.2.1", "6.5.1", "5.2.2.2", "5.3.1.1"

]);



// Engineering Fees Data with PDF mapping
export const engineeringFeesData = [
  {
    year: '2025-26',
    firstYear: '94000',
    directSecondYear: '82000',
    status: 'Approved',
    meetingDate: '09-05-2025',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_09-05-2025.pdf'
  },
  {
    year: '2024-25',
    firstYear: '82000',
    directSecondYear: '82000',
    status: 'No Upward Revision',
    meetingDate: '09-06-2023',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_09-06-2023_1.pdf'
  },
  {
    year: '2023-24',
    firstYear: '82000',
    directSecondYear: '77500',
    status: 'Approved',
    meetingDate: '09-06-2023',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_09-06-2023_2.pdf'
  },
  {
    year: '2022-23',
    firstYear: '75000',
    directSecondYear: '75000',
    status: 'No Upward Revision',
    meetingDate: '06-01-2022',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_06-01-2022_1.pdf'
  },
  {
    year: '2021-22',
    firstYear: '75000',
    directSecondYear: '84000',
    status: 'Approved',
    meetingDate: '06-01-2022',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_06-01-2022_2.pdf'
  },
  {
    year: '2020-21',
    firstYear: '84000',
    directSecondYear: '84000',
    status: 'No Upward Revision',
    meetingDate: '04-01-2019',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_04-01-2019_1.pdf'
  },
  {
    year: '2019-20',
    firstYear: '84000',
    directSecondYear: '77500',
    status: 'Approved',
    meetingDate: '04-01-2019',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_04-01-2019_2.pdf'
  },
  {
    year: '2018-19',
    firstYear: '77500',
    directSecondYear: '77500',
    status: 'No Upward Revision',
    meetingDate: '02-03-2017',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_02-03-2017_1.pdf'
  },
  {
    year: '2017-18',
    firstYear: '77500',
    directSecondYear: '77500',
    status: 'Approved',
    meetingDate: '02-03-2017',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_02-03-2017_2.pdf'
  },
  {
    year: '2016-17',
    firstYear: '77500',
    directSecondYear: '77500',
    status: 'Approved',
    meetingDate: '02-03-2017',
    pdfPath: '/pdf/fees/fees-engineering/Meeting_Minutes_02-03-2017_3.pdf'
  }
];

// MBA Fees Data with PDF mapping
export const mbaFeesData = [
  {
    year: '2025-26',
    firstYear: '82500',
    status: 'Approved',
    meetingDate: '09-05-2025',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_09-05-2025.pdf'
  },
  {
    year: '2024-25',
    firstYear: '71500',
    status: 'No Upward Revision',
    meetingDate: '09-06-2023',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_09-06-2023_1.pdf'
  },
  {
    year: '2023-24',
    firstYear: '71500',
    status: 'Approved',
    meetingDate: '09-06-2023',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_09-06-2023_2.pdf'
  },
  {
    year: '2022-23',
    firstYear: '65000',
    status: 'No Upward Revision',
    meetingDate: '06-01-2022',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_06-01-2022_1.pdf'
  },
  {
    year: '2021-22',
    firstYear: '65000',
    status: 'Approved',
    meetingDate: '06-01-2022',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_06-01-2022_2.pdf'
  },
  {
    year: '2020-21',
    firstYear: '59000',
    status: 'No Upward Revision',
    meetingDate: '04-01-2019',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_04-01-2019_1.pdf'
  },
  {
    year: '2019-20',
    firstYear: '59000',
    status: 'Approved',
    meetingDate: '04-01-2019',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_04-01-2019_2.pdf'
  },
  {
    year: '2018-19',
    firstYear: '77500',
    status: 'No Upward Revision',
    meetingDate: '02-03-2017',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_02-03-2017_1.pdf'
  },
  {
    year: '2017-18',
    firstYear: '65500',
    status: 'Approved',
    meetingDate: '02-03-2017',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_02-03-2017_2.pdf'
  },
  {
    year: '2016-17',
    firstYear: '77500',
    status: 'Approved',
    meetingDate: '02-03-2017',
    pdfPath: '/pdf/fees/fees-mba/Meeting_Minutes_02-03-2017_3.pdf'
  }
];