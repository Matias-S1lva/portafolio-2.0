import "./CSS/Section.css"


const Section = (props) => {
    return (
        <section className="container-section">
          <h1>Proyectos</h1>
         <div className="container-cards">
           {props.children}
         </div>
        </section>
    );
}

export  {Section};