import Image from "next/image";
import Link from "next/link";
import NavLink from "./atomic/navLink";
import AvatarWithAnime from "../avatarWithAnime/AvatarWithAnime";
import { fetchLayout } from "@/utils/fetch";
import { Payload } from "@/types/Payload";
import { Layout } from "@/types/layout";
import { Socials } from "@/types/Socials";
import keys from "@/keys";

const Navbar = async () => {
  const layout: Payload<Layout> = await fetchLayout();

  console.log(layout.data.attributes.social);

  return (
    <header
      role="navigation"
      data-testid="navbar"
      className="m-1 flex items-center border-2 border-secondary px-4 text-xl sm:justify-between md:w-1/6 md:flex-col md:items-center md:justify-between md:p-0"
    >
      {/* LOGO */}
      <AvatarWithAnime logo={layout.data.attributes.logo_img} />
      {/* LINKS */}
      <div className="sm:4/6 flex w-5/6 items-center justify-center text-sm sm:justify-evenly sm:text-xl md:w-full md:flex-col md:text-2xl">
        {layout.data.attributes.pages.map((link: any, index: number) => (
          <NavLink link={link} index={index} key={link.name} />
        ))}
      </div>
      {/* SOCIAL */}
      <div className="relative flex items-center gap-2 md:bottom-16 md:w-3/12 md:flex-col">
        {/* {layout.data.attributes.social.map((social: Socials, index: number) => (
          <Link
            href={social.social_url || "#"}
            target="_blank"
            rel="noreferrer"
            key={social.social_url}
            className="relative h-4 w-4 sm:h-6 sm:w-6"
          >
            <Image
              src={`${keys.API_URL}${social.social_img?.data.attributes.url}`}
              alt={social.name}
              fill
            />
          </Link>
        ))} */}
      </div>
    </header>
  );
};

export default Navbar;
