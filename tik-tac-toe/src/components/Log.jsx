export default function Log({turns}){
    
    return (
        <ol id="log">
            {turns.map((turn)=>(<li key={`${turn.square.ri} ${turn.square.ci}`}>{turn.player} selected {turn.square.ri} {turn.square.ci}</li>))}
        </ol>
    )


}