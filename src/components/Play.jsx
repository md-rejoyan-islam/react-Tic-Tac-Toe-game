/* eslint-disable react/prop-types */
import Square from "./Square";
import Winner from "./Winner";

function calculateWinter(winner, isONext) {
  const winArray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [1, 4, 7],
    [3, 4, 5],
  ];
  let isWinner = false;
  for (let i = 0; i < winArray.length; i++) {
    if (
      winner[winArray[i][0]] &&
      winner[winArray[i][0]] === winner[winArray[i][1]] &&
      winner[winArray[i][0]] === winner[winArray[i][2]]
    ) {
      isWinner = isONext ? "O" : "X";
    }
  }
  return isWinner;
}

export default function Play({
  isONext,
  squares,
  onPlay,
  restart,
  currentMove,
}) {
  const winner = calculateWinter(squares, isONext);

  const handleClick = (value) => {
    if (squares[value]) return;
    if (calculateWinter(squares, isONext)) {
      return;
    }
    const newSquare = [...squares];
    isONext ? (newSquare[value] = "X") : (newSquare[value] = "O");
    onPlay(newSquare);
  };

  return (
    <div className="container">
      <h2 className="text-xl text-center font-bold">
        {/* winner  */}
        {winner && <Winner winner={winner} restart={restart} />}
        {/* next player  */}
        {!winner && currentMove < 9 && `Next Player :  ${isONext ? "X" : "O"}`}
        {/* draw  */}
        {currentMove === 9 && !winner && (
          <Winner winner="Draw" restart={restart} />
        )}
      </h2>
      <div className="grid grid-cols-3 w-[350px] mt-2 mx-auto p-4 border rounded-md">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <Square
              key={index}
              value={squares[index]}
              handleClick={() => {
                handleClick(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
