import React from 'react';
import NavItem from '../NavItem/NavItem';
import { viewsEnum } from '../../constants';
import './Header.css';


const items = [
  { title: 'Lista De Pokemones', id: viewsEnum.LIST },
  { title: 'Buscador de Pokemones', id: viewsEnum.BUSCA },
];

const navBar = (props) => {
  const handleNavigation = (newView) => () => {
    if (newView !== props.view) {
      props.onNav(newView);
    }
  };

  return (
    <header className="Header">

      {items.map(item => (
        <NavItem
          key={item.title}
          selected={props.view === item.id}
          onNav={handleNavigation(item.id)}
          title={item.title}
        />
      ))}
    </header>
  );
};

export default navBar;