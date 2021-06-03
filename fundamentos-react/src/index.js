import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro titulo='Este é o titulo' 
    titulo='Esse é o titulo' />
    <ComParametro titulo='Este é o subtitulo' 
    paragrafo='Esse e o paragrafo' />
  </div>,
  document.getElementById("root")
);
