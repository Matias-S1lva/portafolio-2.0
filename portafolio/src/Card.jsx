import "./CSS/Card.css";



const Card = ({ url, foto, title, color, description, tecnologies,children }) => {
  return (
    <div className="card" style={color} data-aos="zoom-in">
      <img src={foto} alt={url[0].split("/")[-1]} />
      <span>{title}</span>
      <p>{description}</p>
      <div className="card-tecnologies">
        {tecnologies.map((tecnologie) => (
          <img src={tecnologie} alt={tecnologie.split("/")[-1]} />
        ))}
      </div>
      <div className="container-buttons">
        {children}
      </div>
    </div>
  );
};

export { Card };
