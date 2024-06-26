
const Footer = () => {
  return (
    <footer className="flex w-full h-[30vh] flex-col items-center max-w-[1440px] justify-center bg-blue-950 mx-auto pt-10 px-6 sm:px-12 lg:px-24">
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-blue-500 mb-8">
        ChikaDev
      </div>
      <div className="text-white font-bold">
        <ul className="flex space-x-8 mb-5">
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
        <p className="text-blue-500 text-sm">
          &copy; 2024 All rights reserved by <b>Ellah Fortune</b>
        </p>
      </div>
    </footer>
  );
}

export default Footer
