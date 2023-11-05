"use client";

import {
  BiBookAlt,
  BiCommand,
  BiHomeAlt,
  BiLinkExternal,
  BiLogoDiscordAlt,
  BiLogoGithub,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiUserCircle,
} from "react-icons/bi";
import { MdOutlineMail, MdWorkOutline } from "react-icons/md";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navigationRoutes = [
  {
    href: "home",
    title: "Início",
    icon: <BiHomeAlt />,
  },
  {
    href: "about",
    title: "Sobre",
    icon: <BiUserCircle />,
  },
  {
    href: "experience",
    title: "Experiência",
    icon: <MdWorkOutline />,
  },
  {
    href: "education",
    title: "Educação",
    icon: <BiBookAlt />,
  },
];

const socialMediaLinks = [
  {
    href: "https://github.com/DiogoAMV/",
    title: "GitHub",
    icon: <BiLogoGithub />,
  },
  {
    href: "https://www.linkedin.com/in/diogo-amv/",
    title: "LinkedIn",
    icon: <BiLogoLinkedin />,
  },
  {
    href: "https://www.instagram.com/diogomv.dev/",
    title: "Instagram",
    icon: <BiLogoInstagramAlt />,
  },
  {
    href: "https://discordapp.com/users/457377404625747989",
    title: "Discord",
    icon: <BiLogoDiscordAlt />,
  },
];

function Sidebar() {
  const [activeNav, setActiveNav] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    if (showSidebar) {
      setShowSidebar(false);
      document.body.style.removeProperty("overflow");
    } else {
      document.body.style.setProperty("overflow", "hidden");
      setShowSidebar(true);
    }
  };

  return (
    <header>
      <button
        onClick={() => handleShowSidebar()}
        className={`flex md:hidden fixed z-30 items-center gap-2 text-white bg-darkBg border-[1px] border-darkBorder rounded-xl p-3 lg:p-2 hover:brightness-200 transition-all bottom-0 ml-4 mb-4`}
      >
        <BiCommand />
      </button>

      {/* mobile */}
      <motion.nav
        className={`flex fixed md:hidden h-screen w-4/5 p-4 bg-zinc-950 text-white text-xl transition-all ease-in-out duration-300 z-20 overflow-auto ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full w-full">
          <div className="flex gap-2 items-center">
            <img
              className="w-12 h-12 rounded-full mb-2"
              src="https://avatars.githubusercontent.com/u/89851406?v=4"
              alt="Imagem de perfil do GitHub"
            />
            <h1 className="w-full flex font-bold text-base">DiogoAMV</h1>
          </div>
          <ul className="flex flex-col gap-2 text-zinc-400 mt-4">
            <h3 className=" text-base">Navegação</h3>
            {navigationRoutes.map((singleRoute) => {
              return (
                <NavigationMobileLink
                  handleCloseMenu={() => handleShowSidebar()}
                  key={singleRoute.href}
                  href={`/${singleRoute.href}`}
                  title={singleRoute.title}
                  icon={singleRoute.icon}
                />
              );
            })}
          </ul>
          <ul className="flex flex-col gap-2 text-zinc-400 mt-8">
            <h3 className=" text-base">Social</h3>
            {socialMediaLinks.map((socialMedia) => {
              return (
                <a
                  key={socialMedia.href}
                  href={socialMedia.href}
                  target="_blank"
                  className="flex  items-center w-full gap-2 p-3 lg:p-2 hover:brightness-200 transition-all lg:w-64"
                >
                  {socialMedia.icon}
                  <span
                    className={`text-base w-full flex items-center justify-between `}
                  >
                    {socialMedia.title} <BiLinkExternal />
                  </span>
                </a>
              );
            })}
          </ul>
          <div className="flex top-0 text-neutral-400">
            <a
              target="_blank"
              href="mailto:diogo.amv19@gmail.com"
              className="flex cursor-pointer items-center gap-2 p-3 lg:p-2 hover:brightness-200 transition-all lg:w-64 w-full"
            >
              <MdOutlineMail />
              <span
                className={`text-base w-full flex lg:hidden items-center justify-between`}
              >
                Email <BiLinkExternal />
              </span>
            </a>
          </div>
        </nav>
      </motion.nav>

      {/* background */}
      <div
        onClick={() => handleShowSidebar()}
        className={` ease-in-out duration-300 transition-opacity ${
          showSidebar ? "opacity-50" : "opacity-0 hidden"
        }  bg-black w-screen h-screen fixed z-10 md:hidden`}
      ></div>

      {/* md> */}
      <motion.nav className="hidden md:flex fixed h-screen p-2 lg:p-4 w-fit bg-zinc-950 text-white text-xl transition-all">
        <nav className="flex flex-col h-full">
          <div className="flex gap-2 items-center">
            <img
              className="w-12 h-12 rounded-full mb-2"
              src="https://avatars.githubusercontent.com/u/89851406?v=4"
              alt="Imagem de perfil do GitHub"
            />
            <h1 className="hidden lg:flex font-bold text-base">DiogoAMV</h1>
          </div>
          <ul className="flex flex-col gap-2 text-neutral-500 mt-4">
            <h3 className="hidden lg:flex text-base">Navegação</h3>
            {navigationRoutes.map((singleRoute) => {
              return (
                <NavigationLink
                  key={singleRoute.href}
                  href={`/${singleRoute.href}`}
                  title={singleRoute.title}
                  icon={singleRoute.icon}
                />
              );
            })}
          </ul>
          <ul className="flex flex-col gap-2 text-neutral-500 mt-8">
            <h3 className="hidden lg:flex text-base">Social</h3>
            {socialMediaLinks.map((socialMedia) => {
              return (
                <a
                  key={socialMedia.href}
                  href={socialMedia.href}
                  target="_blank"
                  className="flex  items-center gap-2 p-3 lg:p-2 hover:brightness-200 transition-all lg:w-64"
                >
                  {socialMedia.icon}
                  <span
                    className={`text-base w-full hidden lg:flex items-center justify-between`}
                  >
                    {socialMedia.title} <BiLinkExternal />
                  </span>
                </a>
              );
            })}
          </ul>
          <div className="flex mt-auto top-0 text-neutral-500">
            <a
              target="_blank"
              href="mailto:diogo.amv19@gmail.com"
              className="flex cursor-pointer items-center gap-2 p-3 lg:p-2 hover:brightness-200 transition-all lg:w-64"
            >
              <MdOutlineMail />
              <span
                className={`text-base w-full hidden lg:flex items-center justify-between`}
              >
                Me mande um email <BiLinkExternal />
              </span>
            </a>
          </div>
        </nav>
      </motion.nav>
      <div className="hidden md:flex w-12 p-2 lg:w-64 h-screen lg:p-3 bg-transparent"></div>
    </header>
  );
}

interface NavigationLinkProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  handleCloseMenu?: () => void;
}

function NavigationLink({ href, icon, title }: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === (href === "/home" ? "/" : href) ||
    pathname.startsWith(`${href}`);

  return (
    <Link
      href={href === "/home" ? "/" : href}
      className={`flex relative border-none outline-none focus:outline-none items-center gap-2 ${
        isActive && "text-white"
      } p-3 lg:p-2 hover:brightness-200 transition-all lg:w-64 focus:outline-none focus:ring-0`}
    >
      {isActive && (
        <motion.div
          layoutId="nav-bg"
          className="absolute border-[1px] bg-darkBg border-darkBorder rounded-xl inset-0 w-full h-full"
          style={{ borderRadius: "10px" }}
        ></motion.div>
      )}
      <span className="flex items-center gap-2 z-10">
        {icon}
        <span
          className={`text-base hidden lg:flex mix-blend-exclusion  ${
            isActive ? "text-white" : null
          }`}
        >
          {title}
        </span>
      </span>
    </Link>
  );
}

function NavigationMobileLink({
  href,
  icon,
  title,
  handleCloseMenu,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === (href === "/home" ? "/" : href);
  const closeMenu = handleCloseMenu ? () => handleCloseMenu() : () => {};

  return (
    <Link
      onClick={closeMenu}
      href={href === "/home" ? "/" : href}
      className={`flex relative border-none outline-none focus:outline-none items-center gap-2 ${
        isActive && "text-white"
      } p-3 lg:p-2 hover:brightness-200 transition-all lg:w-64 focus:outline-none focus:ring-0`}
    >
      {isActive && (
        <motion.div
          layoutId="mobilenav-bg"
          className="absolute border-[1px] bg-darkBg border-darkBorder rounded-xl inset-0 w-full h-full"
          style={{ borderRadius: "10px" }}
        ></motion.div>
      )}
      <span className="flex items-center gap-2 z-10">
        {icon}
        <span className={`text-base  ${isActive ? "text-white" : null}`}>
          {title}
        </span>
      </span>
    </Link>
  );
}

export default Sidebar;
