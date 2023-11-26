import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { RiPauseMiniLine } from "react-icons/ri";
import { RxResume } from "react-icons/rx";

const Corousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    let id;
    if (!isPaused) id = setInterval(goToNext, 2000); // Change slide every 10 seconds
    return () => id && clearInterval(id);
    
  }, [isPaused, currentIndex]); // Also re-run the effect if currentIndex changes

  return (
    <div className="relative w-full at500:h-[80vh] h-screen">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            className="object-cover w-full h-full"
            src={item.image}
            alt="image"
          />
          <div className="absolute inset-0 z-10 bg-black opacity-70"></div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-5 sm:px-10 gap-y-7">
            <h1 className="text-5xl font-semibold text-center text-transparent uppercase font-Titillium bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {item.title}
            </h1>
            <p className="text-xl text-center text-gray-300 sm:text-justify font-Titillium">
              {item.description}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 z-30 flex items-center justify-center w-full py-2 gap-x-3">
        <button onClick={goToPrevious} className="text-2xl text-white">
          <GrFormPrevious />
        </button>
        <button onClick={togglePause} className="text-2xl text-white">
          {isPaused ? <RxResume /> : <RiPauseMiniLine />}
        </button>
        <button onClick={goToNext} className="text-2xl text-white">
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Corousel;
