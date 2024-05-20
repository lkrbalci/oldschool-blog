"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./atomic/navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/contact", title: "Contact" },
  { url: "/about", title: "About" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 text-xl m-1 border-2 border-secondary md:flex-col md:justify-around md:w-2/8">
      {/* LOGO */}
      <div className="lg:flex h-8 w-8  lg:justify-center relative hover:scale-150 hover:cursor-pointer md:h-24 md:w-24">
        {/* <Link href={"/"}> */}
          <Image src="/rootifera.png" alt="Rootifera Logo" fill />
          {/* </Link> */}
      </div>
      {/* LINKS */}
      <div className="flex items-center justify-evenly md:flex-col w-4/6 md:w-full md:items-start">
        {links.map((link, index) => (
          <NavLink link={link} index={index} key={link.title} />
        ))}
      </div>
      {/* SOCIAL */}
      <div className="flex md:flex-col gap-2 w-1/6 md:items-start">
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/" className="hidden">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/" className="hidden">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/" className="hidden">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
     
      </div>

  );
};

export default Navbar;