"use client";

import { useEffect, useRef, useState } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth = cardsRef.current[0].clientWidth + 16;
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(index);
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    scrollContainerRef.current.scrollTo({
      left: cardsRef.current[index].offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className=" hidden md:block">
        <section className="bg-gray-50 py-12 md:h-[650px]">
          <h2 className="text-center text-3xl font-bold text-[#28a18f]  mb-10">
            Отзывы клиентов
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <div className="flex items-center mb-4">
                <img
                  src="path_to_image"
                  alt="Anvar Ilhomov"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Анвар Илhomов</h3>
                  <p className="text-sm text-gray-500">Менеджер по развитию</p>
                </div>
              </div>
              <p className="text-gray-700">
                Результатом внедрения системы у нас, стал рост прибыли, за счёт
                роста продаж и уменьшения затрат. Статистика системы позволила
                принимать правильные и обоснованные данными решения, и
                сконцентрироваться на ликвидных позициях нашей продукции.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <div className="flex items-center mb-4">
                <img
                  src="path_to_image"
                  alt="Ravshan Karimov"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Равшан Каримов</h3>
                  <p className="text-sm text-gray-500">
                    Коммерческий директор в Global OIL
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                Среди всех ERP-систем мы решили выбрать ERP-систему компании
                «Ритм», так как помимо эффективного программного обеспечения для
                автоматизации бизнеса разработчики предоставляют лучший сервис
                для клиентов. Поскольку «Ритм» прост в использовании, даже новый
                сотрудник может легко понять, как он работает, и может
                использовать его без каких-либо хлопот с первого дня. Эта
                программа помогает любой организации любого размера.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="md:hidden">
  <section className="bg-gray-50 py-12 md:h-[650px]">
    <h2 className="text-center text-3xl font-bold text-[#28a18f] mb-10">
      Отзывы клиентов
    </h2>
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-auto p-2 snap-x gap-4 snap-mandatory"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {["path_to_image", "path_to_image"].map((image, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="bg-white p-6  rounded-3xl shadow-xl h-[350px] w-full flex-shrink-0 snap-center"
        >
          <div className="flex items-center mb-4">
            <img
              src={image}
              alt={`Reviewer ${index + 1}`}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">User {index + 1}</h3>
              <p className="text-sm text-gray-500">Position</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Результатом внедрения системы у нас, стал рост прибыли, за счёт роста продаж и уменьшения затрат. Статистика системы позволила принимать правильные и обоснованные данными решения, и сконцентрироваться на ликвидных позициях нашей продукции.
          </p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      {["path_to_image", "path_to_image"].map((_, index) => (
        <button
          key={index}
          className={`mx-2 w-3 h-3 rounded-full ${
            currentIndex === index ? "bg-[#28a18f]" : "bg-gray-300"
          }`}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  </section>
</div>




    </div>
  );
};

export default Reviews;







// import { useEffect, useState } from 'react';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // Replace with your actual API endpoint
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch('https://api.example.com/reviews'); // Your API URL
//         const data = await response.json();
//         setReviews(data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <div className="">
//       <section className="bg-gray-50 py-12 md:h-[650px]">
//         <h2 className="text-center text-3xl font-bold text-[#28a18f] mb-10">Отзывы клиентов</h2>
//         <div className="flex justify-center space-x-8">
//           {reviews.map((review) => (
//             <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
//               <div className="flex items-center mb-4">
//                 <img
//                   src={review.imageUrl}
//                   alt={review.name}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold">{review.name}</h3>
//                   <p className="text-sm text-gray-500">{review.position}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">{review.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Reviews;