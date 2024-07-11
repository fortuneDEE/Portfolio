import { IoIosSchool } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="w-full h-full max-w-[1440px] bg-blue-50 font-sans py-12 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row gap-6 sm:px-16 md:px-0 mx-auto">
        {/* Experience Section */}
        <div className="mb-8 w-full">
          <h1 className="text-3xl lg:text-4xl font-bold flex items-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900 mb-12 lg:mb-8">
            <FaBriefcase size={35} className="mr-3 text-blue-500" />
            My Experience
          </h1>
          <div>
            <div className="flex p-5 flex-col bg-white w-full rounded-3xl hover:bg-blue-800 hover:text-white mb-5 shadow-lg transition duration-300">
              <h3 className="text-blue-500 mb-1 font-sans font-bold text-lg group-hover:text-white">
                2022 - Present
              </h3>
              <h2 className="uppercase font-bold">Frontend Developer</h2>
              <p className="text-sm">Phasecurve Technologies Ltd</p>
            </div>
            <div className="flex p-5 flex-col bg-white rounded-3xl hover:bg-blue-800 hover:text-white mb-5 shadow-lg transition duration-300">
              <h3 className="text-blue-500 mb-1 font-sans font-bold text-lg group-hover:text-white">
                2021 - 2022
              </h3>
              <h2 className="uppercase font-bold">UI/UX Designer</h2>
              <p className="text-sm">Design Studio</p>
            </div>
            <div className="flex p-5 flex-col bg-white rounded-3xl hover:bg-blue-800 hover:text-white mb-5 shadow-lg transition duration-300">
              <h3 className="text-blue-500 mb-1 font-sans font-bold text-lg group-hover:text-white">
                2019 - 2021
              </h3>
              <h2 className="uppercase font-bold">Junior Developer</h2>
              <p className="text-sm">Tech Corp</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="w-full">
          <h1 className="text-3xl lg:text-4xl font-bold flex items-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900 my-12 sm:mt-0 lg:mb-8">
            <IoIosSchool size={35} className="mr-3 text-blue-500" />
            My Education
          </h1>
          <div>
            <div className="flex p-5 flex-col bg-white rounded-3xl hover:bg-blue-800 hover:text-white mb-5 shadow-lg transition duration-300">
              <h3 className="text-blue-500 mb-1 font-sans font-bold text-lg group-hover:text-white">
                2018 - 2022
              </h3>
              <h2 className="uppercase font-bold">B.Sc. in Computer Science</h2>
              <p className="text-sm">University of Technology</p>
            </div>
            <div className="flex p-5 flex-col bg-white rounded-3xl hover:bg-blue-800 hover:text-white mb-5 shadow-lg transition duration-300">
              <h3 className="text-blue-500 mb-1 font-sans font-bold text-lg group-hover:text-white">
                2016 - 2018
              </h3>
              <h2 className="uppercase font-bold">
                Diploma in Web Development
              </h2>
              <p className="text-sm">Tech Institute</p>
            </div>
            <div className="flex p-5 flex-col bg-white rounded-3xl hover:bg-blue-800 hover:text-white mb-5 shadow-lg transition duration-300">
              <h3 className="text-blue-500 mb-1 font-sans font-bold text-lg group-hover:text-white">
                2014 - 2016
              </h3>
              <h2 className="uppercase font-bold">High School</h2>
              <p className="text-sm">City High School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
