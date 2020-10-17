/* IMPORTS */
import React from "react";
/* COMPONENTS */
import Header from "./components/header/header.component";
import Principal from "./components/principal/principal.component";
import SobreMi from "./components/sobreMi/sobreMi.component";
import Servicios from "./components/servicios/servicios.component";
import Proyectos from "./components/proyectos/proyectos.component";
import Contacto from "./components/contacto/contacto.component";

function App() {
  return (
    <main>
      <Header />
      <Principal />
      <SobreMi />
      <Servicios />
      <Proyectos />
      <Contacto />
    </main>
  );
}

export default App;
