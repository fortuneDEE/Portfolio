import {
  
  AiFillGithub,
} from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import Fortune from '/favicon.png'

const Landing = () => {
  return (
    <section className="w-full h-full max-w-[1440px] font-sans px-5 py-6 md:py-12 xs:px-10 sm:px-16 md:px-20 lg:px-28">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex-1 md:mr-8">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900 mb-4">
            <span className="text-gray-700 text-xl block mb-2">
              I am Fortune
            </span>
            Web Developer + <br /> Scrum Master
          </h1>
          <p className="text-xl md:text-lg text-gray-700 mb-6 md:mb-8">
            I break down complex problems to create user-centric solutions that
            connect billions of people.
          </p>
          <div className="hidden md:block">
            <button className="border-blue-500 border-2 flex items-center text-blue-500 px-6 py-3 rounded-full font-medium text-base hover:bg-blue-500 hover:text-white transform hover:scale-110 transition duration-300 ease-in-out mb-6">
              Download CV
              <FiDownload className="mx-2" />
            </button>
            <div className="flex items-center space-x-4 ">
              <a
                href="https://twitter.com/fortune_ellah"
                target="_blank"
                rel="noreferrer"
                className="border-2 p-2 rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition duration-300 ease-in-out"
              >
                <TiSocialTwitter size={15} />
              </a>
              <a
                href="https://github.com/fortuneDEE"
                target="_blank"
                rel="noreferrer"
                className="border-2 p-2 rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <AiFillGithub size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/fortune-ellah/"
                target="_blank"
                rel="noreferrer"
                className="border-2 p-2 rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <FaLinkedinIn size={15} />
              </a>
              <a
                href="https://www.behance.net/fortune-ellah"
                target="_blank"
                rel="noreferrer"
                className="border-2 p-2 rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <FaBehance size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end flex-1 mb-6 md:mb-0">
          <img
            src={Fortune}
            alt="Fortune Ellah"
            className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-2xl bg-gray-300 shadow-md shadow-blue-500 hover:border-blue-500 border-2"
          />
        </div>
        <div className="flex flex-col md:hidden items-center">
          <button className="border-blue-500 border-2 flex items-center text-blue-500 px-6 py-3 rounded-full font-bold text-base hover:bg-blue-500 hover:text-white transform hover:scale-110 transition duration-300 ease-in-out mb-4">
            Download CV
            <FiDownload className="mx-2" />
          </button>
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/fortune_ellah"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-full border-blue-500 text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <TiSocialTwitter size={18} />
            </a>
            <a
              href="https://github.com/fortuneDEE"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-full border-blue-500 text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <AiFillGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/fortune-ellah/"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-full border-blue-500 text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.behance.net/fortune-ellah"
              target="_blank"
              rel="noreferrer"
              className="border-2 p-2 rounded-full border-blue-500 text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <FaBehance size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-14 items-center justify-center">
        <div className="text-blue-500 flex  flex-col items-center">
          <h2 className="text-5xl font-bold">14</h2>
          <p className="text-base text-center">
            Years of <br />
            experience
          </p>
        </div>
        <div className="text-blue-500 sm:flex-row flex flex-col items-center">
          <h2 className="text-5xl font-bold">50+</h2>
          <p className="text-base text-center">
            Projects <br />
            completed
          </p>
        </div>
        <div className="text-blue-500 sm:flex-row flex flex-col items-center">
          <h2 className="text-5xl font-bold">1.5K</h2>
          <p className="text-base text-center">
            Satisfied <br />
            Clients
          </p>
        </div>
        <div className="text-blue-500 sm:flex-row flex flex-col items-center">
          <h2 className="text-5xl font-bold">14</h2>
          <p className="text-base text-center">
            Years of <br />
            experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
