import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-200 w-full font-sans max-w-[1440px] lg:mx-auto p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="flex flex-col w-full space-y-8 md:ml-16 lg:w-1/2 mb-5">
          <div className="flex items-center space-x-4">
            <FiPhoneCall className="w-8 h-8" />{" "}
            <div className="flex flex-col items-start">
              <p className="text-gray-700 font-bold text-lg lg:text-xl">
                Phone
              </p>
              <h3 className="text-gray-700 text-base lg:text-md">
                +2349033418109
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <GoMail className="w-8 h-8" />{" "}
            <div className="flex flex-col items-start">
              <p className="text-gray-700 font-bold text-lg lg:text-xl">
                Email
              </p>
              <h3 className="text-gray-700 text-base lg:text-md">
                ellfortune3@gmail.com
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SlLocationPin className="w-8 h-8" />
            <div>
              <p className="text-gray-700 font-bold text-lg lg:text-xl">
                Address
              </p>
              <h3 className="text-gray-700 text-base lg:text-md">
                123 Street, City, Country
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <form action="" className="bg-blue-500 rounded-xl shadow-lg p-8">
            <h1 className="text-white text-2xl font-bold mb-4">
              Let's Work Together
            </h1>
            <p className="text-white mb-6">
              I design and code beautiful things and I love what I do.
            </p>
            <input
              type="text"
              placeholder="First Name"
              className="w-full bg-white rounded-md p-2 mb-4"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full bg-white rounded-md p-2 mb-4"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white rounded-md p-2 mb-4"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white rounded-md p-2 mb-4"
            />
            <select
              name="choose service"
              className="w-full bg-white rounded-md p-2 mb-4"
            >
              <option value="choose service">Choose service</option>
              <option value="web development">Web development</option>
              <option value="graphic design">Graphic design</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full bg-white rounded-md p-2 mb-4"
              rows={6}
            ></textarea>
            <button
              type="submit"
              className="bg-transparent border-2 text-white py-2 px-4 rounded-md hover:bg-opacity-80"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
