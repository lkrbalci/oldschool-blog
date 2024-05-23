import React from "react";
import Link from "next/link";

type Props = {};

const Categories = (props: Props) => {
  return (
    <div>
      <h1 className="text-2xl">
        <span className="text-lg">╔ </span>
        Categories
      </h1>
      <Link href={"/category-1"}>
        <h3 className="text-lg hover:bg-secondary hover:text-primary">
          ├ Category 1
        </h3>
      </Link>
      <Link href={"/"}>
        <h3 className="text-lg hover:bg-secondary hover:text-primary">
          ├ Category 2
        </h3>
      </Link>
      <Link href={"/"}>
        <h3 className="text-lg hover:bg-secondary hover:text-primary">
          ├ Category 3
        </h3>
      </Link>
      <Link href={"/"}>
        <h3 className="text-lg hover:bg-secondary hover:text-primary">
          └ Category 4
        </h3>
      </Link>
      <h3></h3>
    </div>
  );
};

export default Categories;
