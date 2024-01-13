/* eslint-disable react/prop-types */
export default function Winner({ winner, restart }) {
  return (
    <div className="text-2xl text-center">
      <p>
        {winner === "Draw" ? (
          <span className="text-red-600">Draw</span>
        ) : (
          `${winner} is the winner`
        )}
      </p>

      <button
        onClick={restart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md m-4"
      >
        Play Again
      </button>
    </div>
  );
}
