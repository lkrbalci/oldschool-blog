import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oldschool Blog",
  description: "The Most Oldschool Themed Blog Ever",
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
          <section className="flex flex-col md:flex-row md:w-2/8 h-[calc(100vh-52px)]">
            <NavBar />
            {children}
            {/* latest */}
          </section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
