import styles from "./../Style/Dice.module.scss"
export default function Dice({die}){
    return(
        <div className={styles.dice}>
            <img src={`./src/assets/dice-${die}.png`} alt="" />
        </div>
    )
}