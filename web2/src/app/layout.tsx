import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Favicon from "/public/favicon.ico";
import "./globals.css";
import Navbar from "@/components/Navbar";

const grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diogo Marques",
  description: "",
  icons: {
    icon: Favicon.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${grotesk.className} bg-zinc-950 text-white flex`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
