import React from "react";
import BestBG from "../Assets/demo004.mp4";
import useTypingEffect from "../CustomHooks/useTypingEffect";


const HeroSection = () => {

  const typingText = useTypingEffect("Fourth Revolution Fund", 150, 100);
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 object-cover w-full h-full -z-20"
        src={BestBG}
        autoPlay
        muted
        loop
        preload="auto"
      ></video>
      {/* Semi-transparent overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>

      <div className="w-full h-full px-6 space-y-2 md:max-at1030:px-10 at1030:px-20 mt-52">
        <h1 className="z-10 font-bold text-transparent uppercase xxs:max-at602:text-6xl font-Titillium drop-shadow-lg text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {typingText}
        </h1>
        <h2 className="z-10 text-4xl font-semibold text-transparent drop-shadow-lg font-Titillium bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Catalyzing startup’s stories that push forward <br className="xxs:max-at1030:hidden" /> positive global
          narratives.
        </h2>
        <p className="pt-3 text-3xl font-medium text-white at1030:max-w-2xl font-Titillium opacity-90">
          The digital revolution sparked new industries and rapidly evolved
          human consciousness through the internet, symbolizing an emerging,
          interconnected "human colossus
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
