import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Fortune from '/favicon.png'

const Landing = () => {
  return (
    <section className="w-full h-full max-w-screeen-[1990px] font-sans mx-auto py-6 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-center h-full">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4 lg:mb-8">
            <span className="text-blue-500">I am Fortune</span>
            <br />
            Web Developer + <br />
            Project Manager
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-4 lg:mb-8">
            I break down complex problems to create user-centric solutions that
            connect billions of people
          </p>
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition duration-300 ease-in-out">
              Download CV
            </button>
            <div className="flex mt-4 ml-5 lg:mt-8">
              <a
                href="https://twitter.com/fortune_ellah"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 size-5 hover:text-blue-600 mr-4"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://github.com/fortuneDEE"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-600 mr-4"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/fortune-ellah/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={Fortune}
            alt="fortune ellah"
            className="w-full rounded-lg bg-blue-300 shadow-lg"
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className=" p-6 rounded-lg flex items-center space-x-2">
            <h2 className="text-4xl font-bold">14</h2>
            <p className="text-lg">
              Years of <br />
              experience
            </p>
          </div>
          <div className=" p-6 rounded-lg flex items-center space-x-2">
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="text-lg justify-start">
              Projects <br />
              completed
            </p>
          </div>
          <div className=" p-6 rounded-lg flex items-center space-x-2">
            <h2 className="text-4xl font-bold">1.5K</h2>
            <p className="text-lg">
              Satisfied <br />
              Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
