import { useState,useEffect } from "react"

export default function Player({active,symbol,initialName,handlePlayername}){
    const [btState,setBtState]=useState(false)
    const [playerName,setPlayerName]=useState(initialName)
    useEffect(() => {
        setPlayerName(initialName)
    }, [initialName])
    
    function handleClick(){
        setBtState((btState)=>(!btState))
        if(btState){
            handlePlayername(playerName,symbol);
        }
    }
    function handleOnChange(event){
        setPlayerName(event.target.value)
    }
    let editableName=<span className="player-name">{playerName}</span>
    if(btState){
        editableName=<input type="text" onChange={handleOnChange} value={playerName} ></input>
    }
    return(
        <li className={active ? "active" : ""}>
            <div className="player">
                 {editableName}
                <span className="player-symbol">{symbol}</span>
            </div>
            <button onClick={handleClick}>{btState?"save":"edit"}</button>
        </li>
    
    )
}