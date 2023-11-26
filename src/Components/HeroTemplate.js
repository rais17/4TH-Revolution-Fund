import React from "react";
import useTypingEffect from "../CustomHooks/useTypingEffect";

const HeroTemplate = ({video, text}) => {
  const typingText = useTypingEffect(
    text,
    150,
    100
  );

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 object-cover w-full h-full -z-20"
        src={video}
        autoPlay
        muted
        loop
      ></video>
      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      <div className="w-full px-6 at1030:px-20">
        <h1 className="z-10 font-bold text-center text-transparent uppercase text-7xl font-Titillium drop-shadow-lg bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {typingText}
        </h1>
      </div>
    </div>
  );
};

export default HeroTemplate;
