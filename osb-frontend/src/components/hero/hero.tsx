import React from "react";

type Props = { title: string };

const Hero = ({ title }: Props) => {
  return (
    <div className="bg-[url('/header.webp')] bg-cover w-11/12 flex justify-center items-center aspect-[1/0.2] mt-16">
      <h1 className="text-2xl text-primary bg-secondary uppercase p-1 outline outline-[4px] outline-offset-[6px] md:outline-0 lg:outline-4 mix-blend-lighten md:text-3xl lg:text-4xl">
        <span>╠</span> RETRO TECH SOMETHING <span>╣</span>
      </h1>
    </div>
  );
};

export default Hero;
