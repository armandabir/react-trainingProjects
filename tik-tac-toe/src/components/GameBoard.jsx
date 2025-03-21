import { useState } from "react"


export default function GameBoard({onSelectSquare,gameBoard}){
    function handleClick(ri,ci){
            onSelectSquare(ri,ci)
        }
    return (
        <ol id="game-board">
            {gameBoard.map((row,ri)=>(
            <li key={ri}>
                <ol>
                    {row.map((col,ci)=>(<li key={ci}><button disabled={col!=null} onClick={()=>handleClick(ri,ci)}>{col}</button></li>))}
                </ol>
            </li>))
                
                }
        </ol>
    )


}