/* eslint-disable react/prop-types */
export default function Square({ value, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="text-2xl border rounded-md border-gray-300 leading-10  m-2 h-20 w-20"
    >
      {value}
    </button>
  );
}
