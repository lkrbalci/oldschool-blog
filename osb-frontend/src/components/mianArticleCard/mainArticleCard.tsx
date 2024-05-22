import Image from "next/image";
import React from "react";

type Props = {};

const MainArticleCard = (props: Props) => {
  return (
    <article className="@container relative aspect-[720/405] group overflow-hidden h-full">
      <Image
        src="/pexels-kevinbidwell-pacman.jpg"
        alt="header by Lorenzo Herrera"
        fill
        objectFit="cover"
      ></Image>
      <div className="w-full h-[50%] relative -bottom-[calc(100%-2.5rem)] md:-bottom-[calc(100%-3rem)] group-hover:-bottom-[50%] bg-primary bg-opacity-50 p-1">
        <h2 className="text-2xl md:text-3xl">❤ OLD COMPUTERS ❤</h2>
        <div className="h-[2px] w-full bg-secondary my-0.5 md:my-1"></div>
        <h3 className="text-xl md:text-2xl">Better Than Those 👉 👨‍💻</h3>
      </div>
    </article>
  );
};

export default MainArticleCard;
