import { use, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import {ThemeContext} from "./../App"
import Food from "./Food";
import axios from "axios";
import styles from "./../components/styles/food.module.scss"
export default function Foods(){
    const {theme} = useContext(ThemeContext);
    const [posts,setPosts]=useState([]);
    let navigate =useNavigate();

    let {id} = useParams();
    async function fetchPosts(cat="") {

            axios.get(`http://localhost:3131/foods/${cat}`).then((response)=>{
            
                setPosts(response.data)
            })
    
        
    }

    async function fetchPost(id) {
        axios.get(`http://localhost:3131/foods/`).then((response)=>{
            setPosts(response.data.filter((post)=>post.id == id))
        })   
    }

    useEffect(()=>{
        if(id){
         fetchPost(id)
         return
        }
        fetchPosts()
    },[id])

    console.log(posts.length)


    

    const nameChange=useMemo(()=>armanFunction(name),[name]);

    function armanFunction(name){
        // console.log(`${name} foods` )
    }


    function handleOnClick(){
        navigate("/");
    }

    function handleFoodClick(id){
        navigate(`/food/${id}`);

    
    }
    return(
            <div className={`container theme-${theme}`}>
                <ul>
                    <li><button onClick={()=>fetchPosts("Burgers")}>burgers</button></li>
                    <li><button onClick={()=>fetchPosts("Pizzas")}>pizzas</button></li>
                    <li><button onClick={()=>fetchPosts("Drinks")}>drinks</button></li>
                </ul>
                {posts.length && posts.map((food)=><Food handleOnClick={()=>handleFoodClick(food.id)} key={food.id} name={food.name} price={food.price} img={food.image} theme={theme=="light"?styles.cardLight:styles.cardDark}/>)}
                <h2 onClick={handleOnClick}>go to homepage</h2>
            </div>


    )
}