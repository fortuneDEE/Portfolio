import  { useState } from "react";
import phasecurve from "/phasecurve.png";
import phasecurve1 from '/phasecurve1.png'
// import phasecurve2 from '/phasecurve2.png'
// import phasecurve3 from "/phasecurve3.png";
import redfox from "/redfox.png";
// import redfox1 from '/redfox1.png'
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
      { name: "Redfox website", images: [redfox], category: "Websites" },
      { name: "Rocason website", images: [rocason], category: "Apps" },
    //   {
    //     name: "Laygoswatercrafts website",
    //     images: [ Fortune],
    //     category: "Apps",
    //   },
      // Add more designs as needed
    ];

    const filteredDesigns = selectedCategory === 'All' ? designs : designs.filter(design => design.category === selectedCategory);

    return filteredDesigns.map((design, index) => (
      <div key={index} className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center  justify-center gap-4 md:gap-7">
          {design.images.map((image, i) => (
            <div key={i}>
              <img
                className="rounded-xl border-2 w-[500px] h-[350px] mb-4 md:w-[350px] md:h-[250px] md:mb-7"
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
    <section className="w-full h-full mx-auto max-w-[1440px] font-sans p-8 sm:px-12 lg:px-24">
      <div className="container flex flex-col justify-evenly">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500">
            My Quality Works
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
          <div className="">{renderDesigns()}</div>
        </div>
      </div>
    </section>
  );
};

export default Works;
