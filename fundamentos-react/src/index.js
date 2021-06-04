import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro titulo='Este é o titulo'
     subtitulo='Esse é o subtitulo' />
     <ComParametro titulo='Epa'
     subtitulo='Opa' />  
  </div>,
  document.getElementById("root")
);
