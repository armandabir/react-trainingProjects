export default function({winner,draw,handleOnRestart}){
    return (
       <div id="game-over">
             {winner && <h2>winner is {winner}</h2>}
             {draw && <p> draw! game has no winner</p>}
             <button onClick={handleOnRestart}>Restart</button>
       </div>
    )
}