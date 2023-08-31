import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import { SiDotnet, SiCsharp, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import downloadIcon from "../../public/icons/download-icon.json";
import { useRef } from "react";
import CV from "../../public/DiogoResume.pdf";
import ProfilePhoto from "./ProfilePhoto";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const lottieRef = useRef(null);

  return (
    <section id="home" className="flex flex-col text-left mt-28 gap-4">
      <ProfilePhoto />
      <h1 className="font-medium text-lg ">{t("greeting")}</h1>
      <p className="opacity-70">{t("about")}</p>
      <ul className="flex flex-row list-none text-xl gap-4 ">
        <li className="hover:scale-150 hover:text-blue-500 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <BiLogoTypescript />
        </li>
        <li className="hover:scale-150 hover:text-blue-500 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <BiLogoReact />
        </li>
        <li className="hover:scale-150 hover:text-gray-600 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <SiNextdotjs />
        </li>
        <li className="hover:scale-150 hover:text-green-300 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <SiNodedotjs />
        </li>
        <li className="hover:scale-150 hover:text-purple-500 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <SiCsharp />
        </li>
        <li className="hover:scale-150 hover:bg-purple-800 opacity-70 hover:opacity-100  hover:cursor-pointer transition-all">
          <SiDotnet />
        </li>
      </ul>
      <a
        href={CV}
        onMouseEnter={() => (lottieRef as any)?.current?.play()}
        onMouseLeave={() => (lottieRef as any)?.current?.stop()}
        download
        target="_blank"
        className="flex flex-row w-fit items-center gap-2 hover:brightness-50 hover:underline"
      >
        <span>{t("cv")}</span>
        <span
          className={`${
            localStorage.getItem("darkMode") === "true"
              ? "brightness-150"
              : "brightness-50"
          }`}
        >
          <Lottie
            lottieRef={lottieRef}
            className="w-6 h-6"
            animationData={downloadIcon}
            loop={false}
            autoplay={false}
          />
        </span>
      </a>
    </section>
  );
}
