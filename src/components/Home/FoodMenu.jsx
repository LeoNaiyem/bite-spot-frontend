import menu1 from "../../assets/images/home/slide1.jpg";
import menu2 from "../../assets/images/home/slide2.jpg";
import {
    default as menu3,
    default as menu6,
} from "../../assets/images/home/slide3.jpg";
import menu4 from "../../assets/images/home/slide4.jpg";
import menu5 from "../../assets/images/home/slide5.jpg";
import FoodMenuCard from "./FoodMenuCard";
export default function FoodMenu() {
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
    <div>
      <div className="grid grid-cols-2 gap-6">
        {menuItems.map((item) => (
          <FoodMenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className="border-b-2 border-[#1F2937] rounded-lg px-8 py-5 uppercase font-medium">
          view full menu
        </button>
      </div>
    </div>
  );
}
