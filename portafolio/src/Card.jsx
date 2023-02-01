import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ url, foto, title, color, description, tecnologies }) => {
  return (
    <div className="card" style={color} data-aos="zoom-in">
      <img src={foto} alt="react-shop" />
      <span>{title}</span>
      <p>{description}</p>
      <div className="card-tecnologies">
        <h3 style={{ textAlign: "center" }}>Tecnologies:</h3>
        {tecnologies.map((tecnologie) => (
          <img src={tecnologie} alt={tecnologie.split("/")[-1]} />
        ))}
      </div>
      <div className="container-buttons">
        <button>
          <a href={url[0]}>
            {" "}
            <FontAwesomeIcon icon={faGlobe} style={{ fontSize: "32px" }} />
          </a>
        </button>
        <button>
          {" "}
          <a href={url[1]}>
            {" "}
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "32px" }} />
          </a>
        </button>
      </div>
    </div>
  );
};

export { Card };
