import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TechCard = ({ title, description, image, reverse, id }) => {

  const navigate = useNavigate();
   const handleClick = () => {
     navigate(`/${id}`);
     window.scrollTo(0, 0);
   };

  return (
    <div
      className={`flex ${
        reverse ? `at830:flex-row-reverse` : `at830:flex-row at830:pl-4`
      } max-w-6xl w-full at460:w-11/12  shadow-xl py-8 gap-x-8  relative`}
    >
      <div className="w-full h-full space-y-7 sm:space-y-8 xxs:max-at830:relative xxs:max-at830:inset-0 xxs:max-at830:z-20 xxs:max-at830:flex xxs:max-at830:flex-col xxs:max-at830:items-center at830:w-2/3 xxs:max-sm:px-2 sm:max-at830:p-8">
        <h1 className="text-4xl font-medium text-gray-100 font-Titillium xxs:max-at830:text-center">
          {title}
        </h1>
        <p className="px-2 text-2xl font-medium text-gray-300 at830:text-xl xxs:max-at830:text-center font-Titillium">
          {description}
        </p>
        <button
          onClick={handleClick}
          className="px-8 py-1 text-xl font-medium text-white bg-transparent rounded font-Titillium bg-clip-border bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500"
        >
          Read More
        </button>
      </div>

      <div className="xxs:max-at830:absolute xxs:max-at830:inset-0 xxs:max-at830:z-10 at830:w-1/2 at942:w-1/3">
        <img
          className="object-cover w-full h-full rounded-md shadow-sm aspect-square"
          src={image}
          alt="image"
        />
        <div className="absolute inset-0 bg-black opacity-70 at830:hidden"></div>
      </div>
    </div>    
  );
};

export default TechCard
