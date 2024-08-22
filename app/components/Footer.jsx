import Footer_logo from "../../public/footer_logo.svg";
import Location_image from "../../public/location.svg";
import Phone_image from "../../public/phone-call.svg";
import Mail from "../../public/mail.svg";
import Telegram from "../../public/telegram.svg";
import Instagram from "../../public/instagram.svg";
import Facebook from "../../public/facebook.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#0e685a] md:h-[350px]">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between">
          <Image
            src={Footer_logo}
            alt="logo"
            className="w-[260px] md:mt-[-60px] ml-[30px] mx-auto md:mx-0"
          />
          <div className="mt-4 md:mt-0 md:ml-[10px]">
            <div className="flex flex-row md:flex-row items-start md:items-center mt-4 mb-[20px] md:mb-[40px]">
              <Image
                src={Location_image}
                alt="image"
                className="mt-1 w-[20px] md:w-[30px] md:ml-[377px] md:mr-[-262px] h-[20px] ml-[25px] mr-[-158px] md:h-[30px]"
              />
              <h3 className=" md:ml-[273px] md:mt-2 ml-[170px] text-base md:text-xl font-normal text-white">
                Узбекистан, Ташкент, Мизро-Улугбекский район
              </h3>
            </div>
            <div className=" md:mr-[-90px] flex flex-col md:flex-row md:justify-around">
              <div className="flex items-center mb-2 md:mb-0">
                <Image src={Phone_image} alt="image" className=" ml-[-149px] mr-[-163px] h-[20px] md:ml-[55px]" />
                <a
                  className="text-white font-semibold text-base md:ml-[-166px] md:text-xl ml-2"
                  href="tel:+998712001133"
                >
                  +998 71 200 11 33
                </a>
              </div>
              <div className="flex items-center mr-[203px] md:mr-[71px]">
                <Image src={Mail} alt="image" className="h-[20px] ml-[16px] md:ml-[-130px]" />
                <a
                  href="mailto:info@ritm.uz"
                  className="text-white md:ml-[-251px] font-semibold text-base md:text-xl ml-2"
                >
                  info@ritm.uz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-55 mt-[30px] w-full" />
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <h3 className="text-white hidden md:block md:ml-[100px] text-sm md:text-[17px] opacity-80">
          © 2024 Copyright. HouseLab. Все права защищены.
        </h3>

        <div className="flex space-x-4 md:mr-[160px] mt-2 md:mt-0 mb-[20px]">
          <button
            onClick={() => (window.location.href = "https://t.me/endless_live")}
            className="hover:scale-110 transition-transform w-[40px] h-[40px] bg-[#28a18f] rounded-full flex items-center justify-center"
          >
            <Image src={Telegram} alt="icon" className="w-[30px] h-[30px]" />
          </button>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/abdukadirovv._a/")
            }
            className="hover:scale-110 transition-transform w-[40px] h-[40px] bg-[#28a18f] rounded-full flex items-center justify-center"
          >
            <Image src={Instagram} alt="icon" className="w-[20px] h-[22px]" />
          </button>
          <button
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/profile.php?id=100089769144656")
            }
            className="hover:scale-110 transition-transform w-[40px] h-[40px] bg-[#28a18f] rounded-full flex items-center justify-center"
          >
            <Image src={Facebook} alt="icon" className="h-[25px]" />
          </button>
        </div>
        <h3 className="text-white md:hidden text-sm mb-[30px] opacity-80">
          © 2024 Copyright. HouseLab. Все права защищены.
        </h3>
      </div>
    </div>
  );
};

export default Footer;