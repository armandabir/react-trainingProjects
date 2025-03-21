import styles from "./../Style/Button.module.scss"
export default function Button({children,className,onClick}){
    return(
        <button className={`${styles.btn} ${className}`} onClick={onClick}>{children}</button>
    )
}