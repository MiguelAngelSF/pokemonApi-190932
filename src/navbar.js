import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

export const Navbar = () => {
  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    
    <div>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{t("title")}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" to='/pokemon'>{t("nav-item-li")}</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/buscador'>{t("nav-item-bus")}</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/190932'>{t("nav-item-info")}</Link>
                </li>
            </ul>
            </div>
            <button onClick={()=> { changeLanguage("en") }}>EN</button>
            <button onClick={()=> { changeLanguage("es") }}>ES</button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar;
