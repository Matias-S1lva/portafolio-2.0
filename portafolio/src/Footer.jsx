import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'
import './CSS/Footer.css'

const Footer = () => {
  return (
    <footer className="border-top ">
      <div className="redes-sociales">
        <div className="contenedor-icono">
          <a href="https://github.com/Matias-S1lva" target="_blank">
          <FontAwesomeIcon  icon={faGithub} />

          </a>
        </div>

        <div className="contenedor-icono">
          <a
            href="https://www.linkedin.com/in/matias-silva-9a66a0218"
            target="_blank"
          >
           <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        <div className="contenedor-icono">
          <a href="https://twitter.com/MatiasLeandroo7" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
