import Image from "next/image";
import React from "react";

type Props = {};

const ArticleCard = (props: Props) => {
  return (
    <article className="relative group cursor-pointer">
      <div className="relative aspect-[720/405]">
        <Image
          src="/pexels-kevinbidwell-pacman.jpg"
          alt="header by Lorenzo Herrera"
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className="w-full p-1 flex flex-col justify-center items-start  group-hover:bg-secondary group-hover:text-primary">
        <h2 className="text-lg md:text-xl">Lorem, ipsum.</h2>
      </div>
      <div className="absolute top-0 bg-fourth bg-opacity-50 px-[2px]">
        <p className="text-xs md:text-sm">arcade</p>
      </div>
    </article>
  );
};

export default ArticleCard;
