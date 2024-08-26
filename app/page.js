"use client";
import { useEffect, useRef, useState } from "react";
import Sistem from "./components/Sistem";
import Objects from "./components/Objects";
import Sale from "./components/Sale";
import Reviews from "./components/Reviews";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

import Logo from "../public/logo.svg";
import "./globals.css";
import "./animation.css";
import Image from "next/image";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Move to Objects
  const objectsRef = useRef(null);

  const handleScrollToObjects = () => {
    console.log("Scrolling to objects");
    if (objectsRef.current) {
      objectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const path = document.querySelector(".animate-draw");
    if (path) {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    }
  }, []);

  return (
    <div className=" content-center container">
      <div className="w-screen h-screen overflow-x-hidden">
        <div className="w-screen h-screen relative bg-[#f8fcfb]">
          {/* Background Animation */}
          <div className=" hidden md:block absolute md:w-full md:h-screen inset-0 z-0 overflow-hidden mt-[320px] ml-[50px] md:ml-[80px] md:mt-[200px]">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100vw" 
              height="100vh" 
              viewBox="0 0 1000 600"
              xmlSpace="preserve"
              className="absolute top-0 left-0"
            >
              <path
                className="path animate-draw"
                fill="none"
                stroke="#54e6d0"
                strokeWidth="2"
                strokeOpacity="0.6"
                d="M789.578,465l0.238-88.323v-7.908l-3.391-0.566l-0.941-25.612l0.189,25.612
      l-4.145,0.188l-6.968-4.709h-7.722l-0.188-16.761l-9.04-2.261l-15.632,1.319l-4.143,0.565l-0.187,2.636l-6.216,1.318l-0.378,40.115
      l-4.142,0.188l-0.19-33.523l-13.183-1.506l-17.136,3.013v2.638h-6.028l-0.377-13.56l-8.662-0.753l-15.632,3.201v11.487
      l-34.087-3.578v-2.826l-15.067-0.188l-0.375-12.807l-5.462-0.375l-11.487-9.04l-11.863,11.675l-3.016,0.189l0.188,36.536
      l-1.319-0.188l-0.188,1.506l-3.955,0.189v3.201l-2.637,0.377v13.559l-5.65-0.188v-12.807l-5.837-0.188l-2.449-170.248l-5.084-3.579
      l-2.315,0.235l-1.882-79.411l-0.514,0.435l-1.218,79.341l-7.067,0.717l-14.499,9.793l-0.19,5.461l-1.13-0.376l0.378,53.674
      l-20.527,0.188l0.563,72.505l-16.008,5.65l0.188,25.612h-3.576v-70.812l-5.086-2.824l-9.982-1.506l-0.188-7.721h-9.039l-0.188,6.966
      l-3.016,0.565l-9.415,7.344v37.29l-17.514-4.143l-1.131-0.188v-33.524l-1.507-0.376l-12.805-14.501l-2.26,0.941l-0.19-5.085
      l-0.753-2.07l-0.565-10.923l-1.316-3.014l0.375,21.658h-6.024l-0.755,5.839l-2.069-0.188l-0.191,8.661v80.981l-4.143,0.189
      l-0.187-19.964c0,0,0,0-1.886,0c-0.375-1.507-1.695-3.39-1.695-3.39h-13.37l-0.189,2.637l-0.94,0.188l-3.767,1.883l-0.377,17.138
      l-17-0.45c-0.142-36.335-0.142-36.376-0.142-36.376l-5.677-0.142l-0.141-5.673l-16.034-0.146l0.143,5.678l-3.547,0.142
      c0,0,0.426-20.29,0.142-21.85c0-0.852-2.129-3.406-13.621-3.121c0-12.631,0-12.631,0-12.631l-21.284,0.143v12.347h-14.898v35.326
      l-9.081,0.146c0,0-0.144-63.852-0.144-67.823c-0.708-2.129-3.688-17.455-82.863-12.346c0,27.809,0,27.809,0,27.809l-16.318,0.143
      l-0.141,15.041h-18.021l-0.284,19.863h-12.486l-0.143-79.74c0,0,1.703-0.569,1.136-4.966c0,0.707-3.264,1.56-3.407-5.534
      c-0.282-1.42-8.655,1.135-9.221-9.084c-0.853-47.249-0.853-47.249-0.853-47.249l-1.418,47.534c0,0,2.128,8.229-15.041,8.514
      c-0.142,1.842-0.142,1.842-0.142,1.842l-2.696,0.285v4.682l0..."
              />
            </svg>
          </div>
          <div className="md:hidden absolute w-[1500px] ml-[-300px] md:h-screen inset-0 z-0 overflow-hidden  mt-[200px]">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="1500px" 
              height="100vh" 
              viewBox="0 0 1000 600"
              xmlSpace="preserve"
              className="absolute top-0 left-0"
            >
              <path
                className="path animate-draw"
                fill="none"
                stroke="#54e6d0"
                strokeWidth="2"
                strokeOpacity="0.6"
                d="M789.578,465l0.238-88.323v-7.908l-3.391-0.566l-0.941-25.612l0.189,25.612
      l-4.145,0.188l-6.968-4.709h-7.722l-0.188-16.761l-9.04-2.261l-15.632,1.319l-4.143,0.565l-0.187,2.636l-6.216,1.318l-0.378,40.115
      l-4.142,0.188l-0.19-33.523l-13.183-1.506l-17.136,3.013v2.638h-6.028l-0.377-13.56l-8.662-0.753l-15.632,3.201v11.487
      l-34.087-3.578v-2.826l-15.067-0.188l-0.375-12.807l-5.462-0.375l-11.487-9.04l-11.863,11.675l-3.016,0.189l0.188,36.536
      l-1.319-0.188l-0.188,1.506l-3.955,0.189v3.201l-2.637,0.377v13.559l-5.65-0.188v-12.807l-5.837-0.188l-2.449-170.248l-5.084-3.579
      l-2.315,0.235l-1.882-79.411l-0.514,0.435l-1.218,79.341l-7.067,0.717l-14.499,9.793l-0.19,5.461l-1.13-0.376l0.378,53.674
      l-20.527,0.188l0.563,72.505l-16.008,5.65l0.188,25.612h-3.576v-70.812l-5.086-2.824l-9.982-1.506l-0.188-7.721h-9.039l-0.188,6.966
      l-3.016,0.565l-9.415,7.344v37.29l-17.514-4.143l-1.131-0.188v-33.524l-1.507-0.376l-12.805-14.501l-2.26,0.941l-0.19-5.085
      l-0.753-2.07l-0.565-10.923l-1.316-3.014l0.375,21.658h-6.024l-0.755,5.839l-2.069-0.188l-0.191,8.661v80.981l-4.143,0.189
      l-0.187-19.964c0,0,0,0-1.886,0c-0.375-1.507-1.695-3.39-1.695-3.39h-13.37l-0.189,2.637l-0.94,0.188l-3.767,1.883l-0.377,17.138
      l-17-0.45c-0.142-36.335-0.142-36.376-0.142-36.376l-5.677-0.142l-0.141-5.673l-16.034-0.146l0.143,5.678l-3.547,0.142
      c0,0,0.426-20.29,0.142-21.85c0-0.852-2.129-3.406-13.621-3.121c0-12.631,0-12.631,0-12.631l-21.284,0.143v12.347h-14.898v35.326
      l-9.081,0.146c0,0-0.144-63.852-0.144-67.823c-0.708-2.129-3.688-17.455-82.863-12.346c0,27.809,0,27.809,0,27.809l-16.318,0.143
      l-0.141,15.041h-18.021l-0.284,19.863h-12.486l-0.143-79.74c0,0,1.703-0.569,1.136-4.966c0,0.707-3.264,1.56-3.407-5.534
      c-0.282-1.42-8.655,1.135-9.221-9.084c-0.853-47.249-0.853-47.249-0.853-47.249l-1.418,47.534c0,0,2.128,8.229-15.041,8.514
      c-0.142,1.842-0.142,1.842-0.142,1.842l-2.696,0.285v4.682l0..."
              />
            </svg>
          </div>
          {/* Background Animation */}

          <div className=" fixed top-0 left-0 right-0 md:backdrop-blur md:bg-white/50  bg-white/95 container  mx-auto  z-10 w-screen p-3 flex items-center justify-between">
            <div>
              <Image
                className="w-[170px] cursor-pointer"
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className="hidden md:flex flex-1 ml-[150px] justify-center"></div>
            <div className="flex gap-2 ml-[-60px]">
              <a
                href="tel:+998712001133"
                className="hidden md:flex items-center mr-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#28a18f"
                  className="w-[22px] hover:animate-vibrate-once"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                +998 71 200 11 33
              </a>

              <a
                href="https://app.houselab.uz/"
                className="hover:bg-slate-200 p-2 rounded-2xl text-[#28a18f] font-medium border-2 transition-transform ease-in-out transform border-[#28a18f] hidden md:block"
                target="_blank"
              >
                Войти
              </a>

              <button
                onClick={handleScrollToObjects}
                className="bg-[#28a18f] hover:bg-[#197063] p-2 rounded-2xl text-white border-2 transition-transform ease-in-out transform border-[#28a18f] hidden md:block"
              >
                Демо-доступ
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
            <div
              className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              } md:hidden`}
            >
              <div className="flex ml-[185px] mt-[-5px] p-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col mt-[-20px] p-4 space-y-4">
                <div className=" flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#28a18f"
                    className="w-[22px] mt-[3px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>

                  <a href="tel:+998712001133" className="items-center ml-[6px]">
                    +998 71 200 11 33
                  </a>
                </div>
              </ul>
              <div className="p-4">
                <button className="hover:bg-slate-200 w-full p-2 rounded-2xl text-[#28a18f] border-[#28a18f] border-2 transition-transform ease-in-out transform">
                  <a href="https://app.houselab.uz/" target="_blank">
                    Войти
                  </a>
                </button>
                <button
                  onClick={handleScrollToObjects}
                  className="bg-[#28a18f] hover:bg-[#197063] border-[#28a18f] w-full mt-4 p-2 rounded-2xl text-white border-2 transition-transform ease-in-out transform"
                >
                  Демо-доступ
                </button>
              </div>
            </div>
          </div>

          <div className="container relative mx-auto flex items-center justify-center min-h-screen ">
            <div className=" text-center py-10 px-4 sm:px-6 lg:px-8">
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
        </div>

        <div className="">
          <Sistem />
          <Objects />
          <Sale />
          <Reviews />
          <div ref={objectsRef}>
            <Demo />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
