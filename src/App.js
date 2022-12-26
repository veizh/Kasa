import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from '../src/component/Home/Home'
import About from '../src/component/About/About'
import Header from './component/header/header';
import Footer from './component/footer/footer';
import { useEffect, useRef, useState } from 'react';
import Error from './component/error/error';
import Logement from './component/Logement/Logement';
function App() {

  return (
    
    <div className='app' >
    <Header />
    <Routes>
      <Route path={"/home"} element={<Home />} />
      <Route path={"/about"} element={<About />} />
      <Route path={"/error"} element={<Error />} />
      <Route path={"/logement"} element={<Logement />} />
      <Route
        path="/"
        element={<Navigate to="/home" replace />}
    />
    <Route
        path=""
        element={<Navigate to="/error" replace />}
    />
     <Route
        path="*"
        element={<Navigate to="/error" replace />}
    />
    </Routes>

    <Footer />
    </div>
  );
}

export default App;
