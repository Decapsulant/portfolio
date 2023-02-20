import React from 'react';
import Home from './pages/Home';
import "./sass/app.scss";
import {Routes, Route} from "react-router-dom";
import About from './pages/About';
import Layout from './components/layout';
import Library from './pages/Library';
import Projects from './pages/Projects';
import CalculatorPage from './pages/projectPages/calculator';

function App() {
  return (


      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='library' element={<Library/>}/>
          <Route path='about' element={<About/>}/>    
          <Route path='library/projects' element={<Projects/>}/>
                {/* {Projects} */}
          <Route path='library/projects/calculator' element={<CalculatorPage/>}/>
        </Route>
      </Routes>


  
  

  );
}

export default App;
