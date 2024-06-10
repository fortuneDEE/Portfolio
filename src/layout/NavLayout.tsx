import { useState } from "react";

const NavLayout = () => {
const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex w-full justify-between items-center max-w-[1440px] py-6 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900 font-bold font-sans mr-6 md:text-xxl lg:text-4xl">
          ChikaDev
        </div>
        <div className="text-sm mr-6 hidden lg:block md:text-sx">
          ellfortune3@gmail.com
        </div>
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-gray-900 text-white font-bold py-2 px-6 absolute right-20 md:hidden rounded-full">
        Hire Me!
      </button>
      <div className="md:hidden">
        {isOpen ? (
          <button
            onClick={toggleMenu}
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7 18.3a1 1 0 0 1-1.4 1.4l-6-6a1 1 0 0 1 0-1.4l6-6a1 1 0 1 1 1.4 1.4L14.42 12l5.3 5.3z"
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={toggleMenu}
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
              />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`md:flex flex-col md:flex-row md:items-center md:space-x-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col text-base md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:text-sm">
          <li>
            <a href={""}>Services</a>
          </li>
          <li>
            <a href={""}>Works</a>
          </li>
          <li>
            <a href={""}>Resume</a>
          </li>
          <li>
            <a href={""}>Skills</a>
          </li>
          <li>
            <a href={""}>Testimonials</a>
          </li>
          <li>
            <a href={""}>Contact</a>
          </li>
        </ul>
        <button className="bg-gradient-to-r from-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 hidden md:block rounded-full">
          Hire Me!
        </button>
      </div>
    </nav>
  );
}

export default NavLayout
