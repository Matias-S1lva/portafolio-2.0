import "./CSS/About.css";
import perfil from "../public/assets/perfil.jpg";
import html from "../public/assets/HTML.png";
import css from "../public/assets/css.png";
import js from "../public/assets/js.png";
import react from "../public/assets/react.png";
import csharp from "../public/assets/C.png";
import sql from "../public/assets/sql-server.png";
import mySql from "../public//assets/mysql.png"
import node from "../public//assets/node.png"


const About = () => {
  return (
    <div className="container-about">
      <figure className="luna"></figure>
      <div className="about-left" data-aos="fade-right">
        <img src={perfil} alt="" />
        <h1 id="sobre-mi">Matias Silva | Frontend Developer</h1>
        <p>
        Soy desarrollador web, actualmente estoy terminado la tecnicatura de Analista de Sistemas, busco orientar mis habilidades tecnicas y de analisis para desempeñarme en el desarrollo de software
        </p>
      </div>
      <div className="about-right" data-aos="fade-left">
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
          <img src={node} alt="node" />
        </div>
        <p>Tecnologies: .NET 4.8, Asp.Net, Vite.js, Sass, Bootstrap</p>
      </div>
      
    </div>
  );
};

export { About };
