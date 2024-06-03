"use client";

import Link from "next/link";
import Image from "next/image";

import useRandomValues from "@/hooks/useRandomEventTrigger";
import { Media } from "@/types/Media";
import keys from "@/keys";

type Props = { logo: { data: Media } | undefined };

const AvatarWithAnime = ({ logo }: Props) => {
  const randomValue = useRandomValues();

  let showSpeech: String = randomValue !== "event3" ? "hidden" : "block";

  return (
    <>
      <Link href={"/"}>
        <Image
          className={`bg-blue-500 h-16 w-16 rounded-full ${randomValue === "event1" && "animate-wiggle"} ${randomValue === "event2" && "animate-bounce"}`}
          src={`${keys.API_URL}${logo?.data.attributes.url}`}
          alt="Logo Image"
          fill
        />
      </Link>
      <div
        className={`${showSpeech} md:text-md absolute top-4 m-2 min-w-36 rounded-xl bg-secondary p-3 text-left text-sm leading-4 text-fourth sm:left-4 sm:top-6 md:bottom-14 md:left-20 md:min-w-48`}
      >
        {randomValue === "event3" && (
          <p>I am not a Led Zeppelin fan and I do not have to be one! FU</p>
        )}
        {randomValue === "event4" && <p>His name was Robert Paulson!</p>}
        {randomValue === "event5" && <p>God save the King!</p>}
      </div>
    </>
  );
};

export default AvatarWithAnime;
