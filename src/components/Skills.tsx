import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900">
            My Skills
          </h1>
          <p className="mt-4 text-gray-600">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <div className="rounded-2xl p-6 w-[150px] h-full flex flex-col items-center bg-blue-200 ">
              <FaReact size={45} />
              <h3 className="mt-4 font-bold">75%</h3>
            </div>
            <p className="text-blue-500 mt-2 mb-6">React</p>
          </div>
          <div className="flex flex-col  items-center">
            <div className="rounded-2xl p-6 w-[150px] h-full flex flex-col items-center bg-blue-200">
              <FaReact size={45} />
              <h3 className="mt-4 font-bold">75%</h3>
            </div>
            <p className="text-blue-500 mt-2 mb-6">GSAP</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-2xl p-6 w-[150px] h-full flex flex-col items-center bg-blue-200">
              <FaReact size={45} />
              <h3 className="mt-4 font-bold">75%</h3>
            </div>
            <p className="text-blue-500 mt-2 mb-6">Figma</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-2xl p-6 w-[150px] h-full flex flex-col items-center bg-blue-200">
              <FaReact size={45} />
              <h3 className="mt-4 font-bold">75%</h3>
            </div>
            <p className="text-blue-500 mt-2 mb-6">TailwindCSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-2xl p-6 w-[150px] h-full flex flex-col items-center bg-blue-200">
              <FaReact size={45} />
              <h3 className="mt-4 font-bold">75%</h3>
            </div>
            <p className="text-blue-500 mt-2 mb-6">Microsoft Azure</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-2xl p-6 w-[150px] h-full flex flex-col items-center bg-blue-200">
              <FaReact size={45} />
              <h3 className="mt-4 font-bold">75%</h3>
            </div>
            <p className="text-blue-500 mt-2 mb-6">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
