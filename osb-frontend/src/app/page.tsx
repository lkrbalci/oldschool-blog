import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="bg-[url('/header.webp')] bg-cover w-5/6 flex justify-center items-center aspect-[1/0.2] mt-16 lg:w-4/6">
        <h1 className="text-2xl text-primary bg-secondary uppercase p-1 outline outline-[4px] outline-offset-[6px] md:outline-0 lg:outline-4 mix-blend-lighten md:text-3xl lg:text-4xl">╠ RETRO TECH SOMETHING ╣</h1>
      </header>
      <article className="w-4/6 aspect-[720/405] relative my-6 group overflow-hidden">
        <Image
          src="/header.webp"
          alt="header by Lorenzo Herrera"
          fill
          objectFit="cover"
        ></Image>
        <div className="w-full h-[50%] relative bottom-[-calc(100-1rem)%] group-hover:bottom-[-50%] bg-primary bg-opacity-50 p-1">
          <h2 className="text-2xl md:text-3xl">❤ OLD COMPUTERS ❤</h2>
        </div>
      </article>
    </div>
  );
}
