import ArticleCard from "@/components/articleCard/articleCard";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl">All My Mind:</h1>
      <div className="mb-16 mt-6 grid w-10/12 grid-cols-3 gap-x-2 gap-y-8 px-1">
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
    </>
  );
};

export default page;
