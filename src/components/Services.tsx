
const Services = () => {
  return (
    <section className="bg-gray-100 font-sans py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500">
            My Quality Services
          </h1>
          <p className="mt-4 text-gray-800 text-[18px] max-w-[650px]">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you
          </p>
        </div>
        {/* <div className="w-full "> */}
        <div className="p-4 bg-gradient-to-r from-blue-500 shadow-md flex flex-col w-full items-start justify-between">
          <div className="flex ">
            <h2 className="text-xl font-bold mr-4">01</h2>
            <h1 className="text-xl font-semibold mb-2">Branding Design</h1>
          </div>
          <p className="text-gray-600">
            I break down complex user experience problems
          </p>
        </div>
        <div className="p-6 shadow-md flex w-full items-center justify-between">
          <div className="flex items-center space-x-7 justify-between">
            <h2 className="text-2xl font-bold mr-4">01</h2>
            <h1 className="text-xl font-semibold mb-2">Branding Design</h1>
            <p className="text-gray-600">
              I break down complex user experience problems
            </p>
          </div>
        </div>
        <div className="p-6 shadow-md flex w-full items-center justify-between">
          <div className="flex items-center space-x-7 justify-between">
            <h2 className="text-2xl font-bold mr-4">01</h2>
            <h1 className="text-xl font-semibold mb-2">Branding Design</h1>
            <p className="text-gray-600">
              I break down complex user experience problems
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Services
