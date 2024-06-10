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
    <section className="w-full h-full max-w-[1440px] font-sans py-6 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900 mb-4 lg:mb-8">
            <span className="text-gray-700 text-xl">I am Fortune</span>
            <br />
            Web Developer + <br /> Scrum Master
          </h1>
          <div className="flex flex-col-reverse md:flex-col">
            <div>
              <p className="text-xl lg:max-w-[850px] lg:text-xl text-gray-700 mb-8 lg:mb-8">
                I break down complex problems to create user-centric solutions
                that connect billions of people
              </p>
              <div className="flex items-center">
                <button className="border-blue-500 border-2 flex items-center text-blue-500 px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transform hover:scale-110 transition duration-300 ease-in-out">
                  Download CV
                  <FiDownload className="mx-2" />
                </button>
                <div className="flex items-center justify-between space-x-4 ml-5">
                  <div className="border-2 p-2 rounded-full border-blue-500 ">
                    {" "}
                    <a
                      href="https://twitter.com/fortune_ellah"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500  transform hover:scale-110 transition-transform duration-300 ease-in-out "
                    >
                      <TiSocialTwitter size={18} />
                    </a>
                  </div>
                  <div className="border-2 p-2 rounded-full border-blue-500 ">
                    <a
                      href="https://github.com/fortuneDEE"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                      <AiFillGithub size={20} />
                    </a>
                  </div>
                  <div className="border-2 p-2 rounded-full border-blue-500 ">
                    <a
                      href="https://www.linkedin.com/in/fortune-ellah/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                      <FaLinkedinIn size={18} />
                    </a>
                  </div>
                  <div className="border-2 p-2 rounded-full border-blue-500 ">
                    <a
                      href="https://www.linkedin.com/in/fortune-ellah/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
                    >
                      <FaBehance size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center my-8 lg:mt-0 ">
              <img
                src={Fortune}
                alt="fortune ellah"
                className="w-[350px] h-[350px] rounded-2xl bg-gray-300 shadow-md shadow-blue-500 hover:border-blue-500 border-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 my-14 gap-8 text-center max-w-[] mx-auto">
        <div className=" p-6 text-blue-500 rounded-lg flex flex-col xs:flex-row items-center space-x-4">
          <h2 className="text-5xl text-blue-500 font-bold leading-10">14</h2>
          <p className="text-base text-left leading-6">
            Years of <br />
            experience
          </p>
        </div>
        <div className=" p-6 text-blue-500 rounded-lg flex flex-col xs:flex-row items-center space-x-4">
          <h2 className="text-5xl text-blue-500 font-bold">50+</h2>
          <p className="text-base text-left leading-6">
            Projects <br />
            completed
          </p>
        </div>
        <div className=" p-6 text-blue-500 rounded-lg flex flex-col xs:flex-row items-center space-x-4">
          <h2 className="text-5xl text-blue-500 font-bold">1.5K</h2>
          <p className="text-base text-left">
            Satisfied <br />
            Clients
          </p>
        </div>
        <div className=" p-6 text-blue-500 rounded-lg flex flex-col xs:flex-row items-center space-x-4">
          <h2 className="text-5xl font-bold">14</h2>
          <p className="text-base font-light text-left">
            Years of <br />
            experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
