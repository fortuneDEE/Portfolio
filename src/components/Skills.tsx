import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">My Skills</h1>
          <p className="mt-4 text-gray-600">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you
          </p>
        </div>
        <div className="flex items-center text-white justify-evenly">
          <div className="flex flex-col  justify-center items-center">
            <div className="rounded-lg p-5 flex flex-col justify-center items-center bg-blue-600 max-w-fit max-h-fit">
              <FaReact />
              <h3>75%</h3>
            </div>
            <p className="text-blue-500">React</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-lg p-5 flex flex-col justify-center items-center bg-blue-600 max-w-fit max-h-fit">
              <FaReact />
              <h3>75%</h3>
            </div>
            <p className="text-blue-500">GSAP</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-lg p-5 flex flex-col justify-center items-center bg-blue-600 max-w-fit max-h-fit">
              <FaReact />
              <h3>75%</h3>
            </div>
            <p className="text-blue-500">Figma</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-lg p-5 flex flex-col justify-center items-center bg-blue-600 max-w-fit max-h-fit">
              <FaReact />
              <h3>75%</h3>
            </div>
            <p className="text-blue-500">TailwindCSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-lg p-5 flex flex-col justify-center items-center bg-blue-600 max-w-fit max-h-fit">
              <FaReact />
              <h3>75%</h3>
            </div>
            <p className="text-blue-500">Microsoft Azure</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-lg p-5 flex flex-col justify-center items-center bg-blue-600 max-w-fit w-70 max-h-fit">
              <FaReact />
              <h3>75%</h3>
            </div>
            <p className="text-blue-500">Git</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
