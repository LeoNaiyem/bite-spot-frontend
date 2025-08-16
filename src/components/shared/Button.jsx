export default function Button({ btnName, borderColor }) {
  return (
    <button
      className={`hover:bg-black mt-4 border-b-2 border-${borderColor} text-white rounded-lg px-8 py-5 uppercase font-medium`}
    >
      {btnName}
    </button>
  );
}
