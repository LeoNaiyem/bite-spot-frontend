import featuredBg from "../../assets/images/home/chef-service.jpg";
import featuredImage from "../../assets/images/home/featured.jpg";
import { default as menu1, default as saladImg } from "../../assets/images/home/slide1.jpg";
import menu2 from "../../assets/images/home/slide2.jpg";
import {
  default as menu3,
  default as menu6,
} from "../../assets/images/home/slide3.jpg";
import menu4 from "../../assets/images/home/slide4.jpg";
import menu5 from "../../assets/images/home/slide5.jpg";
import Banner from "../../components/Home/Banner";
import Category from "../../components/Home/Category";
import FoodMenu from "../../components/Home/FoodMenu";
import RecommendCard from "../../components/Home/RecommendCard";
import Testimonials from "../../components/Home/Testimonials";

import { Parallax } from "react-parallax";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import Button from "../../components/shared/Button";
import CoverImage from "../../components/shared/CoverImage";
import SectionTitle from "../../components/shared/SectionTitle";

export default function Home() {
  const recommendItems = [
    {
      _id: 1,
      img: saladImg,
      title: "Caeser Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      _id: 2,
      img: saladImg,
      title: "Caeser Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      _id: 3,
      img: saladImg,
      title: "Caeser Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
  ];
  const menuItems = [
    {
      _id: 1,
      img: menu1,
      title: "ROAST DUCK BREAST",
      description:
        "Tender duck breast roasted to perfection, served medium-rare with creamy gratin potatoes and a rich griottine cherry sauce.",
      price: "$14.5",
    },
    {
      _id: 2,
      img: menu2,
      title: "TUNA NIÇOISE",
      description:
        "Seared tuna steak served with baby potatoes, green beans, olives, cherry tomatoes, and a classic Dijon vinaigrette.",
      price: "$13.0",
    },
    {
      _id: 3,
      img: menu3,
      title: "ESCALOPE DE VEAU",
      description:
        "Pan-seared veal escalope with a creamy white wine and mushroom sauce, accompanied by seasonal vegetables.",
      price: "$15.5",
    },
    {
      _id: 4,
      img: menu4,
      title: "CHICKEN AND WALNUT SALAD",
      description:
        "Grilled chicken breast over mixed greens with toasted walnuts, apple slices, and a honey mustard dressing.",
      price: "$11.5",
    },
    {
      _id: 5,
      img: menu5,
      title: "FISH PARMENTIER",
      description:
        "Flaky white fish layered with mashed potatoes, seasoned with garlic and herbs, then baked until golden.",
      price: "$12.0",
    },
    {
      _id: 6,
      img: menu6,
      title: "ROASTED PORK BELLY",
      description:
        "Slow-roasted pork belly with crispy crackling, served with caramelized apples and a cider reduction.",
      price: "$14.0",
    },
  ];
  return (
    <>
      <section>
        <Banner />
      </section>
      <main className="max-w-[1320px] mx-auto">
        <section className="mb-24">
          <SectionTitle
            subtitle="---From 11:00am to 10:00pm---"
            title="order online"
          />
          <Category />
        </section>
        <section>
          <CoverImage
            des="Experience a perfect fusion of flavor and atmosphere. At Bite Point,
                      we serve handcrafted dishes made from the freshest ingredients, all
                      in a cozy and welcoming setting. Whether you're here for a quick
                      bite or a full-course meal, we promise food that satisfies and
                      service that makes you feel at home."
            title="bite point"
            bgImage={featuredBg}
            bgColor="white"
          />
        </section>
        <section className="mb-32">
          <SectionTitle subtitle="---Check It Out---" title="from our menu" />
          <FoodMenu btnName="view full menu" items={menuItems} />
        </section>
        <section className="mb-32">
          <div className="h-64 flex justify-center items-center bg-black">
            <h2 className="text-5xl font-semibold text-white">
              Call Us: +88 0192345678910
            </h2>
          </div>
        </section>
        <section className="mb-32">
          <SectionTitle subtitle="---Should Try---" title="CHEF RECOMMENDS" />
          <div className="grid grid-cols-3 gap-6">
            {recommendItems.map((item, index) => (
              <RecommendCard key={item._id} item={item} index={index} />
            ))}
          </div>
        </section>
      </main>
      <section className="bg-cover bg-center h-[850px] py-5 mb-24">
        <Parallax
          blur={{ min: -35, max: 35 }}
          bgImage={featuredImage}
          bgImageAlt="cover image"
          strength={-200}
        >
          <SectionTitle title="FROM OUR MENU" subtitle="---Check it out---" />
          <div className="flex mx-auto gap-16 w-10/12 justify-center items-center">
            <img
              className="w-[650px] h-[400px] shadow"
              src={featuredImage}
              alt="featured image"
            />
            <div className="text-white">
              <h6 className="text-xl">March 20, 2023</h6>
              <p className="text-2xl">WHERE CAN I GET SOME?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <Button borderColor="border-white" btnName="read more" />
            </div>
          </div>
        </Parallax>
      </section>
      <section className="mb-24 w-[1320px] mx-auto">
        <SectionTitle
          title="TESTIMONIALS"
          subtitle="---What Our Clients Say---"
        />
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <Testimonials />
        </Swiper>
      </section>
    </>
  );
}
