import MainArticleCard from "@/components/mianArticleCard/mainArticleCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-[url('/header.webp')] bg-cover w-5/6 flex justify-center items-center aspect-[1/0.2] mt-16">
        <h1 className="text-2xl text-primary bg-secondary uppercase p-1 outline outline-[4px] outline-offset-[6px] md:outline-0 lg:outline-4 mix-blend-lighten md:text-3xl lg:text-4xl">
          ╠ RETRO TECH SOMETHING ╣
        </h1>
      </header>
      {/*Featured*/}
      <div className="w-4/6  my-6">
        <MainArticleCard />
      </div>
      {/*Latest*/}
      <div className="w-4/6 my-6 flex flex-col">
        <MainArticleCard />
      </div>
    </div>
  );
}
