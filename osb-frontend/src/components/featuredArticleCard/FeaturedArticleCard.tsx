import Image from "next/image";
import React from "react";

type Props = {};

const FeaturedArticleCard = (props: Props) => {
  return (
    <article className="relative aspect-[720/405] group overflow-hidden cursor-pointer">
      <Image
        src="/pexels-kevinbidwell-pacman.jpg"
        alt="header by Lorenzo Herrera"
        fill
        style={{ objectFit: "cover" }}
      ></Image>
      <div className=" bg-primary bg-opacity-50 p-1 w-full h-[6rem] relative top-[calc(100%-2.5rem)] md:top-[calc(100%-3rem)] group-hover:top-[calc(100%-6rem)] group-hover:bg-secondary group-hover:text-primary transition-all duration-1000">
        <h2 className="text-2xl md:text-3xl">❤ OLD COMPUTERS ❤</h2>
        <div className="h-[2px] w-full bg-secondary group-hover:bg-primary my-0.5 md:my-1"></div>
        <h3 className="text-xl md:text-2xl">Better Than Those 👉 👨‍💻</h3>
      </div>
      <div className="absolute top-0 bg-fourth bg-opacity-50 px-[2px]">
        <p className="text-xs md:text-sm">arcade</p>
      </div>
    </article>
  );
};

export default FeaturedArticleCard;
