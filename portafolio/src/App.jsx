import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import { Card } from "./Card";
import { Nav } from "./Nav";
import { Section } from "./Section";
import { Contact } from "./Contact";
import { About } from "./About";
import { Footer } from "./Footer";

const cards = [
  {
    url: "https://matias-s1lva.github.io/react-shop/",
    foto: "./assets/react-shop.jpg",
    title: "react shop",
    description: "diseño de ecommerce interactivo consumiendo una API",
  },
  {
    url: "https://cool-sable-5fd591.netlify.app/",
    foto: "./assets/star-wars.jpg",
    title: "star wars gallery",
    description: "galeria de imagenes con filtros y barra de busqueda",
  },
  {
    url: "https://matias-s1lva.github.io/rick-and-morty/",
    foto: "./assets/rick-morty.jpg",
    title: "API Rick and Morty",
    description: "galeria dinamica consumiendo API con react",
  },
  {
    url: "https://matias-s1lva.github.io/react-tasks-app/",
    foto: "./assets/task-react.jpg",
    title: "task app",
    description: "aplicacion web para crear, guardar y borrar tareas",
  },

  {
    url: "https://node-mysql-app-production.up.railway.app/",
    foto: "./assets/favorite-links.jpg",
    title: "Favorite Links",
    description: "Sitio web para guardar enlaces con Login y Registro",
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
          />
        ))}
      </Section>

      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
