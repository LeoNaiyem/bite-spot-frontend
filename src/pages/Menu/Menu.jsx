import menu1 from "../../assets/images/home/slide1.jpg";
import menu2 from "../../assets/images/home/slide2.jpg";
import {
    default as menu3,
    default as menu6,
} from "../../assets/images/home/slide3.jpg";
import menu4 from "../../assets/images/home/slide4.jpg";
import menu5 from "../../assets/images/home/slide5.jpg";
import bgImage from "../../assets/images/menu/banner3.jpg";
import dessertBg from "../../assets/images/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/images/menu/pizza-bg.jpg";
import saladBg from "../../assets/images/menu/salad-bg.jpg";
import soupsBg from "../../assets/images/menu/soup-bg.jpg";
import FoodMenu from "../../components/Home/FoodMenu";
import CoverImage from "../../components/shared/CoverImage";
import SectionTitle from "../../components/shared/SectionTitle";

const Menu = () => {
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
    <div className="min-h-screen">
      <CoverImage title="our menu" des="WOULD YOU LIKE TO TRY A DISH?" bgImage={bgImage} bgColor="black" />
      <section className="max-w-[1320px] mx-auto mb-24">
        <SectionTitle title="today's offer" subtitle="don't miss" />
        <FoodMenu btnName="order your favorite food" items={menuItems} />
      </section>

      {/* dessert section */}
      <CoverImage title="dessert" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgImage={dessertBg} bgColor="black" />
      <section className="max-w-[1320px] mx-auto my-24">
        <FoodMenu btnName="order your favorite food" items={menuItems} />
      </section>

      {/* pizza section */}
      <CoverImage title="Pizza" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgImage={pizzaBg} bgColor="black" />
      <section className="max-w-[1320px] mx-auto my-24">
        <FoodMenu btnName="order your favorite food" items={menuItems} />
      </section>

      {/* salads section */}
      <CoverImage title="Salads" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgImage={saladBg} bgColor="black" />
      <section className="max-w-[1320px] mx-auto my-24">
        <FoodMenu btnName="order your favorite food" items={menuItems} />
      </section>

      {/* soups section */}
      <CoverImage title="soups" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgImage={soupsBg} bgColor="black" />
      <section className="max-w-[1320px] mx-auto my-24">
        <FoodMenu btnName="order your favorite food" items={menuItems} />
      </section>
    </div>
  );
}

export default Menu