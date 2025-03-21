import { useContext } from "react"
import { ThemeContext } from "../App"

export default function Home(){
    const {theme} = useContext(ThemeContext);
    return(
        <div className={`container theme-${theme}`}>
            <h1>Welcome</h1>
        </div>
    )
}