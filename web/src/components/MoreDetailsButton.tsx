import Lottie from "lottie-react";
import i18n from "../../i18n/i18n";
import eyeIcon from "../../public/icons/eye-icon.json";
import { useRef } from "react";

interface MoreDetailsButtonProps {
  handleFunction: () => void;
}

export default function MoreDetailsButton({
  handleFunction,
}: MoreDetailsButtonProps) {
  const lottieRef = useRef(null);
  const language = i18n.language;

  return (
    <button
      className="group/edit hover:underline flex flex-row items-center gap-2 max-w-fit transition-all cursor-pointer"
      onMouseEnter={() => (lottieRef as any)?.current?.play()}
      onMouseLeave={() => (lottieRef as any)?.current?.stop()}
      onClick={handleFunction}
    >
      {language === "pt-BR" ? "Mais detalhes" : "More details"}
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
          animationData={eyeIcon}
          loop={false}
          autoplay={false}
        />
      </span>
    </button>
  );
}
