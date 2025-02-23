import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";

const educationDetails = [
  {
    degree: "BTECH",
    college: "Aditya Engineering College",
    year: "2022 - 2026",
    icon: <FaGraduationCap className="text-white text-3xl md:text-4xl" />,
  },
  {
    degree: "INTERMEDIATE",
    college: "VDA Junior College",
    year: "2020 - 2022",
    icon: <MdSchool className="text-white text-3xl md:text-4xl" />,
  },
  {
    degree: "SSC",
    college: "S R Z Z P High School",
    year: "PASSOUT: 2020",
    icon: <HiAcademicCap className="text-white text-3xl md:text-4xl" />,
  },
];

const EducationTimeline = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#00FFFF] mb-8">My Education Journey 🎓</h1>

      {/* Responsive Layout: Column on Mobile (Centered), Row on Desktop (Horizontal Scroll) */}
      <div className="flex flex-col items-center md:flex-row md:justify-center md:overflow-x-auto overflow-y-hidden w-full gap-8 scrollbar-hide">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-600 hover:scale-105 transition-transform duration-300 w-[300px] flex flex-col items-center text-center"
          >
            {/* Hide Icon on Mobile, Show on Desktop */}
            <div className="hidden md:block">{edu.icon}</div>

            <h3 className="text-lg font-semibold text-white mt-2">{edu.degree}</h3>
            <p className="text-md text-gray-400">{edu.college}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
