import Button from "../shared/Button";
import FoodMenuCard from "./FoodMenuCard";
export default function FoodMenu({items,btnName}) {
  

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {items.map((item) => (
          <FoodMenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-12">
        <Button borderColor="border-black" btnName={btnName} />
      </div>
    </div>
  );
}
