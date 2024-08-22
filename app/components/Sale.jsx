"use client"
import Image from "next/image";
import Pre from "../../public/sale.png";
import { useEffect, useState } from "react";

const Prezentation = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const imageElement = document.getElementById("prezentation-image");
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-around mt-24 mb-24 p-4 md:p-0">
      <div className="flex flex-col items-center md:items-start md:order-1 order-2 text-center md:text-left">
        <h1 className="text-[#28a18f] font-semibold text-2xl md:text-3xl mb-4">
          ПРОДАЖА
        </h1>
        <p className="p-2 w-full md:w-[700px] text-lg md:text-xl opacity-55 font-medium">
          Интерактивная таблица новостроек. С помощью удобной и
          многофункциональной шахматки вы мгновенно получаете доступ ко всей
          нужной информации: выбирайте квартиру, устанавливайте цены,
          просматривайте планировки, бронируйте и заключайте договоры.
        </p>
      </div>
      <Image
        id="prezentation-image"
        className={`w-full mb-[60px] md:w-[450px] h-auto mt-8 md:mt-0 transition-transform duration-1000 ${isImageVisible ? "slide-in-left" : "opacity-0"}`}
        src={Pre}
        alt="Prezentation image"
      />
    </div>
  );
};

export default Prezentation;
