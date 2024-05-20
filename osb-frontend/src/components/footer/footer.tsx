import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-1 border-2 border-secondary mx-1 mb-1">
      {/* LOGO */}
      <div className="lg:flex h-6 w-6 lg:justify-center relative hover:scale-150 hover:cursor-pointer">
        {/* <Link href={"/"}> */}
        <Image src="/rootifera.png" alt="Rootifera Logo" fill />
        {/* </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
