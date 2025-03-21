import Player from "./Player";

export default function Players({playersName,turn,onChangeName}){
    console.log(playersName)
    return(
        <ol id="players" className="highlight-player">
            <Player symbol="X" handlePlayername={onChangeName} initialName={playersName.X} active={turn=="X"}/>
            <Player symbol="O" handlePlayername={onChangeName} initialName={playersName.O} active={turn=="O"}/>
        </ol>
    )
}