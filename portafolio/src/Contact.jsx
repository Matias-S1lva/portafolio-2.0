import "./CSS/Contact.css";
import React, { useState } from "react";

import { Success } from "./Success";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({children,success}) => {
  
  

  return (
    <section className="section-form">
      {success && <Success />}
      <div className="container-form" data-aos="fade-up">
        <div className="container-contact" id="contacto">
          <h1>Contacto</h1>
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
        {children}
      </div>
    </section>
  );
};

export { Contact };
