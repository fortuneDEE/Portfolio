import TestimonialCarousel from "./TestimonialCarousel";

const Clients = () => {
  return (
    <section className="w-full max-w-[1440px] py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start md:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-lg">
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500">
              My Client's Stories
            </h1>
            <p className="text-base text-gray-600 max-w-[550px] mb-8 lg:mb-0">
              Explore the inspiring stories of our satisfied clients who
              embarked on unforgettable journeys with us.
            </p>
          </div>
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients
