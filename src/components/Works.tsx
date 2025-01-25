import { useState } from "react";
import phasecurve from "/phasecurve.png";
import phasecurve1 from "/phasecurve1.png";
import redfox from "/redfox.png";
import { MdArrowOutward } from "react-icons/md";

interface Design {
  name: string;
  description: string;
  link: string;
  images: string[];
  category: string;
}

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const renderDesigns = () => {
    const designs: Design[] = [
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
    ];

    const filteredDesigns =
      selectedCategory === "All"
        ? designs
        : designs.filter((design) => design.category === selectedCategory);

    return filteredDesigns.map((design, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center mb-8 w-full md:w-1/2 lg:w-1/3 p-4"
      >
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={design.images[0]}
            alt={`${design.name} ${index + 1}`}
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{design.name}</h2>
            <p className="text-gray-700 mb-4">{design.description}</p>
            <a
              href={design.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 flex items-center"
            >
              <span className="mr-2">Visit</span>
              <MdArrowOutward size={20} />
            </a>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="works"
      className="w-full h-full max-w-[1440px] mx-auto font-sans px-5 py-6 md:py-12 xs:px-10 sm:px-16 md:px-20 lg:px-28"
    >
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
              <li
                className={`cursor-pointer p-2 rounded-xl text-blue-500 ${
                  selectedCategory === "All" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleCategorySelect("All")}
              >
                All
              </li>
              <li
                className={`cursor-pointer p-2 rounded-xl text-blue-500 ${
                  selectedCategory === "Websites"
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => handleCategorySelect("Websites")}
              >
                Websites
              </li>
              <li
                className={`cursor-pointer p-2 rounded-xl text-blue-500 ${
                  selectedCategory === "Apps" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleCategorySelect("Apps")}
              >
                Apps
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center">{renderDesigns()}</div>
        </div>
      </div>
    </section>
  );
};

export default Works;
