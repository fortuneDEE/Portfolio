import  { useState } from "react";
import phasecurve from "/phasecurve.png";
import phasecurve1 from '/phasecurve1.png'
import redfox from "/redfox.png";
import { MdArrowOutward } from "react-icons/md";


const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const renderDesigns = () => {
    const designs = [
      {
        name: "Phasecurve Technologies website",
        description: "A technology website showcasing services and products.",
        link: "https://phasecurve.com",
        images: [phasecurve, phasecurve1],
        category: "All",
      },
      {
        name: "Redfox website",
        description: "A website for Redfox, a creative agency.",
        link: "https://redfox.com",
        images: [redfox],
        category: "Websites",
      },
      // {
      //   name: "Rocason website",
      //   description: "An app website for Rocason.",
      //   link: "https://rocason.com",
      //   images: [rocason],
      //   category: "Apps",
      // },
    ];

    const filteredDesigns =
      selectedCategory === "All"
        ? designs
        : designs.filter((design) => design.category === selectedCategory);

    return filteredDesigns.map((design, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center mb-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7">
          {design.images.map((image, i) => (
            <div key={i} className="relative group">
              <img
                className="rounded-xl border-2 w-[500px] h-[450px] mb-4 md:w-[350px] md:h-[300px] md:mb-7"
                src={image}
                alt={`${design.name} ${i + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-end p-4">
                <h2 className="text-white text-lg font-bold">{design.name}</h2>
                <p className="text-white mb-2">{design.description}</p>
                <a
                  href={design.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center"
                >
                  <span className="mr-2">Visit</span>
                  <MdArrowOutward size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <section className="w-full h-full max-w-[1440px] mx-auto font-sans px-5 py-6 md:py-12 xs:px-10 sm:px-16 md:px-20 lg:px-28">
      <div className="container flex flex-col justify-evenly">
        <div className="text-center mb-10">
          <h1 className="text-3xl mt-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500">
            My Recent Works
          </h1>
          <p className="mt-5 max-w-[500px] md:max-w-[820px] text-gray-800 mx-auto">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you
          </p>
        </div>
        <div>
          <div className="flex mb-9 justify-center">
            <ul className="flex items-center bg-gray-100 px-3 rounded-xl space-x-2">
              <a
                className={`cursor-pointer p-2 rounded-xl text-blue-500 ${
                  selectedCategory === "All" ? "bg-blue-500 text-white" : ""
                }`}
              >
                <li onClick={() => handleCategorySelect("All")}>All</li>
              </a>
              <a
                className={`cursor-pointer p-2 rounded-xl text-blue-500 ${
                  selectedCategory === "Websites"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
              >
                <li onClick={() => handleCategorySelect("Websites")}>
                  Websites
                </li>
              </a>
              <a
                className={`cursor-pointer p-2 rounded-xl text-blue-500 ${
                  selectedCategory === "Apps" ? "bg-blue-500 text-white" : ""
                }`}
              >
                <li onClick={() => handleCategorySelect("Apps")}>Apps</li>
              </a>
            </ul>
          </div>
          <div>{renderDesigns()}</div>
        </div>
      </div>
    </section>
  );
};

export default Works;


