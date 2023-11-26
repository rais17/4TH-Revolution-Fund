import React from "react";

const ImageTemplate = ({ image }) => {
  return (
    <div className="relative w-full sm:w-1/2 image-container aspect-video">
      <img className="object-cover w-full h-full" src={image} alt="image" />
      <div className="absolute inset-0 bg-black opacity-50 overlay"></div>
    </div>
  );
};

export default ImageTemplate;
