import React from "react";
import { Link } from 'react-router-dom';
const Card = ({ pokemon, loading, infoPoke}) => {
    return (
        <>
        {
            loading 
            ? 
            <h1>...</h1> 
            :
                pokemon.map((item) => {
                    return (
                        <>
                            {/* <Link to="/pokemon"> */}
                            <div className="card" key={item.id} onClick={()=>infoPoke(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>
                            {/* </Link> */}
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;