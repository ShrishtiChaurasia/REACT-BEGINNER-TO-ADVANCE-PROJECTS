import React, { useState } from 'react';

export default function game(){
    const [moves, setMoves] = useState({ blue: 0, green: 0, red: 0, yellow: 0 });

    let updateBlue = () => {
        setMoves((preVmoves) => {
            return{...preVmoves, blue: preVmoves.blue+1};
        })
    }
    let updateGreen = () => {
        setMoves((preVmoves) => {
            return{...preVmoves, green: preVmoves.green+1};
        })
    }
    let updateRed = () => {
        setMoves((preVmoves) => {
            return{...preVmoves, red: preVmoves.red+1};
        })
    }
    let updateYellow = () => {
        setMoves((preVmoves) => {
            return{...preVmoves, yellow: preVmoves.yellow+1};
        })
    }
    return(
        <div>
            <p>LUDOBOARD</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor : "yellow"}} onClick={updateYellow}>+1</button>
            </div>
        </div>
    )
}