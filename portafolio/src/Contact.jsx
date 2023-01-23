import "./CSS/Contact.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  const sendMail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_ag4e5un",
        "template_t8hsiov",
        event.target,
        "x_SH79tf84gmLhOAg"
      )
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <section className="section-form">
        <div className="container-form">
          <div className="container-contact">
            <h1 id="contacto">Contacto</h1>
            <div className="container-contact-items">
              <p>
                <FontAwesomeIcon icon={faPhone} />
                <span> Telefono: </span>
                1125280686
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Ubicacion: </span>
                Buenos Aires, San Martin
              </p>
              <p>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span> Email: </span>
                matiasleandro752@gmail.com
              </p>
            </div>
          </div>
          <form onSubmit={sendMail}>
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
        </div>
    </section>
  );
};

export { Contact };
