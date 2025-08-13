
export default function FoodMenuCard({item}) {
    const {img,title,description,price}=item;
  return (
    <div className="flex justify-between">
      <div className="w-[150px] h-[100px]">
        <img
          className="w-full h-full border-4 border-black/10 rounded-tr-full rounded-tl-none rounded-bl-full rounded-br-full object-cover"
          src={img}
          alt="menu"
        />
      </div>
      <div className="ml-8">
        <h6 className="text-xl">{title} ------------------</h6>
        <p className="text-gray-500">{description}</p>
      </div>
      <p className="text-xl text-yellow-500">{price}</p>
    </div>
  );
}
