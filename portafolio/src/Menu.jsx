const Menu = ({ ocultarMenu }) => {
  return (
    <ul className="menu-oculto" data-aos="fade-down">
      <li onClick={ocultarMenu}><a href="" style={{ pointerEvents: "none"}} >cerrar X</a></li>
      <li>
        <a href="#sobre-mi" onClick={ocultarMenu}>sobre mi</a>
      </li>
      <li>
        <a href="#proyectos" onClick={ocultarMenu}>proyectos</a>
      </li>
      <li>
        <a href="#contacto" onClick={ocultarMenu}>contacto</a>
      </li>
    </ul>
  );
};

export { Menu };
