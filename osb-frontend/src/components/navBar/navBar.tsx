import Image from "next/image";
import Link from "next/link";
import NavLink from "./atomic/navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/categories", title: "Categories" },
  { url: "/contact", title: "Contact" },
  { url: "/about", title: "About" },
];

const Navbar = () => {
  return (
    <header
      role="navigation"
      data-testid="navbar"
      className="m-1 flex items-center border-2 border-secondary px-4 text-xl sm:justify-between md:w-1/6 md:flex-col md:items-center md:justify-around md:p-0"
    >
      {/* LOGO */}
      <div className="relative h-6 w-6 hover:scale-150 hover:cursor-pointer sm:h-8 sm:w-8 md:h-24 md:w-24">
        <Link href={"/"}>
          <Image src="/rootifera.png" alt="Rootifera Logo" fill />
        </Link>
      </div>
      {/* LINKS */}
      <div className="sm:4/6 flex w-5/6 items-center justify-center text-sm sm:justify-evenly sm:text-xl md:w-full md:flex-col md:text-2xl">
        {links.map((link, index) => (
          <NavLink link={link} index={index} key={link.title} />
        ))}
      </div>
      {/* SOCIAL */}
      <div className=" hidden items-center sm:flex sm:gap-2 md:w-3/12 md:flex-col">
        <Link href="/">
          <Image src="/github.png" alt="GitHub icon" width={24} height={24} />
        </Link>
        <Link href="/" className="hidden">
          <Image
            src="/dribbble.png"
            alt="Dribbble icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/instagram.png"
            alt="Instagram icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/" className="hidden">
          <Image
            src="/facebook.png"
            alt="facebook icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/" className="hidden">
          <Image
            src="/pinterest.png"
            alt="Pinterest icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/linkedin.png"
            alt="LinkedIn icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
