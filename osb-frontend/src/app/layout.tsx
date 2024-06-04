import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import SideBar from "@/components/sideBar/sideBar";
import { fetchLayout } from "@/utils/fetch";
import { Payload } from "@/types/Payload";
import { Layout } from "@/types/layout";
import keys from "@/keys";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const layout: Payload<Layout> = await fetchLayout();
  return {
    title: layout.data.attributes.site_title || "Oldschool Blog",
    description:
      layout.data.attributes.site_description ||
      "The Most Oldschool Themed Blog Ever",
    icons: {
      icon:
        `${keys.API_URL}${layout.data.attributes.logo_img?.data.attributes.url}` ||
        "/rootifera.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt323.className} h-screen bg-primary p-1 text-secondary`}
      >
        <main className="border-2 border-secondary">
          <section className="flex min-h-[calc(100vh-52px)] flex-col md:flex-row">
            <NavBar />
            <div className="mx-1 flex flex-col border-2 border-secondary pt-12 md:mx-0 md:my-1 md:h-[calc(100vh-60px)] md:w-7/12 md:overflow-x-hidden md:overflow-y-scroll md:pt-16">
              {children}
            </div>
            <div className="md:w-3/12">
              <SideBar />
            </div>
            {/* latest */}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
