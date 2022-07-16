import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import PokeFun from './FunctionPoke';
import PokemonApi from './buscador';
import  Navbar  from './navbar';
import './style.css'
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom"
function App() {
  // const [view, setView] = useState(viewsEnum.LIST);
  // const handleNavigation = (newView) => {
  //   setView(newView);
  // }

  // let content = null;
  // switch (view) {
  //   case viewsEnum.BUSCA:
  //     content = <PokemonApi />;
  //     break;
  //   case viewsEnum.LIST:
  //   default:
  //     content = <PokeFun />;
  // }
  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
