import "./CSS/Form.css";

const Form = ({ onSendForm }) => {
  return (
    <form onSubmit={onSendForm}>
      <input
        name="user_name"
        type="text"
        className="feedback-input"
        placeholder="Nombre"
      />
      <input
        name="user_mail"
        type="email"
        className="feedback-input"
        placeholder="Email"
      />
      <textarea
        name="user_message"
        className="feedback-input"
        placeholder="Escribir mensaje"
      ></textarea>
      <input type="submit" value="ENVIAR" />
    </form>
  );
};

export { Form };
