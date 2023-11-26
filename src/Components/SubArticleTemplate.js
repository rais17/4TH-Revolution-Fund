import React from "react";
import ImageTemplate from "./ImageTemplate";
import NewsTemplate from "./NewsTemplate";


const SubArticleTemplate = ({ image, article, isReverse, title = "" }) => {

  return (
    <div
      className={`xxs:max-sm:rounded-lg w-full flex xxs:max-sm:flex-col justify-center ${
        isReverse ? `sm:flex-row-reverse` : `sm:flex-row`
      }`}
    >
      <ImageTemplate image={image} />
      <NewsTemplate description={article} isReverse={isReverse} title={title} />

    </div>
  );
};

export default SubArticleTemplate;
