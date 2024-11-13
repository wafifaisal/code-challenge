"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    review:
      "Amazing quality! The crochet flowers are beautifully crafted and look so real. I will definitely order again.",
    rating: 5,
  },
  {
    name: "Emily Brown",
    review:
      "The bags are stylish and well-made. Perfect for gifts! The customer service was also very helpful.",
    rating: 4,
  },
  {
    name: "Michael Lee",
    review:
      "I loved the stuffed animals! They are soft and very detailed. My kids adore them.",
    rating: 5,
  },
  {
    name: "Jessica Smith",
    review:
      "The bundle customization is a great feature. I could mix and match my favorite flowers. Highly recommended!",
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the visibility of the testimonials
  const toggleTestimonials = () => setIsOpen((prev) => !prev);

  return (
    <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-lg w-full">
      {/* Dropdown Toggle Button */}
      <div
        onClick={toggleTestimonials}
        className="text-lg font-semibold text-teal-700 cursor-pointer hover:text-teal-800"
      >
        {isOpen
          ? "Hide Customer Testimonials"
          : "Want to know why our customers love us? Read their stories!"}
      </div>

      {/* Conditionally render testimonials */}
      {isOpen && (
        <div className="mt-4 w-full">
          <h2 className="text-2xl font-bold mb-4 text-center w-full">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
              >
                <div className="flex items-center mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-500" />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map(
                    (_, i) => (
                      <Star key={i} size={20} className="text-gray-300" />
                    )
                  )}
                </div>
                <p className="text-gray-700 italic mb-2 text-sm sm:text-base">
                  {testimonial.review}
                </p>
                <p className="text-gray-900 font-bold text-xs sm:text-sm">{`- ${testimonial.name}`}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
