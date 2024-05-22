import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: number;
  name: string;
  comment: string;
}

const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "Jane Smith",
      comment:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="max-w-[520px] mx-auto">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="bg-white h-[250px] rounded-lg shadow-lg p-6">
              <p className="text-lg text-gray-800">{testimonial.comment}</p>
              <p className="mt-4 text-gray-600">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
