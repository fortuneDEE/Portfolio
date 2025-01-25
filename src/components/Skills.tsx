import { FaReact, FaJs, FaWordpress, FaCss3Alt, FaCloud, FaGitAlt } from "react-icons/fa";

  const skills = [
    { name: "React", icon: FaReact, percentage: "85%" },
    { name: "JavaScript", icon: FaJs, percentage: "80%" },
    { name: "WordPress (PHP)", icon: FaWordpress, percentage: "85%" },
    { name: "TailwindCSS", icon: FaCss3Alt, percentage: "85%" },
    { name: "Microsoft Azure", icon: FaCloud, percentage: "55%" },
    { name: "Next", icon: FaGitAlt, percentage: "75%" },
  ];
const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full h-full max-w-[1440px] font-sans py-12 px-6 md:px-12 lg:px-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900">
            My Skills
          </h1>
          <p className="mt-5 max-w-[500px] md:max-w-[820px] text-gray-800 mx-auto">
            Here's a list of a few of my top skills.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 max-w-[500px] md:max-w-[820px] mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="rounded-2xl p-6 w-[150px] h-full flex flex-col items-center bg-blue-100 hover:bg-gradient-to-r from-blue-500 to-gray-900 hover:text-white transition duration-300 ease-in-out">
                <skill.icon size={45} />
                <h3 className="mt-4 font-bold">{skill.percentage}</h3>
              </div>
              <p className="text-blue-500 mt-2 mb-6">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
