import "./CSS/Nav.css";
import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import {Menu} from './Menu'



const Nav = () => {
  const [menuMobile, setMenuMobile] = useState(false)
 
  const mostrarMenu = () => {
    setMenuMobile(true)
  }
  const ocultarMenu = () => {
    setMenuMobile(false)
  }

  return (
    <nav className="navbar" >
      <ul className="navbar-left">
        <li>
          <a href="">Mi portafolio</a>
        </li>
      </ul>
      <FontAwesomeIcon  icon={faBars} onClick={mostrarMenu}/>
      {menuMobile && <Menu ocultarMenu={ocultarMenu}></Menu>}
      
      <ul className="navbar-right">
        <li>
          <a href="#sobre-mi">sobre mi</a>
        </li>
        <li>
          <a href="#proyectos">proyectos</a>
        </li>
        <li>
          <a href="#contacto">contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export { Nav };
