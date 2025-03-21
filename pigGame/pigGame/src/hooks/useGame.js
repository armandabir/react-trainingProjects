import { useState } from "react";

export function useGame(){
    const [die,setDie]=useState(1);
    const [activePlayer,setActivePlayer]=useState(0);
    const [scores,setScores]=useState([0,0]);
    const [currentScore,setCurrntScore]=useState(0);
    const [isPlaying,setIsPlaying]=useState(true)

    function changeActivePlayer(){
        setActivePlayer((prvPlayer)=>prvPlayer==1?0:1)
    }

    function handleRollClick(){
        if (!isPlaying) return;
        const randNum=Math.trunc(Math.random()*6)+1;
        setDie(randNum);
        if(randNum!=1){
            setCurrntScore((prvScore)=> prvScore + randNum);
        }else{
            changeActivePlayer();
            setCurrntScore(0)
        }
       
    }

    function onHoldClick(){
        if(!isPlaying) return;
   
        
        let newScores=[...scores];
        newScores[activePlayer]+=currentScore;
        setScores(newScores);
        setCurrntScore(0);
        if(newScores[activePlayer]>=100){
            setIsPlaying(false);
            
        }else{
            changeActivePlayer();
        }
 
        

    }

    function newGame(){
        setCurrntScore(0);
        setScores([0,0]);
        setActivePlayer(0)
        setIsPlaying(true);
    }
    
    return {die,handleRollClick,activePlayer,currentScore,onHoldClick,scores,newGame};
}