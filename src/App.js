import React, { useState } from 'react'
import './App.css';
import { useFetch } from './useFetch'



const App = () => {
  const [url, setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
  const state= useFetch(url)
  const {charged,data}=state
  charged? console.log('charged'):console.log(data.results)
  return (
    <div>

    </div>
  )
 
}

export default App;
