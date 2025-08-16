import { Parallax } from "react-parallax";

export default function CoverImage({ title, des, bgImage, bgColor }) {
  return (
    <Parallax
      blur={{ min: -35, max: 35 }}
      bgImage={bgImage}
      bgImageAlt="cover image"
      strength={-200}
    >
      <div className="h-[572px] bg-cover bg-center flex justify-center items-center">
        <div
          className={`${
            bgColor === "white" ? "text-black bg-white/60" : "text-white bg-black/60"
          } text-center h-2/3 w-3/4 px-40 py-24 flex justify-center items-center flex-col`}
        >
          <h2 className="text-5xl mb-2 uppercase">{title}</h2>
          <p className="text-base">{des} </p>
        </div>
      </div>
    </Parallax>
  );
}
