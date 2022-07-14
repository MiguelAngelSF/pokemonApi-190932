import React from 'react'
import  Navbar  from './navbar';

const About=()=>{

  return (
    <>
    <div>
        <Navbar/>
            <div class="cards">
            <div class="card">
            <div class="card__image-holder">
                <img class="card__image" src="/details/img/miguelperfil.jpeg" alt="" />
            </div>
            <div class="card-title">
                <a href="#" class="toggle-info btn">
                <span class="left"></span>
                <span class="right"></span>
                </a>
                <h2>
                    Miguel Angel Salas Flores
                </h2>
            </div>
            <div class="card-flap flap1">
                <div class="card-description">
                Universidad Tecnologica de Aguascalientes
                </div>
            </div>
            </div>
        </div>
    </div>
    </> 
 )
}
export default About;
