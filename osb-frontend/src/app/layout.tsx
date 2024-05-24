import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import SideBar from "@/components/sideBar/sideBar";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oldschool Blog",
  description: "The Most Oldschool Themed Blog Ever",
  icons: {
    icon: "/rootifera.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt323.className} bg-primary text-secondary h-screen p-1`}
      >
        <main className="border-2 border-secondary">
          <section className="flex flex-col md:flex-row min-h-[calc(100vh-52px)]">
            <NavBar />
            <div className="border-2 border-secondary mx-1 pt-10 md:mx-0 md:my-1 md:h-[calc(100vh-60px)] md:overflow-y-scroll md:overflow-x-hidden md:w-7/12">
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
