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
   <div className="bg-[#0e685a]">
     <div className=" md:h-[230px] p-4 md:p-6 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <Image
            src={Footer_logo}
            alt="logo_image"
            className="mx-auto w-[170px] md:mt-6 md:w-[220px] md:mx-0"
          />
        </div>
        <div className="space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Image
              src={Location_image}
              alt="location_image"
              className="w-[25px] md:w-[33px] md:ml-1"
            />
            <p className="text-white text-sm md:text-[18px] md:mt-1 ml-2">
              Узбекистан, Ташкент, Мизро-Улугбекский район.
            </p>
          </div>
          <div className="flex flex-col ml-1 md:ml-0 md:flex-row space-y-4 md:space-y-0 md:space-x-7">
            <div className="flex items-center md:mt-4">
              <Image
                src={Phone_image}
                alt="phone_image"
                className="w-[23px] md:w-[30px] md:ml-2 hover:animate-vibrate-onces"
              />
              <a
                href="tel:+998712001133"
                className="text-white text-sm md:text-xl  md:ml-2 ml-2"
              >
                +998 71 200 11 33
              </a>
            </div>
            <div className="flex items-center">
              <Image
                src={Mail}
                alt="mail_image"
                className="w-[23px] md:w-[28px] md:mt-4"
              />
              <a
                href="mailto:hi@houselab.uz"
                className="text-white text-sm md:text-xl md:mt-4 md:ml-2 ml-2"
              >
                hi@houselab.uz
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="opacity-80 mt-6 md:mt-7 mb-6 md:mb-9" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:mb-4">
          <p className="text-white text-sm md:text-base hidden md:block md:ml-0 opacity-80 text-center md:text-left">
            © 2024 Copyright. HouseLab. Все права защищены.
          </p>
        </div>
        <div className="flex space-x-3 md:mt-[-15px]">
          <button
            className="hover:scale-110 transition-transform w-[35px] h-[35px] md:w-[40px] md:h-[40px] bg-[#28a18f] rounded-full flex items-center justify-center"
            onClick={() => (window.location.href = "https://t.me/endless_live")}
          >
            <Image
              src={Telegram}
              alt="telegram-image"
              className="w-[25px] md:w-[30px]"
            />
          </button>
          <button
            className="hover:scale-110 transition-transform w-[35px] h-[35px] md:w-[40px] md:h-[40px] bg-[#28a18f] rounded-full flex items-center justify-center"
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/abdukadirovv._a/")
            }
          >
            <Image
              src={Instagram}
              alt="instagram-image"
              className="w-[18px] md:w-[22px]"
            />
          </button>
          <button
            className="hover:scale-110 transition-transform w-[35px] h-[35px] md:w-[40px] md:h-[40px] bg-[#28a18f] rounded-full flex items-center justify-center"
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/profile.php?id=100089769144656")
            }
          >
            <Image
              src={Facebook}
              alt="facebook-image"
              className="w-[18px] md:w-[22px]"
            />
          </button>
        </div>
        <p className="text-white text-sm mt-4 md:mt-0 md:hidden md:text-base md:ml-4 opacity-80 text-center md:text-left">
          © 2024 Copyright. HouseLab. Все права защищены.
        </p>
      </div>
    </div>
   </div>
  );
};

export default Footer;
