import React from "react";
import Categories from "../categories/categories";
import ArticleCard from "../articleCard/articleCard";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div
      data-testid="sidebar"
      className="@container border-2 border-secondary m-1 md:h-[calc(100vh-60px)] flex flex-col items-center"
    >
      <div className="hidden mt-16 md:block">
        <Categories />
      </div>
      <div className="hidden py-1 bg-secondary mt-8 mb-6 w-10/12 md:block lg:w-8/12" />
      <h2 className="text-md  mb-2 sm:text-lg @md:text-2xl">
        Some Random Posts:
      </h2>
      <div className="w-7/12 px-1 grid grid-cols-3 md:grid-cols-1 gap-2 md:overflow-y-scroll @lg:10/12">
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
        <div>
          <ArticleCard />
          <div className="py-[1px] bg-secondary my-1"></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
