import { useEffect, useState } from 'react'


function App() {
    const [foods,setFoods]=useState([]);
    const[toggle,setToggle]=useState(false); //just for know useEffect trigger toggle state if its changes fetchFoods Will RUN!
    async function fetchFoods(cat="") {
      const res = await fetch(`http://localhost:3131/foods/${cat}`);
      const data = await res.json();
        setFoods(data);
    }


    useEffect(()=>{
        fetchFoods()
    },[toggle])

//just for know useEffect trigger toggle state if its changes fetchFoods Will RUN!
    function onToggle(){
      setToggle((prvToggle)=>!prvToggle)
    }

  

    return (
        <div>
    
          {foods.map((food)=>(<div>{food.name}</div>))}
          <button onClick={()=>fetchFoods("Pizzas")}>Pizzas</button>
          <button onClick={()=>fetchFoods("Burgers")}>Burgers</button>
          <button onClick={()=>fetchFoods("Drinks")}>Drinks</button>
          <button onClick={()=>fetchFoods()}>All</button>
          <button onClick={onToggle}>Toggle</button>
        </div>
    )


}

export default App
