"use client";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookies } from "next-client-cookies";

const Intro = () => {
  const cookies = useCookies();
  const isOldVisitor = cookies.get("oldvisitor");
  const [showIntro, setShowIntro] = useState(true);
  const introText = "Olá, eu me chamo Diogo!";
  const words = introText.split(" ");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timeoutId = setTimeout(() => {
      document.body.style.overflowY = "auto";
      setShowIntro(false);
    }, 1800);

    return () => clearTimeout(timeoutId);
  }, []);

  const container = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      scale: 1,
      delay: 0.5,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        ease: "linear",
        duration: 2,
        damping: 18,
        stiffness: 50,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0,
      delay: 0.5,
      x: 10,
      y: 40,
      transition: {
        type: "spring",
        ease: "linear",
        duration: 2,
        damping: 18,
        stiffness: 50,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };

  const setOldVisitor = useCallback(() => {
    cookies.set("oldvisitor", "true");
  }, [cookies]);

  if (!isOldVisitor) {
    return (
      <AnimatePresence onExitComplete={setOldVisitor} mode="wait">
        {showIntro && (
          <motion.div
            variants={container}
            animate="visible"
            initial="hidden"
            exit="exit"
            className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-zinc-950 text-white z-50"
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                className="mr-2 text-xl md:text-4xl"
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    );
  } else {
    return null;
  }
};

export default Intro;
