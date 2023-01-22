import "./CSS/Nav.css";
const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li>
          <a href="">Mi portafolio</a>
        </li>
      </ul>
      <ul className="navbar-right">
        <li>
          <a href="">proyectos</a>
        </li>
        <li>
          <a href="">sobre mi</a>
        </li>
        <li>
          <a href="">contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export { Nav };
