import React from "react";
import SubArticleTemplate from "./SubArticleTemplate";

const ArticlesTemplate = ({ articles, className = "" }) => {
  return (
    <div className={`flex flex-col w-full bg-[#212121] gap-16 sm:gap-36 ${className ? `${className}`: `py-20`}`}>
      {articles.map((item, index) => {
        return <SubArticleTemplate key={index} {...item} />;
      })}
    </div>
  );
};

export default ArticlesTemplate;
