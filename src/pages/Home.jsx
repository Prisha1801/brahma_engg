import Banner from '../components/Home/Banner';
import TopRecruiters from './TopRecruiters';
import AcademicDepartments from './AcademicDepartments';
import Welcome from './Welcome';
import CoursesOffered from './CoursesOffered';
import BrahmaValleyCampus from './BrahmaValleyCampus';

// Pages

function Home() {
    return (
        <>
            <Banner />
            <AcademicDepartments />
            <Welcome />
            <CoursesOffered />
            <BrahmaValleyCampus />
            <TopRecruiters />

        </>
    );
}

export default Home;