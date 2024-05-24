import Categories from "@/components/categories/categories";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Categories />
    </div>
  );
};

export default page;
