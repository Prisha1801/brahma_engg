import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Header from './components/Header/Header';

import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import BoardMembers from './components/About-Us/BoardMembers';
import PresidentDesk from './components/About-Us/PresidentDesk';
import PrincipalDesk from './components/About-Us/PrincipalDesk';
import VicePresidentDesk from './components/About-Us/VicePrecidentDesk';
import MissionVision from './components/About-Us/MissionVision';
import SecretaryDesk from './components/About-Us/SecretaryDesk';
import LocalManagingCommittee from './components/About-Us/LocalManagingCommittee';
import CollegeCommittees from './components/About-Us/CollegeCommittees';
import ApprovalsAffiliations from './components/About-Us/ApprovalsAffiliations';
import Contact from './pages/Contact';
import PlacementCell from './pages/PlacementCell';
import Gallery from './pages/Gallery';
import Facilities from './components/Facilities';
import MechanicalEngg from './components/Departments/MechanicalEngg';
import ComputerEngg from './components/Departments/ComputerEngg';
import CivilEngg from './components/Departments/CivilEngg';
import ElectricalEngg from './components/Departments/ElectricalEngg';
import FirstYearEngg from './components/Departments/FirstYearEngg';
import MBA from './components/Departments/MBA';
import Event from './components/Event';
import News from './components/News';
import NoticesPage from './pages/StudentCorner/NoticesPage';
import ExaminationPage from './pages/StudentCorner/ExaminationPage';
import RulesRegulations from './pages/StudentCorner/RulesRegulations';
import ContactInfoTable from './pages/StudentCorner/ContactInfoTable';
import StudentCC from './pages/StudentCorner/StudentCC';
import Alumni from './pages/Alumni/Alumni';
import AlumniRegistrationForm from './pages/Alumni/AlumniRegistrationForm';
import AluminiMeetDetails from './pages/Alumni/AluminiMeetDetails';
import AlumniReports from './pages/Alumni/AlumniReports';
import CourseOffered from './components/Addmission/CourseOffered';
import Eligibility from './components/Addmission/Eligibility';
import FeesStructure from './components/Addmission/FeesStructure';
import AddmissionForm from './components/Addmission/AddmissionForm';
import FEAdmission from './components/Institute-level-admission/FEAdmission';
import DSEAdmission from './components/Institute-level-admission/DSEAdmission';
import MBAAdmission from './components/Institute-level-admission/MBAAdmission';
import IQAC from './components/naac/IQAC';
import IIQA from './components/naac/IIQA';
import BestPractice from './components/naac/BestPractice';
import Feedback from './components/naac/Feedback';
import Cycle1 from './components/naac/Cycle1';
import NaacDoc from './components/naac/NaacDoc';
import AQAR1 from './components/naac/AQAR1';
import AQAR2 from './components/naac/AQAR2';
import AQARDoc from './components/naac/AQARDoc';
import NIRF from './components/naac/NIRF';
import FeesRegulatoryAuthority from './pages/FeesRegulatoryAuthority';

// ─── Check if protection is enabled (works in both dev & prod) ───────────────
const IS_PROTECTED = import.meta.env.VITE_DISABLE_DEVTOOLS === "true";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm sm:max-w-md"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <FiX size={16} />
            </button>
            <img
              src="/popup-image.png"
              alt="Announcement"
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [showBlockNotice, setShowBlockNotice] = useState(false);

  useEffect(() => {
    // ── Only activate if VITE_DISABLE_DEVTOOLS=true ──────────────────────────
    if (!IS_PROTECTED) return;

    const showNotice = () => {
      setShowBlockNotice(true);
      setTimeout(() => setShowBlockNotice(false), 3000);
    };

    const blockAction = (e) => {
      e.preventDefault();
      e.stopPropagation();
      showNotice();
      return false;
    };

    const handleKeyDown = (e) => {
      const blocked =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C", "K"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && ["U", "S", "P"].includes(e.key.toUpperCase())) ||
        (e.metaKey && e.altKey && ["I", "J", "C"].includes(e.key.toUpperCase())); // Mac DevTools

      if (blocked) {
        e.preventDefault();
        e.stopPropagation();
        showNotice();
        return false;
      }
    };

    // Disable right-click
    document.addEventListener("contextmenu", blockAction);

    // Disable keyboard shortcuts
    document.addEventListener("keydown", handleKeyDown);

    // Disable text selection & drag
    document.addEventListener("selectstart", blockAction);
    document.addEventListener("dragstart", blockAction);

    // Disable copy / cut / paste
    document.addEventListener("copy", blockAction);
    document.addEventListener("cut", blockAction);

    // Disable user select via CSS
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    document.body.style.MozUserSelect = "none";
    document.body.style.msUserSelect = "none";

    // ── DevTools size detection ───────────────────────────────────────────────
    const devToolsInterval = setInterval(() => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      if (widthThreshold || heightThreshold) {
        document.body.innerHTML =
          "<div style='background:#111;color:#fff;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif;gap:12px'>" +
          "<span style='font-size:48px'>🚫</span>" +
          "<span style='font-size:22px;font-weight:bold'>Developer Tools Detected</span>" +
          "<span style='font-size:14px;color:#aaa'>Please close DevTools to continue.</span>" +
          "</div>";
      }
    }, 1000);

    return () => {
      document.removeEventListener("contextmenu", blockAction);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", blockAction);
      document.removeEventListener("dragstart", blockAction);
      document.removeEventListener("copy", blockAction);
      document.removeEventListener("cut", blockAction);
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
      document.body.style.MozUserSelect = "";
      document.body.style.msUserSelect = "";
      clearInterval(devToolsInterval);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board-members" element={<BoardMembers />} />
          <Route path="/president-desk" element={<PresidentDesk />} />
          <Route path="/principal-desk" element={<PrincipalDesk />} />
          <Route path="/vice-president-desk" element={<VicePresidentDesk />} />
          <Route path="/vision-mission" element={<MissionVision />} />
          <Route path="/secretary-desk" element={<SecretaryDesk />} />
          <Route path="/local-managing-committee" element={<LocalManagingCommittee />} />
          <Route path="/college-committee" element={<CollegeCommittees />} />
          <Route path="/approvals-affiliations" element={<ApprovalsAffiliations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/placement-cell" element={<PlacementCell />} />
          <Route path="/facilities" element={<Navigate to="/facilities/library" replace />} />
          <Route path="/facilities/:slug" element={<Facilities />} />
          <Route path="/departments/mechanical-engineering" element={<MechanicalEngg />} />
          <Route path="/departments/computer-engineering" element={<ComputerEngg />} />
          <Route path="/departments/civil-engineering" element={<CivilEngg />} />
          <Route path="/departments/electrical-engineering" element={<ElectricalEngg />} />
          <Route path="/departments/first-year-engineering" element={<FirstYearEngg />} />
          <Route path="/departments/mba" element={<MBA />} />
          <Route path="/events" element={<Event />} />
          <Route path="/news" element={<News />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/examination" element={<ExaminationPage />} />
          <Route path="/rules-regulations" element={<RulesRegulations />} />
          <Route path="/important-contacts" element={<ContactInfoTable />} />
          <Route path="/student-council-committee" element={<StudentCC />} />
          <Route path="/alumni-student-details" element={<Alumni />} />
          <Route path="/registration-form-details" element={<AlumniRegistrationForm />} />
          <Route path="/alumni-meet-details" element={<AluminiMeetDetails />} />
          <Route path="/alumni-in-different-countries" element={<AlumniReports />} />
          <Route path='/addmission/program-details' element={<CourseOffered />} />
          <Route path='/addmission/eligibility' element={<Eligibility />} />
          <Route path='/addmission/fees-structure' element={<FeesStructure />} />
          <Route path='/addmission/admission-form' element={<AddmissionForm />} />
          <Route path='/addmission/fe-admission' element={<FEAdmission />} />
          <Route path='/addmission/dse-admission' element={<DSEAdmission />} />
          <Route path='/addmission/mba-admission' element={<MBAAdmission />} />
          <Route path='/naac/iqac' element={<IQAC />} />
          <Route path='/naac/iiqa' element={<IIQA />} />
          <Route path='/naac/best-practices' element={<BestPractice />} />
          <Route path='/naac/feedback' element={<Feedback />} />
          <Route path='/naac/cycle-1' element={<Cycle1 />} />
          <Route path='/naac/naac-documents' element={<NaacDoc />} />
          <Route path='/naac/naac-documents/:criteria/:itemId' element={<NaacDoc />} />
          <Route path='/naac/aqar-2022-23' element={<AQAR1 />} />
          <Route path='/naac/aqar-2023-24' element={<AQAR2 />} />
          <Route path='/naac/aqar-documents' element={<AQARDoc />} />
          <Route path='/naac/nirf' element={<NIRF />} />
          <Route path='/fees-regulatory-authority' element={<FeesRegulatoryAuthority />} />
        </Routes>
      </main>
      <Footer />
      <Popup />

      {/* Block notice toast */}
      {IS_PROTECTED && showBlockNotice && (
        <div className="fixed bottom-4 right-4 z-[9999] bg-red-600 text-white text-xs sm:text-sm px-4 py-3 rounded-lg shadow-2xl pointer-events-none select-none animate-pulse">
          🚫 Action Blocked — Content is protected
        </div>
      )}
    </div>
  );
}

export default App;