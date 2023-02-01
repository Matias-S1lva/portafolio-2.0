import "./CSS/Card.css";

const Card = ({ foto, title, color, description, tecnologies, children }) => {
  const getAlt = (str) => {
    str = str.split("/");
    return str[str.length - 1];
  };
  return (
    <div className="card" style={color} data-aos="zoom-in">
      <img src={foto} alt={getAlt(foto)} />
      <span>{title}</span>
      <p>{description}</p>
      <div className="card-tecnologies">
        {tecnologies.map((tecnologie) => (
          <img src={tecnologie} alt={getAlt(tecnologie)} />
        ))}
      </div>
      <div className="container-buttons">{children}</div>
    </div>
  );
};

export { Card };
