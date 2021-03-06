import "./App.css";
import React from "react";

import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Primeiro from "./components/Primeiro";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/CondicionalComIf";

export default (props) => (
  <div className='App'>
    <Card titulo='#01 - Primeiro Componente'>
      <Primeiro />
    </Card>

    <Card titulo='#02 - Componente com Parâmetro'>
      <ComParametro titulo='Este é o titulo' subtitulo='Esse é o subtitulo' />
    </Card>

    <Card titulo='03 - Componente com Filhos '>
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo='04 - Repetição '>
      <Repeticao></Repeticao>
    </Card>

    <Card titulo='05 - Condicional v1 '>
      <Condicional numero={11}></Condicional>
    </Card>

    <Card titulo='06 - Condicional v2 '>
      <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>
  </div>
);
