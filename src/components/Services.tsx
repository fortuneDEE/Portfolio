import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";
import { useState } from "react";

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
}

const Services = () => {
  return (
  <section className="bg-blue-50 w-full h-full max-w-[1440px] font-sans py-12 px-6 sm:px-12 lg:px-24">
      <div className="container flex flex-col items-center mx-auto px-6 mb-14">
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500">
            My Quality Services
          </h1>
          <p className="mt-4 text-gray-800 text-[18px] max-w-[650px]">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you
          </p>
        </div>
        
        <ServiceItem 
          number="01" 
          title="Branding Design" 
          description="I break down complex user experience problems thus your wishes in the form of a unique web project that inspires you"
        />
        <ServiceItem 
          number="02" 
          title="Web Development" 
          description="We develop responsive and efficient web applications tailored to your needs."
        />
        <ServiceItem 
          number="03" 
          title="SEO Optimization" 
          description="Our SEO strategies ensure your website ranks high in search results."
        />
      </div>
    </section>
  );
}

function ServiceItem({ number, title, description }: ServiceItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="p-6 cursor-pointer relative text-blue-500 hover:text-white hover:bg-gradient-to-r from-blue-500 to-gray-500 border-b-2 flex flex-col w-full items-start justify-between transition duration-300" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex mb-2 w-full">
        <h2 className="text-xl font-bold mr-2">{number}</h2>
        <h1 className="text-xl font-semibold">{title}</h1>
        {hovered ? (
          <MdArrowOutward className="flex absolute top-5 right-4" size={20} />
        ) : (
          <GoArrowDownRight className="flex absolute top-5 right-4" size={20} />
        )}
      </div>
      <p className={`text-gray-800 ${hovered ? 'text-white' : ''} transition duration-300`}>
        {description}
      </p>
    </div>
  );
}

export default Services;
