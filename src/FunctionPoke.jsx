import React from "react";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import  Navbar  from './navbar';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

const PokeFun=()=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon?limit=10")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    
    const { i18n, t } = useTranslation();

    function changeLaguage(language) {
    i18n.changeLanguage(language);
    }

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })   
    }
    useEffect(()=>{
        pokeFun();
    },[url])
    return(
        <>
        <div>
            <Navbar/>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading}/>
                    
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{setPokeData([])
                            setUrl(prevUrl) 
                        }}>{t("btnBack")}</button>}

                        { nextUrl && <button onClick={()=>{setPokeData([])
                            setUrl(nextUrl)
                        }}>{t("btnNext")}</button>}
                    </div>
                </div>
              </div>
            </div>
        </>
    )
}
export default PokeFun;