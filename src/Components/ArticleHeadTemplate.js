import React from 'react'
import ArticleTemplate from "../Components/ArticlesTemplate";

const ArticleHeadTemplate = ({title, articles}) => {
  return (
    <div div className="w-full">
      <h1 className="px-2 text-3xl font-semibold text-center text-gray-400 lg:text-5xl font-Titillium">
        {title}
      </h1>

      <ArticleTemplate articles={articles} className="pt-8 pb-20" />
    </div>
  );
}

export default ArticleHeadTemplate