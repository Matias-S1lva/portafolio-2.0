const Card = ({ url, foto, title, color,description }) => {
  return (
    <div className="card" style={color}>
      <img src={foto} alt="react-shop" />
      <span>{title}</span>
      <p>{description}</p>
      <button>
        <a href={url}>Ir</a>
      </button>
    </div>
  );
};

export { Card };
