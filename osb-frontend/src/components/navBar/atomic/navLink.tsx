"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ReactTyped } from "react-typed";

type Props = {
  link: {
    name: string;
    url: string;
  };
  index: number;
};

const NavLink = ({ link, index }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      className={`m-1 rounded px-1 ${pathName === link.url && "bg-secondary text-primary"}`}
      href={link.url}
    >
      {`${link.name[0]}:\\>`}
      <ReactTyped
        startDelay={index * 800}
        strings={[`${link.name.substring(1)}`]}
        typeSpeed={100}
        showCursor={false}
      />
    </Link>
  );
};

export default NavLink;
