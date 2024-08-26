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
    <div className="bg-gray-50 p-4 mt-11 md:mt-0">
    <div
      id="sistem"
      className="container relative mx-auto flex flex-col md:flex-row gap-4 md:gap-[150px] items-center justify-center mt-8 md:mt-[80px] mb-8 md:mb-[180px]"
    >
      <div className="text-center md:text-left md:ml-8">
        <h2 className="text-[#28a18f] font-semibold text-2xl md:text-3xl mb-4">
          ОБЪЕКТЫ
        </h2>
        <p className="text-sm md:text-xl w-full md:w-[700px] opacity-80 font-medium mb-2">
          HOUSELAB разработан для управления как жилыми, так и коммерческими
          объектами. Будь то офисы, торговые площади, склады или первичное
          жилье, все эти типы недвижимости легко обрабатываются в системе
          HOUSELAB. Вы можете добавлять, редактировать и удалять объекты.
        </p>
      </div>
      <Image
        id="sistem-image"
        className={`w-[500px] md:mr-[60px] md:w-[600px] h-auto mt-8 md:mt-0 transition-transform duration-1000 ${inView ? 'animate-slide-in' : 'opacity-0'}`}
        src={Obyect}
        alt="Sistem image"
      />
    </div>
  </div>
  
  );
};

export default Sistem;
