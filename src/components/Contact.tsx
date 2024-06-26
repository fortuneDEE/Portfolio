import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-blue-50 font-sans max-w-[1440px] py-16 lg:mx-auto p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="flex flex-col w-full space-y-8 md:ml-16 lg:w-1/2 mb-12">
          <div className="flex items-center space-x-4">
            <div className="border-2 rounded-full bg-blue-800 text-white p-4">
              <FiPhoneCall className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-base lg:text-lg">Phone</p>
              <h3 className="font-bold text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900">
                +2349033418109
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border-2 rounded-full bg-blue-800 text-white p-4">
              <GoMail className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-base lg:text-lg">Email</p>
              <h3 className="font-bold text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900">
                ellfortune3@gmail.com
              </h3>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="border-2 rounded-full bg-blue-800 text-white p-4">
              <SlLocationPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base lg:text-lg">Address</p>
              <h3 className="font-bold text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900">
                127 Adewale Kolawole Crescent, Lagos.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <form action="" className="rounded-xl bg-white shadow-lg p-8">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-900 text-2xl font-bold mb-4">
              Let's Work Together!
            </h1>
            <p className="font-thin mb-6">
              I design visualy appealing user-centric websites. Send me a
              message to get started.
            </p>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-2 bg-blue-50  rounded-md p-2 mb-4"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-2 bg-blue-50 rounded-md p-2 mb-4"
              />
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-2 bg-blue-50 rounded-md p-2 mb-4"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border-2 bg-blue-50 rounded-md p-2 mb-4"
              />
            </div>
            <select
              name="choose service"
              className="w-full text-blue-900 border-2 bg-blue-50 rounded-md p-2 mb-4"
            >
              <option value="choose service">Choose service</option>
              <option value="web development">Web development</option>
              <option value="graphic design">Graphic design</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              className="w-full border-2 bg-blue-50 rounded-md p-2 mb-4"
              rows={6}
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-gray-900 font-bold text-white py-4 px-6 rounded-full hover:bg-opacity-80"
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
