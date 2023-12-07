import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Favicon from "/public/favicon.ico";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Intro from "@/components/Intro";

const grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diogo Marques",
  description:
    "Olá, eu me chamo Diogo, tenho 18 anos, sou desenvolvedor Full-Stack e este é meu portfólio!",
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
        <Intro />
        <Sidebar />
        {children}
        <ParticlesBackground
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={300}
        />
      </body>
    </html>
  );
}
