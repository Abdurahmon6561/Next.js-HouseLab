"use client"
import Image from "next/image";
import Obyect from "../../public/obyekt.png";
import { useEffect, useState } from 'react';

const Sistem = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); 
        }
      },
      {
        threshold: 0.1, 
      }
    );

    const element = document.getElementById('sistem-image');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      id="sistem"
      className="bg-slate-100 flex flex-col md:flex-row items-center justify-center md:justify-between h-auto md:h-[650px] mt-8 md:mt-[170px] mb-8 md:mb-[120px] p-4 md:p-0"
    >
      <div className="text-center md:text-left md:ml-8">
        <h2 className="text-[#28a18f] font-semibold text-2xl md:text-3xl mb-4">
          ОБЪЕКТЫ
        </h2>
        <p className="text-lg md:text-xl w-full md:w-[700px] opacity-55 font-medium mb-2">
          HOUSELAB разработан для управления как жилыми, так и коммерческими
          объектами. Будь то офисы, торговые площади, склады или первичное
          жилье, все эти типы недвижимости легко обрабатываются в системе
          HOUSELAB. Вы можете добавлять, редактировать и удалять объекты.
        </p>
      </div>
      <Image
        id="sistem-image"
        className={`w-full md:mr-[60px] md:w-[600px] h-auto mt-8 md:mt-0 transition-transform duration-1000 ${inView ? 'animate-slide-in' : 'opacity-0'}`}
        src={Obyect}
        alt="Sistem image"
      />
    </div>
  );
};

export default Sistem;
