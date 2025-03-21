import { useReducer } from "react";
import { gameReducer, initialState } from "../reducers/gameReducer";



export function useGame2(){
    const [state,dispatch]=useReducer(gameReducer,initialState);


    function handleRollClick(){
        dispatch({type:"ROLL_DICE"})
    }


    function onHoldClick(){
         dispatch({type:"ON_HOLD"})
    }

    function newGame(){
        dispatch({type:"NEW_GAME"})
    }
    
    return {state,handleRollClick,onHoldClick,newGame}

}