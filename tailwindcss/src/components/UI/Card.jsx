import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import img from "./../../assets/images.jpg"
import styles from "./../Styles/Card2.module.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas,fab)
export default function Card(){
    return (
         <div className={styles.cardContainer}>
            <img src={img} alt="" />
            <button className={styles.cardBtn}>
                <FontAwesomeIcon icon="fas fa-arrow-down" className="mr-4" />
                شروع
            </button>
         </div>
    )

}