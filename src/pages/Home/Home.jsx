import featuredImage from "../../assets/images/home/featured.jpg";
import saladImg from "../../assets/images/home/slide1.jpg";
import Banner from "../../components/Home/Banner";
import Category from "../../components/Home/Category";
import FeaturedCard from "../../components/Home/FeaturedCard";
import FoodMenu from "../../components/Home/FoodMenu";
import RecommendCard from "../../components/Home/RecommendCard";
import Button from "../../components/shared/Button";
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
          <FeaturedCard>
            <h2 className="text-5xl mb-2 uppercase">Bite Point</h2>
            <p className="text-base">
              Experience a perfect fusion of flavor and atmosphere. At Bite
              Point, we serve handcrafted dishes made from the freshest
              ingredients, all in a cozy and welcoming setting. Whether you're
              here for a quick bite or a full-course meal, we promise food that
              satisfies and service that makes you feel at home.
            </p>
          </FeaturedCard>
        </section>
        <section className="mb-32">
          <SectionTitle subtitle="---Check It Out---" title="from our menu" />
          <FoodMenu />
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
              <RecommendCard item={item} index={index} />
            ))}
          </div>
        </section>
      </main>
      <section
        className="bg-cover bg-center h-[850px] py-5 mb-32"
        style={{ backgroundImage: `url(${featuredImage})` }}
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
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Button />
          </div>
        </div>
      </section>
      <section className="mb-32 w-[1320px] mx-auto">
        <SectionTitle
          title="TESTIMONIALS"
          subtitle="---What Our Clients Say---"
        />
        <div>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          
        </div>
      </section>
    </>
  );
}
