import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownRight } from "react-icons/go";

const Services = () => {
  return (
    <section className="bg-blue-50 w-full h-full max-w-[1440px] font-sans py-6 px-6 sm:px-12 lg:px-24">
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
        {/* <div className="w-full "> */}
        <div className="p-6 relative text-white bg-gradient-to-r from-blue-500 to-gray-500 flex border-b-2 flex-col w-full items-start justify-between">
          <div className="flex ">
            <h2 className="text-xl font-bold mr-2">01</h2>
            <h1 className="text-xl font-semibold mb-2">Branding Design</h1>
            <MdArrowOutward className="flex absolute top-5 right-4" size={20} />
          </div>
          <p className="">I break down complex user experience problems</p>
        </div>

        <div className="p-6 cursor-pointer relative text-blue-500 hover:bg-gradient-to-r from-blue-500 to-gray-500 border-b-2 hover:text-white flex flex-col w-full items-start justify-between">
          <div className="flex mb-2">
            <h2 className="text-xl font-bold mr-2">01</h2>
            <h1 className="text-xl font-semibold ">Branding Design</h1>
            <GoArrowDownRight
              className="flex absolute top-5 right-4"
              size={20}
            />
          </div>
          <p className="text-gray-800">
            I break down complex user experience problems
          </p>
        </div>

        <div className="p-6 cursor-pointer relative hover:bg-gradient-to-r from-blue-500 to-gray-500 hover:text-white border-b-2 flex flex-col w-full items-start justify-between">
          <div className="flex text-blue-500 mb-2">
            <h2 className="text-xl font-bold mr-2">01</h2>
            <h1 className="text-xl font-semibold ">Branding Design</h1>
            <GoArrowDownRight
              className="flex absolute top-5 right-4"
              size={20}
            />
          </div>
          <p className="">I break down complex user experience problems</p>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Services;
