export default function SectionTitle({subtitle,title}) {
  return (
    <div className=" w-1/3 mx-auto mt-16 mb-12">
      <div className="flex justify-center items-center flex-col">
        <p className="italic capitalize text-yellow-500 text-xl">
          {subtitle}
        </p>
        <div className="divider"></div>
        <h3 className="uppercase text-4xl">{title}</h3>
        <div className="divider"></div>
      </div>
    </div>
  );
}
