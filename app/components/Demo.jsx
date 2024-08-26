import Image from "next/image";
import "../globals.css";

const Demo = () => {
  return (
    <div className="container gap-4 md:gap-[60px] relative mx-auto flex flex-col md:flex-row items-center justify-center mt-8 mb-8 md:mt-[80px] md:mb-[180px]">
  <div className="text-center md:text-center">
    <p className="font-semibold text-xl md:text-4xl text-[#28a18f]">
      Закажите бесплатную <br /> консультацию по работе <br /> программы!
    </p>
  </div>
  <div className="hidden md:block mt-[-150px]">
    <Image
      src="https://ritm.uz/static/media/arrow.324d7eda.svg"
      className="arrow-icon hidden md:block mt-[24px]"
      alt="arrow"
      width={10}
      height={10}
    />
  </div>
  <div className="w-full md:px-0 px-20 md:w-[400px] mt-8 md:mt-0">
    <label htmlFor="name" className="text-[16px] md:text-[18px]">
      Ваше имя
    </label>
    <br />
    <input
      type="text"
      id="name"
      placeholder="Ваше имя"
      className="w-full h-[50px] md:h-[60px] p-4 rounded-lg outline-none border-4 border-opacity-55 border-[#28a18f]"
    />
    <br />
    <br />
    <label htmlFor="number" className="text-[16px] md:text-[18px]">
      Номер телефона
    </label>
    <br />
    <input
      type="number"
      id="number"
      placeholder="Номер телефона"
      className="w-full h-[50px] md:h-[60px] p-4 rounded-lg outline-none border-4 border-opacity-55 border-[#28a18f]"
    />
    <button
      type="button"
      className="w-full h-[50px] md:h-[60px] bg-[#28a18f] text-white font-semibold rounded-lg outline-none mt-[20px] md:mt-[30px] hover:bg-[#3d877c]"
    >
      Отправить заявку
    </button>
  </div>
</div>

  );
};

export default Demo;
