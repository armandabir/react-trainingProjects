import styles from "./../Style/Player.module.scss"
export default function Player({playerName,score,current=0,active,winner}){
    return (
        <div className={`${styles.player} ${active && styles.active} ${winner && styles.playerWinner}`}>
            <h2 className={styles.name}>{playerName}</h2>
            <h3 className={styles.score}>{score}</h3>
            <div className={styles.current}>
                <h3>current</h3>
                <p>{current}</p>
            </div>
        </div>
    )
}