import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PokeFun from './FunctionPoke';
import PokemonApi from './buscador';
import About from './190932';
import InfoPoke from './InfoPoke';
import { BrowserRouter as Router,Routes, Route, Navigate } from "react-router-dom"
import { I18nextProvider } from "react-i18next";
import i18n from "./config/localization/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <I18nextProvider i18n={i18n}>
  <Router>
      <Routes>
          <Route path='pokemon' element={<PokeFun/>}/>
          <Route path='buscador' element={<PokemonApi/>}/>
          <Route path='190932' element={<About/>}/>
          <Route path='pokemonId' element={<InfoPoke/>}/>
          <Route path='/' element={<Navigate replace to="/pokemon"/>} />
      </Routes>
    </Router>
    </I18nextProvider>
);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


