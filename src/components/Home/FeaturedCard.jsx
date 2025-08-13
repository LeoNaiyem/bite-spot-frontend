import bg from "../../assets/images/home/chef-service.jpg";

export default function FeaturedCard({ children }) {
  return (
    <div
      className="h-[572px] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center m-28 h-2/3 px-40 py-24 bg-white/80 flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
}
