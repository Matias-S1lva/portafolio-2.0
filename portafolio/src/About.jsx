import "./CSS/About.css";
import perfil from "../public/assets/perfil.jpg";
import html from "../public/assets/HTML.png";
import css from "../public/assets/css.png";
import js from "../public/assets/js.png";
import react from "../public/assets/react.png";
import csharp from "../public/assets/C.png";
import sql from "../public/assets/sql-server.png";
import mySql from "../public//assets/mysql.png"


const About = () => {
  return (
    <div className="container-about">
      <figure className="luna"></figure>
      <div className="about-left">
        <img src={perfil} alt="" />
        <h1>Matias Silva | Frontend Developer</h1>
        <p>
        Soy desarrollador web, actualmente estoy terminado la tecnicatura de Analista de Sistemas, busco orientar mis habilidades tecnicas y de analisis para desempeñarme en el desarrollo de software
        </p>
      </div>
      <div className="about-right">
          <h2>Frontend skills:</h2>
        <div className="about-right-images">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="js" />
          <img src={react} alt="react" />
        </div>
        <h2>Backend skills:</h2>
        <div className="about-right-images">
          <img src={csharp} alt="csharp" />
          <img src={sql} alt="sql" />
          <img src={mySql} alt="mysql" />
        </div>
        <p>Tecnologies: Bootstrap, .NET, Sass, npm</p>
      </div>
      
    </div>
  );
};

export { About };
