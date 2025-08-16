import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "JANE DOE",
      rating: 1,
      quote:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose. It’s a long established fact that a reader will be distracted by the layout.",
    },
    {
      id: 2,
      name: "MICHAEL SMITH",
      rating: 3,
      quote:
        "Absolutely amazing food and atmosphere! Everything from the service to the dessert was flawless. Highly recommend Bite Point!",
    },
    {
      id: 3,
      name: "EMILY JOHNSON",
      rating: 3,
      quote:
        "Good experience overall. The starters were excellent, but the main course could use more seasoning. Still, a great place for casual dining.",
    },
    {
      id: 4,
      name: "DAVID LEE",
      rating: 5,
      quote:
        "Hands down the best dining experience I’ve had this year. The flavors were bold and fresh, and the service was warm and welcoming.",
    },
    {
      id: 5,
      name: "SOPHIA MARTINEZ",
      rating: 4,
      quote:
        "Loved the ambiance and presentation. The staff was attentive, and the food came out quickly. Definitely coming back again!",
    },
  ];

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonials.map((item) => (
          <SwiperSlide key={item.id} className="text-center">
            <div className="w-4/5 mx-auto flex justify-center items-center flex-col">
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <FaQuoteLeft className="text-8xl my-10" />
              <p>{item.quote}</p>
              <h4 className="text-3xl font-semibold mt-1 text-yellow-500">
                {item.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
