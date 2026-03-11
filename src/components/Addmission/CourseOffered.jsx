import HeroSection from '../common/components/HeroSection';
import { courseHero } from '../common/data/heroData';
import { coursesData } from '../../data/data';

const CourseOffered = () => {
    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...courseHero} />

            {/* COURSES TABLE */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Courses Offered
                </h2>

                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="w-full border-collapse">
                        {/* Table Head */}
                        <thead className="bg-blue-800 text-white">
                            <tr>
                                <th className="text-left px-6 py-4">Sr. No.</th>
                                <th className="text-left px-6 py-4">Course Name</th>
                                <th className="text-left px-6 py-4">Choice Code</th>
                                <th className="text-left px-6 py-4">Intake</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {coursesData.map((course) => (
                                <tr
                                    key={course.id}
                                    className="border-b hover:bg-gray-100 transition"
                                >
                                    <td className="px-6 py-4">{course.id}.</td>
                                    <td className="px-6 py-4">{course.courseName}</td>
                                    <td className="px-6 py-4">{course.choiceCode}</td>
                                    <td className="px-6 py-4">{course.intake}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default CourseOffered;