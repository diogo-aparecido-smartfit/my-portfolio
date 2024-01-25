"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LuAlertCircle } from "react-icons/lu";
import { BiLinkExternal } from "react-icons/bi";
interface ModalProps {
  isOpen: boolean;
  handleOpenModal: () => void;
  url: string;
}

export default function Modal({ isOpen, handleOpenModal, url }: ModalProps) {
  const [availableUrl, setAvailableUrl] = useState(false);

  console.log(availableUrl);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setAvailableUrl(true);
      }, 3100);

      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado antes do tempo limite
    } else {
      setAvailableUrl(false);
    }
  }, [isOpen]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "linear",
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        ease: [0.075, 0.82, 0.165, 0],
      },
    },
    exit: {
      y: 160,
      scale: 0.9,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={container}
          animate="visible"
          initial="hidden"
          exit="exit"
          className={`flex w-screen h-screen fixed items-center justify-center p-4 sm:p-0 left-0 transition-all duration-300 ease-in-out z-50 `}
        >
          <motion.div
            variants={child}
            animate="visible"
            initial="hidden"
            exit="exit"
            className="flex max-w-xl lg:max-w-2xl xl:max-w-4xl"
          >
            <div className="flex flex-col items-center justify-center p-1 bg-zinc-800 rounded-xl max-w-xl">
              <div className="flex flex-col  items-center p-8">
                <div className="flex flex-col sm:flex-row items-center">
                  <p className="text-xl p-4 bg-zinc-700 rounded-xl mb-6 sm:mb-0 sm:mr-6">
                    <LuAlertCircle />
                  </p>
                  <div className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-start">
                    <h1 className="text-2xl font-bold">Atenção!</h1>

                    <p className="text-sm text-zinc-400 break-words">
                      Você compreende que o link no qual você será redirecionado
                      é apenas uma beta e não a aplicação final podendo não
                      conter funcionalidades e atualizações que a aplicação
                      original teria?
                    </p>
                  </div>
                </div>
                <a
                  href={availableUrl ? url : undefined}
                  target="_blank"
                  className={`flex items-center justify-center w-full bg-zinc-800 border-[1px] border-darkBorder p-3 relative font-bold text-white overflow-hidden rounded-xl mt-4 animate-availableButton group transition-all duration-300 ${
                    availableUrl ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                >
                  <p
                    className={`relative z-30  text-zinc-700 overflow-hidden max-h-6   transition-all duration-300`}
                  >
                    <div
                      className={`flex flex-col ${
                        availableUrl &&
                        "group-hover:-translate-y-10 transition-all duration-300 ease-in-out"
                      }`}
                    >
                      <p>Sim, eu compreendo</p>
                      <span className="flex justify-center mt-5 text-white">
                        <BiLinkExternal />
                      </span>
                    </div>
                  </p>

                  <div
                    className={`absolute inset-0 w-full bg-white animate-progressFill ${
                      availableUrl && "group-hover:bg-[#5D3FD3]"
                    }  transition-all duration-300`}
                  ></div>
                </a>
              </div>
            </div>
          </motion.div>
          <div
            onClick={() => handleOpenModal()}
            className="absolute w-full h-full bg-zinc-900/90 -z-10"
          ></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
