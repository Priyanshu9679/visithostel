import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Catherine Williams",
    role: "Client",
    image: "assets/image/review-a1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    id: 2,
    name: "Jane Wood",
    role: "Client",
    image: "assets/image/review-a2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    id: 3,
    name: "Erica Peterson",
    role: "Client",
    image: "assets/image/review-a3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4 flex flex-col items-center justify-center overflow-hidden posi-r">
      <h2 className="text-3xl font-bold text-gray-800 tracking-wider mb-12 uppercase text-center">
        What People Say
      </h2>

      <div className="review-a-item posi-r">
        <div className="relative w-full max-w-4xl mx-auto min-h-[400px] flex flex-col items-center posi-aa">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center text-cent"
            >
              <div className="mb-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover shadow-sm border-2 border-white hei-wid"
                />
              </div>

              <div className="relative px-8 md:px-12">
                <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto italic pera-info posi-r">
                  <FaQuoteLeft className="posi-a" />
                  {testimonials[currentIndex].text}
                  <FaQuoteRight className="top-right" />
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center space-y-2">
                <h3 className="text-gray-800 font-bold tracking-widest uppercase text-sm size-color">
                  <Link to="/" className="name">
                    {testimonials[currentIndex].name}
                  </Link>
                </h3>
                <span className="text-yellow-500 font-medium text-sm fontf-color">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex space-x-3 mt-8 text-cent marg-top gap">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 heig-wid ${
              index === currentIndex
                ? "w-4 h-4 bg-yellow-400"
                : "w-4 h-4 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
