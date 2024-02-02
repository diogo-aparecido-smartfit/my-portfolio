import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Favicon from "/public/favicon.ico";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Intro from "@/components/Intro";
import { Meteors } from "@/components/Meteors";

const grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "Diogo Marques",
    siteName: "Diogo Marques",
    url: "https://www.diogomv.com.br/",
    description:
      "Olá, eu me chamo Diogo, tenho 18 anos, sou desenvolvedor Full-Stack e este é meu portfólio!",
    images: [
      {
        url: "https://raw.githubusercontent.com/DiogoAMV/my-portfolio/main/web/public/thumb.jpg",
        width: 1800,
        height: 1600,
        alt: "Website preview",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
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
        <Meteors />
      </body>
    </html>
  );
}
