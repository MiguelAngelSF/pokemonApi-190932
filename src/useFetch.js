import React , {useState,useEffect}from 'react'

export const UseFetch = (url) => {
    const [result,setResult]=useState({charged:true,data:null})

    useEffect( ()=>{
        getDatos(url)
    },{url})

    async function getDatos(url){
        try{
        setResult({charged:true,data:null})
        const resp=await fetch(url)
        const data=await resp.json()
        setResult({charged:false,data})
        }
        catch(e){
            console.log(e)
        }
    }

    return result
}