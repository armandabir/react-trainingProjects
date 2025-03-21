
import { useReducer } from 'react'
import './App.css'
function counterReducer(state,action){
    switch (action.type) {
      case "increment":
            return  { count:state.count + action.step}
        break;
        case "decrement":
          return  { count:state.count - action.step}
        break;
        case "reset":
          return {count:0}
        break;
      default:
        return state.count;
    }
}
function App() {

  const initialState={count:0}
  const [state,dispatch]=useReducer(counterReducer,initialState)

  return (
    <>
      <div className='container'>
          <h1>counter : {state.count}</h1>
          <div className='button-group'>
              <button onClick={()=>dispatch({type:"increment",step:5})}>increment</button>
              <button onClick={()=>dispatch({type:"decrement",step:2})}>decrement</button>
              <button onClick={()=>dispatch({type:"reset"})}>reset</button>
          </div>
      </div>
    </>
  )
}

export default App
