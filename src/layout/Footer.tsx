
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex w-full  flex-col items-center max-w-[1440px] justify-center bg-blue-950 mx-auto pt-10 px-6 sm:px-12 lg:px-24">
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-8">
        ChikaDev
      </div>
      <div className="text-white font-bold">
        <ul className="flex space-x-8 mb-5">
          <li>
            <a
              href="#services"
              className="hover:text-blue-400 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a href="#works" className="hover:text-blue-400 transition-colors">
              Works
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-blue-400 transition-colors">
              Resume
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="hover:text-blue-400 transition-colors"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-6 mb-6">
        <a
          href="https://twitter.com/fortune_ellah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/fortune-ellah/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/fortuneDEE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto:ellfortune3@gmail.com"
          className="text-white hover:text-blue-400 transition-colors"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
        <small className="text-white text-xs mt-4">
          &copy; 2024 All rights reserved by <b>Ellah Fortune</b>
        </small>
    </footer>
  );
};

export default Footer;

