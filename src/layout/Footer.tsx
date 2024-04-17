
const Footer = () => {
  return (
    <footer className="flex flex-col font-sans items-center bg-gray-900 max-w-[1990px] w-full h-[200px] text-white p-6 md:px-12 lg:px-24">
      <div className="text-xl font-bold mb-5">ChikaDev</div>
      <div>
        <ul className="flex space-x-4 mb-5">
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
        <p className="text-blue-500">&copy; 2024 All rights reserved by Ellah Fortune</p>
      </div>
    </footer>
  );
}

export default Footer
