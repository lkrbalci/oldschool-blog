import React from "react";
import Categories from "../categories/Categories";
import ArticleCard from "../articleCard/ArticleCard";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="border-2 border-secondary m-1 md:h-[calc(100vh-60px)] md:overflow-y-scroll flex flex-col items-center">
      <div className="mt-16">
        <Categories />
      </div>
      <div className="py-1 bg-secondary mt-8 mb-6 w-11/12"></div>
      <div className="w-10/12">
        <h2 className="text-lg md:text-xl mb-2">Some Random Posts:</h2>
        <ArticleCard />
        <div className="py-[1px] bg-secondary my-2"></div>
        <ArticleCard />
        <div className="py-[1px] bg-secondary my-2"></div>
        <ArticleCard />
        <div className="py-[1px] bg-secondary my-2"></div>
        <ArticleCard />
        <div className="py-[1px] bg-secondary my-2"></div>
        <ArticleCard />
        <div className="py-[1px] bg-secondary my-2"></div>
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
