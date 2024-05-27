import Image from "next/image";
import React from "react";

type Props = {};

const ArticleCard = (props: Props) => {
  return (
    <article className="group relative mb-2 cursor-pointer shadow-random-sm @container">
      <div className="relative aspect-[720/405]">
        <Image
          src="/pexels-kevinbidwell-pacman.jpg"
          alt="header by Lorenzo Herrera"
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className="flex w-full flex-col items-start justify-center p-1  transition-all duration-1000 group-hover:bg-secondary group-hover:text-primary">
        <h2 className="text-md @sm:text-lg @md:text-xl">Lorem, ipsum.</h2>
      </div>
      <div className="absolute top-0 bg-fourth bg-opacity-50 px-[2px]">
        <p className="text-xs md:text-sm">arcade</p>
      </div>
    </article>
  );
};

export default ArticleCard;
