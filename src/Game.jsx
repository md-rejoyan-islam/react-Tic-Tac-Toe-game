import { useState } from "react";
import Play from "./components/Play";

/* eslint-disable react/prop-types */

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isONext, setIsONext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setIsONext(!isONext);
    const newHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
  }

  function restart() {
    setIsONext(true);
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className="wrPlayer sm:my-10 rounded-lg p-10 sm:border border-gray-300 w-fit mx-auto  font-[inter]">
      <div className="header pb-4">
        <h1 className="text-4xl font-bold text-center pb-2">Tic Tac Toe</h1>
        <hr className="h-[1px] border-none bg-gray-200" />
      </div>
      <div className="container flex justify-center gap-12 flex-wrap md:flex-nowrap">
        {/* play ground  */}
        <Play
          isONext={isONext}
          onPlay={handlePlay}
          squares={currentSquares}
          restart={restart}
          currentMove={currentMove}
        />
        {/* history  */}
        <div className="history w-full">
          <h2 className="text-xl font-bold text-center">History</h2>
          <ul className="border py-4 pr-4 pl-9 mt-2 rounded-md text-[17px] min-w-40">
            {history.map((item, index) => {
              return (
                <li
                  key={index}
                  className="list-decimal  list-outside list-item"
                >
                  <button
                    onClick={() => {
                      setCurrentMove(index);
                      setIsONext(index % 2 === 0);
                    }}
                  >
                    <span className="bg-gray-300 rounded-sm text-sm px-1">
                      {index > 0 ? "Go to move #" + index : "Go to start"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
