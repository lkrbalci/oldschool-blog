"use client";

import Link from "next/link";
import Image from "next/image";

import useRandomValues from "@/hooks/useRandomEventTrigger";
import { Media } from "@/types/Media";
import keys from "@/keys";

type Props = { logo: { data: Media } | undefined };

const AvatarWithAnime = ({ logo }: Props) => {
  const randomValue = useRandomValues(5);

  let showSpeech: String = "hidden";
  if (randomValue) {
    showSpeech = randomValue < 3 ? "hidden" : "";
  }

  return (
    <div className="relative h-6 w-6 overflow-visible hover:scale-150 hover:cursor-pointer sm:h-8 sm:w-8 md:mt-16 md:h-24 md:w-24">
      <Link href={"/"}>
        <Image
          className={`bg-blue-500 h-16 w-16 rounded-full ${randomValue === 1 && "animate-wiggle"} ${randomValue === 2 && "animate-bounce"}`}
          src={`${keys.API_URL}${logo?.data.attributes.url}`}
          alt="Logo Image"
          fill
        />
      </Link>
      {/* ${showSpeech} */}
      <div
        className={`${showSpeech} md:text-md relative top-4 m-2 min-w-36 rounded-xl bg-secondary p-3 text-left text-sm leading-4 text-fourth sm:left-4 sm:top-6 md:bottom-14 md:left-20 md:min-w-48`}
      >
        {randomValue === 3 && (
          <p>I am not a Led Zeppelin fan and I do not have to be one! FU</p>
        )}
        {randomValue === 4 && <p>His name was Robert Paulson!</p>}
        {randomValue === 5 && <p>God save the King!</p>}
      </div>
    </div>
  );
};

export default AvatarWithAnime;
