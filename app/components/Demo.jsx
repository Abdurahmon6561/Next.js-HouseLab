import Image from 'next/image';
import '../globals.css';

const Demo = () => {
  return (
    <div className="flex  flex-col md:flex-row justify-around bg-slate-100 p-8">
      <div className="mt-[90px] md:mt-[90px] md:mr-[-301px]">
        <h2 className="text-4xl font-bold mb-4 text-gray-700 text-center">
          Закажите бесплатную <br /> консультацию по работе <br /> программы!
        </h2>
      </div>
      <Image
        src="https://ritm.uz/static/media/arrow.324d7eda.svg"
        className="arrow-icon hidden md:block mt-[24px]"
        alt="arrow"
        width={10}
        height={10}
      />
      <div className="h-[250px] w-[370px] mt-[40px] md:ml-[-293px] ">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 opacity-80">
            Ваше имя
          </label>
          <input
            className="outline-none border-2 w-[360px] p-3 rounded-lg"
            type="text"
            id="name"
            placeholder="Ваше имя"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block mb-2 opacity-80">
            Номер телефона
          </label>
          <input
            className="outline-none border-2 w-[360px] p-3 rounded-lg"
            type="number"
            id="number"
            placeholder="Номер телефона"
          />
        </div>
        <button
          className="font-medium bg-[#28a18f] hover:bg-[#197063] w-[360px] mt-2 p-3 rounded-xl text-white"
          type="button"
        >
          Отправить заявку
        </button>
      </div>
    </div>
  );
};

export default Demo;
