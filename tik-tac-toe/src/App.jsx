import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Players from "./components/Players"
import {WINNING_COMBINATIONS} from "./assets/winning-combinations"
import Log from "./components/Log"
import GameOver from "./components/GameOver"

 let gameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

 let gameTurn=[];

const intialPlayers={
  X:"player1",
  O:"player2"
}


function App() {
  const [players,setPlayers]=useState(intialPlayers);
  const [activePlayer,setActivePlayer]=useState("X")
  // const[gameBoard,setGameBoard]=useState(initialGameBoard);
  // console.log(gameTurn);
  // console.log(gameBoard)

 function DerivedGameTurn(ri,ci){
    let updatedGameTurn=[...gameTurn];
    
    updatedGameTurn=[{"player":players[activePlayer],"square":{"ri":ri,"ci":ci}},...gameTurn];
    return updatedGameTurn;
  }

  function DerivedGameBoard(ri,ci){
     let updatedGameBoard=[...gameBoard];
     updatedGameBoard[ri][ci]=activePlayer;
     return updatedGameBoard
  }

  function derivedWinner(gameBoard,players){
    let winner;
    
    for(const turn of WINNING_COMBINATIONS){
      const fSymbol=gameBoard[turn[0].row][turn[0].column];
      const sSymbol=gameBoard[turn[1].row][turn[1].column];
      const tSymbol=gameBoard[turn[2].row][turn[2].column];
      
      if(fSymbol && fSymbol==sSymbol && sSymbol==tSymbol){
        winner=players[fSymbol]
      }
      
    }
    
    return winner;
    
  }
  
  
  function handleSelectSquare(ri,ci){
    
    setActivePlayer((activePlayer)=>activePlayer=="X"?"O":"X")
    gameTurn=DerivedGameTurn(ri,ci)
    // setGameTurn((gameTurn)=>{
      gameBoard=DerivedGameBoard(ri,ci);
      // })
      
    }
    
    
    function changePlayerName(name,symbol){
      // console.log(name)
      setPlayers((players)=>{
        return {...players,[symbol]:name}
      })
    }
    
    
    function restartGame(){
      console.log("restarts")
      gameBoard=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ]
      gameTurn=[];
      winner="";
      draw=false;

      setPlayers(
        {  X:"player1",
        O:"player2"}
      )

     
      
    }
    
    
    let winner=derivedWinner(gameBoard,players);
    let draw=!winner && gameTurn.length==9;
    // console.log(players)
    // console.log(winner)
    // console.log(draw)
    return ( 
  <>
    <div id="game-container">
      {(winner || draw) && <GameOver handleOnRestart={restartGame} winner={winner} draw={draw}/>}
      <Players playersName={players} turn={activePlayer} onChangeName={changePlayerName} />
      <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare}/>
    </div>
     <Log turns={gameTurn}/>
  </>
  )
}

export default App
