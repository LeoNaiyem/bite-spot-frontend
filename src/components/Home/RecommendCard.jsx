export default function RecommendCard({ item, index }) {
  const { img, title, description } = item;
  return (
    <div className="bg-gray-100">
      <img className="w-full h-64 object-cover" src={img} alt={title} />
      <div className="px-12 py-6 text-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <button
          className={`
            uppercase mt-6 px-5 font-semibold 
            rounded-lg py-4 border-b-2 text-yellow-500 border-yellow-500
            ${
              index === 1
                ? "bg-black hover:bg-slate-200"
                : "bg-slate-200 hover:bg-black "
            }
            
            `}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
