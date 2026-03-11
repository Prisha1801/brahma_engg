import HeroSection from '../common/components/HeroSection';
import { feAdmissionHero } from '../common/data/heroData';
import { feAdmissionData } from '../../data/data';

const FEAdmission = () => {
  return (
    <div>
      <HeroSection {...feAdmissionHero} />

      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-center text-blue-600 font-semibold text-xl mb-6">
            FE Admission
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="py-3 border">Sr No</th>
                  <th className="py-3 border">Title</th>
                </tr>
              </thead>
              <tbody>
                {feAdmissionData.map((item, index) => (
                  <tr key={index} className="border hover:bg-gray-100">
                    <td className="py-3 border">{index + 1}</td>
                    <td className="py-3 border text-blue-600 hover:underline">
                      <a href={item.file} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FEAdmission;