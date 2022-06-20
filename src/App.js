import React, { useState } from 'react'
import './App.css';
import { UseFetch } from './UseFetch'
import { Cards } from './cards/Cards';



const App = () => {
  const [url, setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
  const state= UseFetch(url)
  const {charged,data}=state
  charged? console.log('charged'):console.log(data.results)
  return (
    <div>
      {
        charged
        ?
        <h1>Cargando...</h1>
        :
        <Cards results={data.results}/>
      }

    </div>
  )
 
}

export default App;
