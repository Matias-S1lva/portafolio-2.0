import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import "./App.css";

import { Nav } from "./Nav";
import { About } from "./About";
import { Section } from "./Section";
import { Card } from "./Card";
import { Button } from "./Button";
import { Contact } from "./Contact";
import { Form } from "./Form";
import { Footer } from "./Footer";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const url = "./assets/";
const cards = [
  {
    url: [
      "https://matias-s1lva.github.io/react-shop/",
      "https://github.com/Matias-S1lva/react-shop",
    ],
    foto: url + "react-shop.jpg",
    title: "react shop",
    description: "diseño de ecommerce interactivo consumiendo una API",
    tecnologies: [
      url + "react.png",
      url + "HTML.png",
      url + "css.png",
      url + "js.png",
    ],
  },
  {
    url: [
      "http://webfinal.somee.com/",
      "https://github.com/Matias-S1lva/web-escuela-final",
    ],
    foto: url + "tupac.jpg",
    title: "Web escuela",
    description: "sitio web escolar, login y abm usuarios",
    tecnologies: [
      url + "HTML.png",
      url + "css.png",
      url + "js.png",
      url + "C.png",
      url + "sql-server.png",
    ],
  },
  {
    url: [
      "https://node-mysql-app-production.up.railway.app/",
      "https://github.com/Matias-S1lva/Node-mySql-app",
    ],
    foto: url + "favorite-links.jpg",
    title: "Favorite Links",
    description: "Sitio web para guardar enlaces con Login y Registro",
    tecnologies: [
      url + "HTML.png",
      url + "css.png",
      url + "js.png",
      url + "bootstrap.png",
      url + "mysql.png",
      url + "node.png",
    ],
  },
  {
    url: [
      "https://cool-sable-5fd591.netlify.app/",
      "https://github.com/Matias-S1lva/galeria-Star-Wars",
    ],
    foto: url + "star-wars.jpg",
    title: "star wars gallery",
    description: "galeria de imagenes con filtros y barra de busqueda",
    tecnologies: [url + "HTML.png", url + "css.png", url + "js.png"],
  },
  {
    url: [
      "https://matias-s1lva.github.io/rick-and-morty/",
      "https://github.com/Matias-S1lva/rick-and-morty",
    ],
    foto: url + "rick-morty.jpg",
    title: "API Rick and Morty",
    description: "galeria dinamica consumiendo API con react",
    tecnologies: [
      url + "HTML.png",
      url + "css.png",
      url + "js.png",
      url + "react.png",
      url + "bootstrap.png",
    ],
  },
  {
    url: [
      "https://matias-s1lva.github.io/react-tasks-app/",
      "https://github.com/Matias-S1lva/react-tasks-app",
    ],
    foto: url + "task-react.jpg",
    title: "task app",
    description: "aplicacion web para crear, guardar y borrar tareas",
    tecnologies: [
      url + "HTML.png",
      url + "css.png",
      url + "js.png",
      url + "react.png",
      url + "bootstrap.png",
    ],
  },
];

const colores = [
  { background: "var(--red-sweet)" },
  { background: "var(--blue-light)" },
  { background: "var(--hover)" },
];
let indice = -1;
const changeColor = () => {
  if (indice === 2) indice = -1;
  indice++;
  return colores[indice];
};

function App() {
  const [success, setSucess] = useState(false);

  const sendMail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_ag4e5un",
        "template_t8hsiov",
        event.target,
        "x_SH79tf84gmLhOAg"
      )
      .then((response) => {
        if (response.status === 200) setSucess(true);
        setTimeout(() => setSucess(false), 4000);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Nav></Nav>
      <About></About>
      <Section>
        {cards.map((card) => (
          <Card
            url={card.url}
            foto={card.foto}
            title={card.title}
            color={changeColor()}
            description={card.description}
            tecnologies={card.tecnologies}
          >
            
            <Button url={card.url[0]} icon={faGlobe}></Button>
            <Button url={card.url[1]} icon={faGithub}></Button>
          </Card>
        ))}
      </Section>

      <Contact success={success}>
        <Form onSendForm={sendMail}></Form>
      </Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
