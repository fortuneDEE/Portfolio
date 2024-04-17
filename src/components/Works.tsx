import  { useState } from "react";
import phasecurve from "/phasecurve.png";
import phasecurve1 from '/phasecurve1.png'
// import phasecurve2 from '/phasecurve2.png'
// import phasecurve3 from "/phasecurve3.png";
import redfox from "/redfox.png";
import redfox1 from '/redfox1.png'
// import redfox2 from '/redfox2.png'
// import redfox3 from "/redfox3.png";
import rocason from "/rocason.png";
// import rocason1 from '/rocason1.png'
// import rocason2 from "/rocason2.png";


const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategorySelect = (category:any) => {
      setSelectedCategory(category);
    };

    const renderDesigns = () => {
    // Replace this with your actual designs data
    const designs = [
      { name: "Phasecurve Technologies website", images: [phasecurve, phasecurve1], category: "All" },
      { name: "Redfox website", images: [redfox, redfox1], category: "Websites" },
      { name: "Rocason website", images: [rocason], category: "Websites" },
    //   {
    //     name: "Laygoswatercrafts website",
    //     images: [ Fortune],
    //     category: "Apps",
    //   },
      // Add more designs as needed
    ];

    const filteredDesigns = selectedCategory === 'All' ? designs : designs.filter(design => design.category === selectedCategory);

    return filteredDesigns.map((design, index) => (
      <div key={index} className="flex flex-col items-center  justify-center">
        <div className="flex mb-4 justify-center gap-4">
          {design.images.map((image, i) => (
            <div
              key={i}
              className="w-1/2 h-1/2 mb-4 rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-full"
                src={image}
                alt={`${design.name} ${i + 1}`}
              />
            </div>
          ))}
        </div>
        {/* <p>Category: {design.category}</p> */}
        {/* Render design details */}
      </div>
    ));
}
  return (
    <section className="max-w-[1990px] py-20">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">My Quality Works</h1>
          <p className="mt-4 text-gray-600">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you
          </p>
        </div>
        <div>
          <div className="flex mb-7 justify-center">
            <ul className="flex items-center bg-gray-300 py-2 px-5 rounded-xl space-x-2">
              <a
                className={`cursor-pointer p-2 rounded-xl ${
                  selectedCategory === "All" ? "bg-purple-500 text-white" : ""
                }`}
              >
                <li onClick={() => handleCategorySelect("All")}>All</li>
              </a>
              <a
                className={`cursor-pointer p-2 rounded-xl ${
                  selectedCategory === "Websites"
                    ? "bg-purple-500 text-white"
                    : ""
                }`}
              >
                <li onClick={() => handleCategorySelect("Websites")}>
                  Websites
                </li>
              </a>
              <a
                className={`cursor-pointer p-2 rounded-xl ${
                  selectedCategory === "Apps" ? "bg-purple-500 text-white" : ""
                }`}
              >
                <li onClick={() => handleCategorySelect("Apps")}>Apps</li>
              </a>
            </ul>
          </div>
          <div className="designs-container">{renderDesigns()}</div>
        </div>
      </div>
    </section>
  );
};

export default Works;
