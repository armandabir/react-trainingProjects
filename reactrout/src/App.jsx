import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Foods from './components/Foods'
import Home from './components/home'
export const ThemeContext=createContext(null);
function App() {
  const [theme,setTheme]=useState("light");
  function toggleTheme(){
    setTheme((prvTheme)=>prvTheme=="light"?"dark":"light")
  }
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/foods">foods</Link>
            </li>
            <li>
              <Link to="/harchi">hacrchi</Link>
            </li>
            <li>
                <button onClick={toggleTheme}>{theme=="light"?"dark":"light"}</button>
            </li>
          </ul>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/foods' element={<Foods/>}/>
            <Route path='/food/:id' element={<Foods/>}/>
            <Route path='*' element={<p>here is 404</p>}/>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  )
}

export default App
