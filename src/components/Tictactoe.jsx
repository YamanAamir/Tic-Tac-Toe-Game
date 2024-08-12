import React, { useState } from 'react'
import Square from './Square'

function Tictactoe() {

    const [square, setSquare] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true);


    const handleClick = (i) => {
        if (square[i] || calculateWinner(square)) return;

        const newSquares = square.slice()
        newSquares[i] = isXNext ? 'X' : 'O';
        setSquare(newSquares)
        setIsXNext(!isXNext)
    }
    // const renderSquare = (i) => {
    //     <Square value={square[i]} onClick={() => handleClick(i)} />
    // }
    const renderSquare = (i) => {
        return <Square value={square[i]} onClick={() => handleClick(i)} />;
    };

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null;
    };
    const winner = calculateWinner(square)
    const status = winner ? `Winner: PLayer(${winner})` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="text-center text-4xl font-sans font-bold pt-5 text-white">TIC TAC TOE</div>
            <div className="text-center text-2xl font-mono text-white py-5 pt-16">{status}</div>
            <div className="p-3 xs:w-auto  rounded-lg mx-10 border">
                <div className="board-row flex flex-row justify-center items-center w-full">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row flex flex-row justify-center items-center w-full">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row flex flex-row justify-center items-center w-full">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <button className='text-black font-bold hover:px-16 duration-200 py-3 my-5 border px-10 rounded-full bg-white'
                onClick={() => setSquare(Array(9).fill(null))}
            >RESET</button>
        </div>
    )
}

export default Tictactoe
