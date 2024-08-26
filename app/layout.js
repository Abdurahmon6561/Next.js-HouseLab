import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Ogp from "../public/ogp.png";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weights: ["400", "500", "600", "700"] });

export const metadata = {
  title: "HouseLab - Простая и недорогая онлайн-платформа для продажи недвижимости",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <meta name="description" content="Инновационная платформа для продажи недвижимости с интуитивно понятным интерфейсом. Предлагаем решения по более низкой стоимости, чем у конкурентов. Запишитесь на демонстрацию и оцените эффективность Houselab" />
        <meta name="keywords" content="недвижимость, продажа недвижимости, интуитивный интерфейс, низкая стоимость, демонстрация, Houselab, платформа недвижимости, выгодные решения" />
        <meta property="og:title" content="HouseLab - Простая и недорогая онлайн-платформа для продажи недвижимости" />
        <meta property="og:description" content="Инновационная платформа для продажи недвижимости с интуитивно понятным интерфейсом. Предлагаем решения по более низкой стоимости, чем у конкурентов. Запишитесь на демонстрацию и оцените эффективность Houselab" />
        <meta property="og:image" content={Ogp} />
        <meta property="og:image:secure_url" content={Ogp} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://houselab.uz" />
        <meta property="og:site_name" content="houselab.uz" />
      </Head>
      <body className={`${inter.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
