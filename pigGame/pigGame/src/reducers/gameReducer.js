export const initialState={
    die:1,
    activePlayer:0,
    scores:[0,0],
    currentScore:0,
    isPlaying:true
}

export const gameReducer=(state,action)=>{
    switch (action.type) {
        case "ROLL_DICE":
            if(!state.isPlaying) return state;
            const randNum=Math.trunc(Math.random()*6)+1;
            const currentScore=state.currentScore + randNum;
            if(randNum==1){
                const activePlayer=state.activePlayer==1?0:1;
                const currentScore=0;
                return {...state,die:randNum,currentScore,activePlayer}
            }
            return {...state,die:randNum,currentScore}
            break;

            case "ON_HOLD":
                if(!state.isPlaying) return state;
                let newScores={...state.scores};
                newScores[state.activePlayer]+=state.currentScore;
                if(newScores[state.activePlayer]>=100){
                    return {...state,isPlaying:false,scores:newScores}
                }
                const activePlayer=state.activePlayer==1?0:1;
                return {...state,scores:newScores,activePlayer,currentScore:0}
            case "NEW_GAME":
                return initialState;
        default:
            return state;
    }
}