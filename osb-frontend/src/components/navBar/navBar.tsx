import Image from "next/image";
import Link from "next/link";
import NavLink from "./atomic/navLink";
import AvatarWithAnime from "../avatarWithAnime/AvatarWithAnime";
import { fetchLayout } from "@/utils/fetch";

const Navbar = async () => {
  const layout: any = await fetchLayout();

  return (
    <header
      role="navigation"
      data-testid="navbar"
      className="m-1 flex items-center border-2 border-secondary px-4 text-xl sm:justify-between md:w-1/6 md:flex-col md:items-center md:justify-between md:p-0"
    >
      {/* LOGO */}
      <div className="relative h-6 w-6 overflow-visible hover:scale-150 hover:cursor-pointer sm:h-8 sm:w-8 md:mt-16 md:h-24 md:w-24">
        <AvatarWithAnime />
      </div>
      {/* LINKS */}
      <div className="sm:4/6 flex w-5/6 items-center justify-center text-sm sm:justify-evenly sm:text-xl md:w-full md:flex-col md:text-2xl">
        {layout.data.attributes.pages.map((link: any, index: number) => (
          <NavLink link={link} index={index} key={link.title} />
        ))}
      </div>
      {/* SOCIAL */}
      <div className="relative flex items-center gap-2 md:bottom-16 md:w-3/12 md:flex-col">
        <Link href="/" className="relative h-4 w-4 sm:h-6 sm:w-6">
          <Image src="/github.png" alt="GitHub icon" width={24} height={24} />
        </Link>
        <Link href="/" className="relative hidden h-4 w-4 sm:h-6 sm:w-6">
          <Image
            src="/dribbble.png"
            alt="Dribbble icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/" className="relative hidden h-4 w-4 sm:h-6 sm:w-6">
          <Image
            src="/instagram.png"
            alt="Instagram icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/" className="relative hidden h-4 w-4 sm:h-6 sm:w-6">
          <Image
            src="/facebook.png"
            alt="facebook icon"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="/www.youtube.com/@RootiferasRetroGameplay"
          className="relative h-4 w-4 sm:h-6 sm:w-6"
        >
          <Image src="/youtube.png" alt="Youtube icon" width={24} height={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ozbahceliler/"
          className="relative h-4 w-4 sm:h-6 sm:w-6"
        >
          <Image src="/linkedin.png" alt="LinkedIn icon" fill />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
