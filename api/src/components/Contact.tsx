import { useContext } from "react";
import { LanguageContext } from "../App";

export default function Contact() {
  const language = useContext(LanguageContext);

  const data = [
    {
      name: "Contato",
    },
    {
      name: "Contact",
    },
  ];

  const info = {
    linkedin: "https://www.linkedin.com/in/diogo-amv/",
    github: "https://github.com/DiogoAMV",
    instagram: "https://www.instagram.com/diogomv.dev/",
    email: "mailto:diogo.amv19@gmail.com",
  };

  return (
    <section
      className="flex flex-col items-center text-center gap-2 p-4 mb-16"
      id="contact"
    >
      <h1 className=" opacity-70 text-base">
        {language === "pt-BR" ? data[0].name : data[1].name}
      </h1>

      <ul className="flex flex-row gap-4 text-[15px]">
        <li className="hover:brightness-50 hover:underline">
          <a target="_blank" href={info.linkedin}>
            LinkedIn
          </a>
        </li>
        <li className="hover:brightness-50 hover:underline">
          <a target="_blank" href={info.instagram}>
            Instagram
          </a>
        </li>
        <li className="hover:brightness-50 hover:underline">
          <a target="_blank" href={info.github}>
            GitHub
          </a>
        </li>
        <li className="hover:brightness-50 hover:underline">
          <a target="_blank" href={info.email}>
            Email
          </a>
        </li>
      </ul>
    </section>
  );
}
