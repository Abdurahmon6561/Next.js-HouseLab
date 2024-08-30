"use client";
import { useEffect } from "react";
import styles from "./bubbles.module.css";

const Bubbles = ({ handleScrollToObjects }) => {
  useEffect(() => {
    const createBubbles = () => {
      const section = document.querySelector(`.${styles.section}`);
      const createElement = document.createElement("span");
      const size = Math.random() * 5;

      // Set bubble styles
      createElement.style.width = 30 + size + "px";
      createElement.style.height = 30 + size + "px";
      createElement.style.left = Math.random() * window.innerWidth + "px";
      createElement.style.position = "absolute"; // Ensure absolute positioning
      createElement.style.backgroundColor = "#28a18f"; // Add background color for visibility
      createElement.style.borderRadius = "50%"; // Make it circular
      createElement.style.pointerEvents = "none"; // Prevent interaction with bubbles
      createElement.style.opacity = "0.2"; // Set opacity for bubbles

      section.appendChild(createElement);

      setTimeout(() => {
        section.removeChild(createElement);
      }, 6000);
    };

    const intervalId = setInterval(createBubbles, 900);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <div className="">
      <section className={styles.section}>
        <div className="container relative mx-auto flex items-center justify-center min-h-screen">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-gray-900">
              Простая и недорогая онлайн-платформа для <br /> продажи
              недвижимости
            </h2>
            <h3 className="relative text-base sm:text-lg md:text-xl w-full max-w-4xl mx-auto text-gray-600 mb-8">
              Интуитивно понятный интерфейс, который полностью удовлетворяет
              потребности в продаже недвижимости. Стоимость ниже, чем у других
              решений на рынке. Запишитесь на демонстрацию, чтобы увидеть
              платформу в действии.
            </h3>
            <button
              onClick={handleScrollToObjects}
              className="relative cursor-pointer w-full max-w-xs bg-[#28a18f] text-white py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-[#197063] transition duration-300"
            >
              Записаться на демо
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bubbles;
