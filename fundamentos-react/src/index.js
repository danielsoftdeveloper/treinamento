import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

//import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Primeiro from "./components/Primeiro";

ReactDOM.render(
  <div>
    <Card titulo='Primeiro Componente'>
    <Primeiro />
    </Card>
    <Card titulo='Exercício x'>
      Conteudo
    </Card>

    {/* <ComFilhos>
    <ul>
      <li>Ana</li>
      <li>Bia</li>
      <li>Carlos</li>
      <li>Daniel</li>
    </ul>
  </ComFilhos> */}

    {/*  <Primeiro />
    <ComParametro titulo='Este é o titulo'
     subtitulo='Esse é o subtitulo' />
     <ComParametro titulo='Epa'
     subtitulo='Opa' />  
 */}
  </div>,
  document.getElementById("root")
);
