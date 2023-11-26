import React from 'react'

const MobileSubArticleTemp = ({article, image, title}) => {
  // Inline style for background image
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={backgroundImageStyle}
      className="w-full mx-2 shadow-2xl at602:aspect-video h-[70vh] hidden"
    >
      {/* Opaque screen with text */}
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 px-4 bg-black bg-opacity-70">
        {title && (
          <h1 className="text-3xl font-semibold text-slate-300 font-Titillium">
            {title}
          </h1>
        )}
        <p className="text-2xl font-medium text-justify text-slate-300 font-Titillium">
          {article}
        </p>
      </div>
    </div>
  );
}

export default MobileSubArticleTemp