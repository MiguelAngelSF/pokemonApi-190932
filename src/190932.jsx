import React from 'react'
import  Navbar  from './navbar';
import perfil from './img/miguelperfil.jpeg'
import UserContext from './context/userContext';
import MoreInfo from './MoreInfo';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
const About=()=>{
    const { i18n, t } = useTranslation();

    function changeLaguage(language) {
      i18n.changeLanguage(language);
    }
  
const userData = {
    grupo: "IDGS9A",
    matricula: 190932,
    nombre: "Miguel Angel Salas Flores"
};

  return (
    
    <>
    <div>
    <UserContext.Provider value={userData}>
        <Navbar/>
            <div class="cards">
            <div class="card">
            <div class="card-title">
                <a href="#" class="toggle-info btn">
                <MoreInfo/>
                </a>
            </div>
            <div class="card-flap flap1">
                <div class="card-description">
                {t("uni")}
                </div>
                <div class="card__image-holder">
                <img class="card__image" src={perfil} width="200" height="200" alt="" />
                </div>
            </div>
            </div>
        </div>
        </UserContext.Provider>
    </div>
    </> 
    
 )
}
export default About;
