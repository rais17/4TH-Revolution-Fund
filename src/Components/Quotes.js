import React from 'react'

const Quotes = ({description, image, isReverse}) => {
  return (
    <div
      className={`w-full flex ${
        isReverse ? `flex-row-reverse` : `flex-row`
      } items-center gap-10 px-6 shadow-2xl relative overflow-hidden`}
    >
      <div className="inset-0 z-20 sm:w-2/3 xxs:max-sm:relative">
        <pre className="text-xl text-gray-300 whitespace-pre-line sm:text-justify font-Titillium xxs:max-sm:py-8 xxs:max-sm:px-4 ">
          {description}
        </pre>
      </div>

      <div className="relative inset-0 z-10 overflow-hidden sm:w-1/3 rounded-2xl xxs:max-sm:absolute">
        <img className="object-cover w-full h-full" src={image} alt="img" />
        <div className="absolute inset-0 bg-black opacity-80 sm:hidden"></div>
      </div>
    </div>
  );
}

export default Quotes
