
const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 max-w-[1990px] text-white py-4 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold font-sans mr-6">ChikaDev</div>
        <div className="text-sm">ellfortune3@gmail.com</div>
      </div>
      <div className="hidden md:block">
        <ul className="flex space-x-4">
          <a href={""}>
            <li>Services</li>
          </a>
          <a href={""}>
            <li>Works</li>
          </a>
          <a href={""}>
            <li>Resume</li>
          </a>
          <a href={""}>
            <li>Skills</li>
          </a>
          <a href={""}>
            <li>Testimonials</li>
          </a>
          <a href={""}>
            <li>Contact</li>
          </a>
        </ul>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Hire Me!
        </button>
      </div>
    </nav>
  );
}

export default Header
