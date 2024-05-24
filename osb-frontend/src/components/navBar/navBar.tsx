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
      className="flex items-center justify-between px-4 text-xl m-1 border-2 border-secondary md:p-0 md:flex-col md:items-center md:justify-around md:w-1/6"
    >
      {/* LOGO */}
      <div className="h-8 w-8 relative hover:scale-150 hover:cursor-pointer md:h-24 md:w-24">
        <Link href={"/"}>
          <Image src="/rootifera.png" alt="Rootifera Logo" fill />
        </Link>
      </div>
      {/* LINKS */}
      <div className="flex items-center justify-evenly w-4/6 md:flex-col md:w-full md:text-2xl">
        {links.map((link, index) => (
          <NavLink link={link} index={index} key={link.title} />
        ))}
      </div>
      {/* SOCIAL */}
      <div className="flex gap-2 items-center md:flex-col md:w-3/12">
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
