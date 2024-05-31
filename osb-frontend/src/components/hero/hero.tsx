import React from "react";

type Props = { title: string };

const Hero = ({ title }: Props) => {
  return (
    <div className="flex h-28 w-11/12 items-center justify-center bg-[url('/header.webp')] bg-cover">
      <h1 className="bg-secondary p-1 text-2xl uppercase text-primary mix-blend-lighten outline outline-[4px] outline-offset-[6px] md:text-3xl md:outline-0 lg:text-4xl lg:outline-4">
        <span>╠</span> RETRO TECH SOMETHING <span>╣</span>
      </h1>
    </div>
  );
};

export default Hero;
