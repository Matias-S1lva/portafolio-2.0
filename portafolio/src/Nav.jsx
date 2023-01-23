import "./CSS/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  
  return (
    <nav className="navbar">
      
      <ul className="navbar-left">
        <li>
          <a href="">Mi portafolio</a>
        </li>
      </ul>
      <ul className="menu-responsive">
        <li>
        <FontAwesomeIcon icon={faBars}/>
        <ul className="menu-dropdown">
          <li className="menu-dropdown-items">
            <a href="">proyectos</a>
          </li>
          <li className="menu-dropdown-items">
            <a href="">sobre mi</a>
          </li>
        </ul>
        </li>
      </ul>
      <ul className="navbar-right">
        <li>
          <a href="#proyectos">proyectos</a>
        </li>
        <li>
          <a href="">sobre mi</a>
        </li>
        <li>
          <a href="#contacto">contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export { Nav };
