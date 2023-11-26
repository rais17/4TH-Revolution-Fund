import React from "react";
import WorldVideo from "../Assets/WorldVeed.mp4";
import useTypingEffect from "../CustomHooks/useTypingEffect";

const CompanyStatement = () => {
  const typingText = useTypingEffect(
    "Focus on the world defining influences, and ignore the noise.", 100, 50
  );

  return (
    <div className="relative flex items-center justify-center w-full h-[70vh] at500:h-[50vh] overflow-hidden">
      <video
        className="absolute inset-0 object-cover w-full h-full -z-20"
        src={WorldVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>

      <h1 className="px-5 text-6xl italic font-semibold text-transparent at602:px-20 at602:text-7xl font-Titillium bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        {typingText}
      </h1>
    </div>
  );
};

export default CompanyStatement;
