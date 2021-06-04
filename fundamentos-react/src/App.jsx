import "./App.css";
import React from "react";

import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Primeiro from "./components/Primeiro";

export default (props) => (
  <div className='App'>
    <Card titulo='Componente com Filhos '>
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo='Componente com Parametro'>
      <ComParametro titulo='Este é o titulo' subtitulo='Esse é o subtitulo' />
    </Card>

    <Card titulo='Primeiro Componente'>
      <Primeiro />
    </Card>
  </div>
);
