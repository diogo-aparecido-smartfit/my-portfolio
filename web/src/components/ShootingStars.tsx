"use client";

import { useEffect, useState } from "react";

export default function ShootingStars() {
  const [prevScrollHeight, setPrevScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollHeight = document.body.scrollHeight;

      if (currentScrollHeight !== prevScrollHeight) {
        setPrevScrollHeight(currentScrollHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollHeight]);

  useEffect(() => {
    const createStar = () => {
      const star = document.createElement("span");
      star.className = "shootingStars";
      star.style.left = `${Math.random() * document.body.scrollWidth}px`;
      star.style.top = `${Math.random() * prevScrollHeight}px`;

      star.addEventListener("animationiteration", () => {
        // Ajusta a posição da estrela ao final de cada iteração da animação
        star.style.left = `${Math.random() * document.body.scrollWidth}px`;
        star.style.top = `${Math.random() * prevScrollHeight}px`;
        star.style.animationDelay = `${Math.random() * 10}s`;
      });

      return star;
    };

    const starsContainer = document.getElementById("stars-container");
    if (starsContainer) {
      starsContainer.style.width = `${document.body.offsetWidth}px`;
      starsContainer.style.height = `${prevScrollHeight}px`;
    }

    const createStars = () => {
      for (let i = 0; i < 1; i++) {
        const star = createStar();
        starsContainer?.appendChild(star);
      }
    };

    createStars();
  }, [prevScrollHeight]);

  return <div id="stars-container" className="stars-container" />;
}
