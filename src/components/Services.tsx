import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
  initialActive?: boolean;
  onClick: () => void;
}

const services = [
  {
    number: "01",
    title: "Branding Design",
    description:
      "I break down complex user experience problems thus your wishes in the form of a unique web project that inspires you",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "We develop responsive and efficient web applications tailored to your needs.",
  },
  {
    number: "03",
    title: "SEO Optimization",
    description:
      "Our SEO strategies ensure your website ranks high in search results.",
  },
];

export default function MyComponent() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceClick = (index: number) => {
    setSelectedService(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedService(null);
  };

  return (
    <section className="bg-blue-50 w-full h-full max-w-[1440px] mx-auto font-sans px-5 py-6 md:py-12 xs:px-10 sm:px-16 md:px-20 lg:px-28">
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

        {services.map((service, index) => (
          <ServiceItem
            key={index}
            number={service.number}
            title={service.title}
            description={service.description}
            initialActive={index === 0}
            onClick={() => handleServiceClick(index)}
          />
        ))}
      </div>

      {modalVisible && selectedService !== null && (
        <Modal service={services[selectedService]} onClose={closeModal} />
      )}
    </section>
  );
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  number,
  title,
  description,
  initialActive,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`p-6 cursor-pointer relative text-blue-500 border-b-2 flex flex-col w-full items-start justify-between transition duration-300 ${
        initialActive || hovered
          ? "bg-gradient-to-r from-blue-500 to-gray-500 text-white"
          : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="flex mb-2 w-full">
        <h2 className="text-xl font-bold mr-2">{number}</h2>
        <h1 className="text-xl font-semibold">{title}</h1>
        {hovered || initialActive ? (
          <MdArrowOutward className="flex absolute top-5 right-4" size={20} />
        ) : (
          <GoArrowDownRight className="flex absolute top-5 right-4" size={20} />
        )}
      </div>
      <p
        className={`transition-colors duration-300 ${
          hovered || initialActive ? "text-white" : "text-gray-800"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

const Modal: React.FC<{
  service: { number: string; title: string; description: string };
  onClose: () => void;
}> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{service.title}</h2>
        <p className="mb-4">{service.description}</p>
        <h3 className="text-lg font-semibold mb-2">Other Services</h3>
        <ul className="list-disc list-inside mb-4">
          {services
            .filter((s) => s.title !== service.title)
            .map((s, index) => (
              <li key={index}>{s.title}</li>
            ))}
        </ul>
        <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              id="message"
              name="message"
              rows={4}
            ></textarea>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            type="submit"
          >
            Send
          </button>
        </form>
        <button className="mt-4 text-blue-500 underline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
