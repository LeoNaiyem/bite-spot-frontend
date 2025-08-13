import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../assets/images/home/slide1.jpg";
import slide2 from "../../assets/images/home/slide2.jpg";
import slide3 from "../../assets/images/home/slide3.jpg";
import slide4 from "../../assets/images/home/slide4.jpg";
import slide5 from "../../assets/images/home/slide5.jpg";

export default function Category() {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="w-full h-96 object-cover relative" src={slide1} alt="slide1" />
        <p className="category-name">Salads</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-96 object-cover relative" src={slide2} alt="slide2" />
        <p className="category-name">Soups</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-96 object-cover relative" src={slide3} alt="slide3" />
        <p className="category-name">pizzas</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-96 object-cover relative" src={slide4} alt="slide4" />
        <p className="category-name">desserts</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-96 object-cover relative" src={slide2} alt="slide2" />
        <p className="category-name">Salads</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-96 object-cover relative" src={slide3} alt="slide3" />
        <p className="category-name">pizzas</p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-96 object-cover relative" src={slide5} alt="slide5" />
        <p className="category-name">Salads</p>
      </SwiperSlide>
    </Swiper>
  );
}
