export default function Button({ btnName, borderColor }) {
  return (
    <button
      className={`hover:bg-black hover:text-white mt-4 border-b-2 ${borderColor} rounded-lg px-8 py-5 uppercase font-medium`}
    >
      {btnName}
    </button>
  );
}
