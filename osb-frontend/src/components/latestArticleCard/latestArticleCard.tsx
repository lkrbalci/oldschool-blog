import Image from "next/image";
import React from "react";

type Props = { classes?: string };

const LatestArticleCard = ({ classes }: Props) => {
  return (
    <article
      className={`relative group flex gap-3 cursor-pointer @md:gap-0 @md:flex-col @md:w-1/3 ${classes}`}
    >
      <div className="relative @md:w-full w-full aspect-[720/405] ">
        <Image
          src="/pexels-kevinbidwell-pacman.jpg"
          alt="header by Lorenzo Herrera"
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className="w-full p-1 flex flex-col justify-center items-start group-hover:bg-secondary group-hover:text-primary">
        <h2 className="text-lg @md:text-xl">Some Text</h2>
        <p className="text-sm @md:text-lg @md:hidden">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste totam
          non molestias quos possimus, exercitationem voluptatibus eos quisquam
          rem voluptas.
        </p>
      </div>
      <div className="absolute top-0 bg-fourth bg-opacity-50 px-[2px]">
        <p className="text-xs md:text-sm">strategy</p>
      </div>
    </article>
  );
};

export default LatestArticleCard;
