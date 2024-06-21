import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
}

const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      role: "Senior software dev",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Senior software dev",
      comment:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "John Doe",
      role: "Senior software dev",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "Jane Smith",
      role: "Senior software dev",
      comment:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-[500px]">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-4 flex flex-col items-start justify-center"
          >
            <div className="bg-white w-full h-[300px] rounded-lg shadow-lg p-6 flex flex-col ">
              <p className="text-lg text-gray-600 mb-12 leading-tight">
                {testimonial.comment}
              </p>
              <div className="flex flex-col items-end">
                <p className="mb-2 justify-endtext-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-gray-500">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
