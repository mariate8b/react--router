import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from './src/assets/home.js';
import Red from './Red.jsx';
import Blue from './src/assets/blue.js';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <div id="container">
      
      <div id="navbar">
      <Link to="/">home</Link>
      <Link to="/blue">blue</Link>
      <Link to="/red">red</Link>
      </div>
      <div id="main-section">
    <Routes>
     <Route path="/blue" element={<h1>Blue</h1>} />
     <Route path="/red" element={<h1>Red</h1>} />
   </Routes>
      </div>
    </div>
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
