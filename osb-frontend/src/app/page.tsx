import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col border-2 border-secondary mx-1 items-center md:mx-0 md:my-1 md:h-[calc(100vh-60px)] md:overflow-y-scroll md:overflow-x-hidden">
      <header className="bg-[url('/header.webp')] bg-cover w-4/6 flex justify-center items-center aspect-[1/0.4] bg-cover mt-6">
        <h1 className="text-2xl md:text-4xl color-trinary uppercase p-1 outline outline-[4px] outline-offset-[6px] mix-blend-lighten">╠ RETRO TECH SOMETHING ╣</h1>
      </header>
      <article className="w-4/6 aspect-[720/405] relative my-6 group overflow-hidden">
        <Image
          src="/header.webp"
          alt="header by Lorenzo Herrera"
          fill
          objectFit="cover"
        ></Image>
        <div className="w-full h-[50%] relative h-20 bottom-[-75%] group-hover:bottom-[-50%] bg-primary bg-opacity-50 p-1">
          <h2 className="text-2xl md:text-3xl">❤ OLD COMPUTERS ❤</h2>
        </div>
      </article>
    </div>
  );
}
