import React, { useState } from "react";

const NewsTemplate = ({ description, isReverse, title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + " ..."
      : text;
  };

  const maxLength = 530; // Max length of text before truncating

  return (
    <div
      className={`flex sm:items-center w-full sm:w-1/2 ${
        isReverse
          ? `sm:-mr-10 sm:mt-10 sm:-mb-10`
          : `sm:-ml-10 sm:-mb-10 sm:mt-10`
      } bg-[#1c1c1c] shadow-xl sm:aspect-video`}
    >
      <div
        className={`${
          isReverse ? `sm:pr-16 sm:pl-4` : `sm:pl-16 sm:pr-4`
        } space-y-4 xxs:max-sm:p-4`}
      >
        {title && (
          <h1 className="text-3xl font-semibold text-slate-300 font-Titillium">
            {title}
          </h1>
        )}
        <p className="text-xl font-medium text-slate-300 font-Titillium">
          {isExpanded ? description : truncateText(description, maxLength)}
        </p>
        {description.length > maxLength && (
          <button
            onClick={toggleExpanded}
            className="text-sm font-semibold text-blue-500 font-Titillium"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsTemplate;
