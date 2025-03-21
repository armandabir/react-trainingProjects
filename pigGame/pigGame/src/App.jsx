import { useState } from 'react'
import styles from './App.module.scss'
import Player from './components/UI/Player'
import Button from './components/UI/Button'
import Dice from './components/UI/Dice';
import { useGame2 } from './hooks/useGame2';

function App() {
  // const {die,handleRollClick,activePlayer,currentScore,onHoldClick,scores,newGame}=useGame(); 
  const {state,handleRollClick,onHoldClick,newGame}=useGame2();
  const {die,scores,activePlayer,currentScore}=state;
  return (
    <>
        <main> 
           <Player playerName="Player1" score={scores[0]} current={activePlayer==0 ? currentScore:0} active={activePlayer==0} winner={scores[0]>=100}/>
           <Player playerName="Player2" score={scores[1]} current={activePlayer==1 ? currentScore:0} active={activePlayer==1} winner={scores[1]>=100}/>
           <Button className={styles.newGame} onClick={newGame} >🔃New game</Button>
           <Dice die={die}/>
           <Button className={styles.roll} onClick={handleRollClick} >🎲Roll Dice</Button>
           <Button className={styles.hold} onClick={onHoldClick}>🕹️Hold</Button>
        </main>
    </>
  )
}

export default App
