"use client";

import { useEffect, useState } from "react";

export default function ShootingStars() {
  const [prevDocumentHeight, setPrevDocumentHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPrevDocumentHeight(document.body.offsetHeight);
    }, 3100);

    const handleResize = () => {
      // Atualiza o estado apenas se a altura do documento for alterada
      if (document.body.offsetHeight !== prevDocumentHeight) {
        setPrevDocumentHeight(document.body.offsetHeight);
      } else {
        return;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [prevDocumentHeight]);

  useEffect(() => {
    const createStar = () => {
      const star = document.createElement("span");
      star.className = "shootingStars";

      star.style.left = `${Math.random() * document.body.scrollWidth}px`;
      star.style.top = `${Math.random() * prevDocumentHeight}px`;

      star.addEventListener("animationiteration", () => {
        // Ajusta a posição da estrela ao final de cada iteração da animação
        star.style.left = `${Math.random() * document.body.scrollWidth}px`;
        star.style.top = `${Math.random() * document.body.scrollHeight}px`;
        star.style.animationDelay = `${Math.random() * 10}s`;
      });

      return star;
    };

    const starsContainer = document.getElementById("stars-container");
    if (starsContainer) {
      starsContainer.style.width = `${document.body.offsetWidth}px`;
      starsContainer.style.height = `${prevDocumentHeight}px`;
    }

    const createStars = (i: number) => {
      setTimeout(function () {
        const star = createStar();
        starsContainer?.appendChild(star);
      }, 10000 * i);
    };

    let i = 0;

    while (i < 5) {
      createStars(i);
      i++;
    }
  }, [prevDocumentHeight]);

  return <div id="stars-container" className="stars-container" />;
}
