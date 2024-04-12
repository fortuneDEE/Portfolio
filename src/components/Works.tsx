import  { useState } from "react";
import Fortune from "/favicon.png";
import Fortune1 from "/favicon.png";
import Fortune2 from "/favicon.png";

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategorySelect = (category:any) => {
      setSelectedCategory(category);
    };

    const renderDesigns = () => {
    // Replace this with your actual designs data
    const designs = [
      { name: "Design 1", category: "Websites", image: Fortune },
      { name: "Design 2", category: "Apps", image: Fortune1 },
      { name: "Design 3", category: "Websites", image: Fortune2 },
      // Add more designs as needed
    ];

    const filteredDesigns = selectedCategory === 'All' ? designs : designs.filter(design => design.category === selectedCategory);

    return filteredDesigns.map((design, index) => (
      <div key={index} className="flex items-center">
        <img src={design.image} alt={design.name} className="flex items-center" />
        <h3>{design.name}</h3>
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
          <div className="flex justify-center">
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
