import React from 'react'
import NavBar from './Components/Section1/NavBar';
import Home from'./Components/Section1/Home'
import Project from './Components/Section1/Project';
import About from './Components/Section1/About';
import Skills from './Components/Section1/Skills';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Skills/>
      <Project/>
      <About/>
    </div>
  )
}

export default App;
