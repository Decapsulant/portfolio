import React from 'react';
import Home from './pages/Home';
import './sass/app.scss';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Layout from './components/layout';
import Library from './pages/Library';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="library" element={<Library />} />
        {/* <Route path='about' element={<About/>}/> */}
      </Route>
    </Routes>
  );
}

export default App;
