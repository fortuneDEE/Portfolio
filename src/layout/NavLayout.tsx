import { useState } from "react";

const NavLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full px-6 py-6 sm:px-12 lg:px-24 text-white relative">
      <div className={`flex items-center space-x-4`}>
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900">
          ChikaDev
        </div>
        <div className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900 hidden md:block">
          ellfortune3@gmail.com
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <ul className="flex space-x-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900">
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
        <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-3 px-9 rounded-full">
          Hire Me!
        </button>
      </div>
      <div className="lg:hidden flex items-center space-x-4 text-blue-500">
        {!isOpen && (
          <>
            <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-3 px-9 rounded-full">
              Hire Me!
            </button>
            <button
              onClick={toggleMenu}
              className="text-blue-500 focus:outline-none"
            >
              <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                />
              </svg>
            </button>
          </>
        )}
        {isOpen && (
          <button
            onClick={toggleMenu}
            className="text-blue-500 focus:outline-none"
          >
            <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7 18.3a1 1 0 0 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 1 1 1.4 1.4L14.42 12l5.3 5.3z"
              />
            </svg>
          </button>
        )}
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
        <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-3 px-9 rounded-full">
          Hire Me!
        </button>
      </div>
    </nav>
  );
};

export default NavLayout;
