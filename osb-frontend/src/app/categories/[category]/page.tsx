import ArticleCard from "@/components/articleCard/articleCard";
import React from "react";

type Props = { params: { category: string } };

const Category = ({ params }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12">
        <h1 className="text-2xl">{params.category}</h1>
        <p className="text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
          eveniet? Itaque expedita laudantium iure voluptatibus corporis earum
          dolores doloremque veritatis.
        </p>
      </div>
      <div className="w-10/12 p-0.5 my-6 bg-secondary" />
      <div className="justify-start items-start w-10/12">
        <h2 className="text-lg">Related Posts:</h2>
      </div>
      <div className="flex flex-wrap items-between justify-between w-10/12 gap-1 mt-2">
        <div className="w-3/12">
          <ArticleCard />
        </div>
        <div className="w-3/12">
          <ArticleCard />
        </div>
        <div className="w-3/12">
          <ArticleCard />
        </div>
        <div className="w-3/12">
          <ArticleCard />
        </div>
        <div className="w-3/12">
          <ArticleCard />
        </div>
        <div className="w-3/12">
          <ArticleCard />
        </div>
      </div>
    </div>
  );
};

export default Category;
