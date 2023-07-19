import { useState, useEffect } from "react";

interface StartLoadingProps {
  darkMode: boolean;
}

export default function StartLoading({ darkMode }: StartLoadingProps) {
  const [isNewVisitor, setIsNewVisitor] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const text = "Diogo Marques 👑";

  useEffect(() => {
    const newVisitor = localStorage.getItem("visitor");
    if (newVisitor) {
      setIsNewVisitor(true);
    } else {
      setIsNewVisitor(false);
    }
  }, []);

  // A tipografia de começo desaparecerá depois de 3900ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3900);

    return () => clearTimeout(timer);
  }, []);

  return isNewVisitor ? (
    <div>
      {isVisible && (
        <div
          className={`${
            darkMode ? "bg-[#111010]" : "bg-white"
          } flex justify-center items-center h-screen w-full fixed z-20 animate-fade`}
          style={{ animationDelay: "1s" }}
        >
          <h1 className="overflow-hidden text-2xl font-poppins font-bold leading-6 ">
            {text.match(/./gu)!.map((char, index) => (
              <span
                className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
}
