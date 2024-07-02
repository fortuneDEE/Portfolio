import { useState } from "react";

const NavLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full max-w-[1440px] px-5 py-6 xs:px-10 sm:px-16 md:px-20 lg:px-28 md:py-10 mx-auto text-white relative">
      <div className="flex items-center space-x-2">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900">
          ChikaDev
        </div>
        <div className="text-sm text-gray-600 hidden">
          ellfortune3@gmail.com
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-6">
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-6 rounded-full whitespace-nowrap">
          Hire Me!
        </button>
      </div>
      <div className="lg:hidden flex items-center space-x-4 text-blue-500">
        <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-6 rounded-full whitespace-nowrap">
          Hire Me!
        </button>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="h-8 w-8" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden flex flex-col items-center space-y-4 absolute top-20 left-0 w-full bg-white text-black p-6`}
      >
        <ul className="flex flex-col space-y-4 w-full">
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-6 rounded-full whitespace-nowrap">
          Hire Me!
        </button>
      </div>
    </nav>
  );
};

export default NavLayout;
