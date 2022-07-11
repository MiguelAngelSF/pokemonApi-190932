import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import PokeFun from './FunctionPoke';
import PokemonApi from './buscador';
import { viewsEnum } from './constants';
import Header from './common/Header/Header';
import './style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  const [view, setView] = useState(viewsEnum.LIST);
  const handleNavigation = (newView) => {
    setView(newView);
  }

  let content = null;
  switch (view) {
    case viewsEnum.BUSCA:
      content = <PokemonApi />;
      break;
    case viewsEnum.LIST:
    default:
      content = <PokeFun />;
  }
  return (
    // <div>
    //   <Header view={view} onNav={handleNavigation} />
    //   {content}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeFun/>}/>
        <Route path="/buscador" element={<PokemonApi/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
