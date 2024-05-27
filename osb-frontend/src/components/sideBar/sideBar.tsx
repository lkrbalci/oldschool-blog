import React from "react";
import Categories from "../categories/categories";
import ArticleCard from "../articleCard/articleCard";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div
      data-testid="sidebar"
      className="m-1 flex flex-col items-center border-2 border-secondary @container md:h-[calc(100vh-60px)]"
    >
      <div className="mt-16 hidden md:block">
        <Categories />
      </div>
      <div className="mb-6 mt-8 hidden w-10/12 rounded-sm bg-secondary py-0.5 md:block lg:w-8/12" />
      <h2 className="text-md mb-2  mt-8 @md:text-2xl sm:text-lg md:mt-0">
        Some Random Posts:
      </h2>
      <div className="mb-16 mt-6 grid w-10/12 grid-cols-3 gap-x-2 gap-y-8 px-1 md:mt-2 md:grid-cols-1 md:overflow-y-scroll lg:w-7/12">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default SideBar;
