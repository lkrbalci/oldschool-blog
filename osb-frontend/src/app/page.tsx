import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col border-2 border-secondary mx-1 items-center md:mx-0 md:my-1 md:h-[calc(100vh-60px)] md:overflow-y-scroll md:overflow-x-hidden">
      <header className="mt-6 text-2xl md:text-3xl">
        <h1>╠ RETRO TECH SOMETHING ╣</h1>
      </header>
      <article className="w-4/6 aspect-[720/405] relative my-6 group overflow-hidden">
        <Image src="/header.webp" alt="header by Lorenzo Herrera" fill objectFit="cover"></Image>
        <div className="w-full relative bottom-[-13rem] group-hover:bottom-[-3rem] bg-primary bg-opacity-50 p-1">
        <h2 className="text-2xl md:text-3xl">❤ OLD COMPUTERS ❤</h2>
        </div>
      </article>
    </div>
  );
}
