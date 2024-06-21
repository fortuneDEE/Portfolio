import TestimonialCarousel from "./TestimonialCarousel";

const Clients = () => {
  return (
    <section className="w-full max-w-[1440px] py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start lg:flex-row">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500">
              My Client's Stories
            </h1>
            <p className="text-base text-gray-600 mb-12 ">
              Explore the inspiring stories of our satisfied clients who
              embarked on unforgettable journeys with me.
            </p>
          </div>
          <div className="">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients
