import TestimonialCarousel from "./TestimonialCarousel";

const Clients = () => {
  return (
    <section className="w-full max-w-[1990px] py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-6">My Client's Stories</h1>
          <p className="text-lg text-gray-600 mb-12">
            Explore the inspiring stories of our satisfied clients who embarked
            on unforgettable journeys with me.
          </p>
          <div className="carousel">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients
