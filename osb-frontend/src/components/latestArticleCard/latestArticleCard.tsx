import Image from "next/image";
import React from "react";

type Props = { classes?: string };

const LatestArticleCard = ({ classes }: Props) => {
  return (
    <article
      className={`group relative flex cursor-pointer gap-3 @md:w-1/3 @md:flex-col @md:gap-0 ${classes} shadow-random-sm`}
    >
      <div className="relative aspect-[720/405] w-full @md:w-full ">
        <Image
          src="/pexels-kevinbidwell-pacman.jpg"
          alt="header by Lorenzo Herrera"
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div className="flex w-full flex-col items-start justify-center p-1 transition-all duration-1000 group-hover:bg-secondary group-hover:text-primary">
        <h2 className="text-lg @md:text-xl">Some Text</h2>
        <p className="text-sm @md:hidden @md:text-lg">
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
