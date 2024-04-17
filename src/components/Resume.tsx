import { IoIosSchool } from "react-icons/io";

const Resume = () => {
  return (
    <section className="w-full h-full max-w-screeen-[1990px] font-sans mx-auto py-6 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-center h-full">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold flex items-center leading-tight text-blue-500 mb-4 lg:mb-8">
            <IoIosSchool color="inherit" size={65} className="mr-2" />
            My Experience
          </h1>
          <div className="px-5">
            <div className="flex p-5 flex-col text-white bg-blue-400 rounded-lg hover:bg-blue-800 mb-5 shadow-lg">
              <h3>2022 - present</h3>
              <h2>Frontend Developer</h2>
              <p>Phasecurve technologies ltd</p>
            </div>
            <div className="flex p-5 flex-col text-white bg-blue-400 rounded-lg hover:bg-blue-800 mb-5 shadow-lg">
              <h3>2022 - present</h3>
              <h2>Frontend Developer</h2>
              <p>Phasecurve technologies ltd</p>
            </div>
            <div className="flex p-5 flex-col text-white bg-blue-400 rounded-lg hover:bg-blue-800 mb-5 shadow-lg">
              <h3>2022 - present</h3>
              <h2>Frontend Developer</h2>
              <p>Phasecurve technologies ltd</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl font-bold flex items-center leading-tight text-blue-500 mb-4 lg:mb-8">
            <IoIosSchool color="inherit" size={65} className="mr-2" />
            My Education
          </h1>
          <div className="px-5 ">
            <div className="flex p-5 flex-col text-white bg-blue-400 rounded-lg hover:bg-blue-800 mb-5 shadow-lg">
              <h3>2022 - present</h3>
              <h2>Frontend Developer</h2>
              <p>Phasecurve technologies ltd</p>
            </div>
            <div className="flex p-5 flex-col text-white bg-blue-400 rounded-lg hover:bg-blue-800 mb-5 shadow-lg">
              <h3>2022 - present</h3>
              <h2>Frontend Developer</h2>
              <p>Phasecurve technologies ltd</p>
            </div>
            <div className="flex p-5 flex-col text-white bg-blue-400 rounded-lg hover:bg-blue-800 mb-5 shadow-lg">
              <h3>2022 - present</h3>
              <h2>Frontend Developer</h2>
              <p>Phasecurve technologies ltd</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
