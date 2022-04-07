import React, { useState } from "react";
import * as math from "mathjs";
import "./styles.css";
import Botao from "./components/Botao";

const arrOperacoes = ["*", "/", "+", ".", "-"];

export default function App() {
  const [entrada, setEntrada] = useState("");

  function insereNum(val) {
    setEntrada(entrada + val);
  }

  function insereOperacao(val) {
    if (entrada === "" || (arrOperacoes.includes(entrada[entrada.length - 1]) && arrOperacoes.includes(val))
    ) {
      return;
    } else {
      setEntrada(entrada + val);
    }
  }

  function calcular() {
    if (entrada === "" || arrOperacoes.includes(entrada[entrada.length - 1])) {
      return entrada;
    } else {
      setEntrada(math.evaluate(entrada));
    }
  }

  return (
    <div className="App">
      <h1>Calculadora simples com React</h1>
      <div className="calc-wrapper">
      <Botao isEntrada>{entrada}</Botao>      
      <div className="linha">
          <Botao onClick={insereNum}>7</Botao>
          <Botao onClick={insereNum}>8</Botao>
          <Botao onClick={insereNum}>9</Botao>
          <Botao onClick={insereOperacao}>/</Botao>
      </div>
      <div className="linha">
          <Botao onClick={insereNum}>4</Botao>
          <Botao onClick={insereNum}>5</Botao>
          <Botao onClick={insereNum}>6</Botao>
          <Botao onClick={insereOperacao}>*</Botao>
      </div>
      <div className="linha">
          <Botao onClick={insereNum}>1</Botao>
          <Botao onClick={insereNum}>2</Botao>
          <Botao onClick={insereNum}>3</Botao>
          <Botao onClick={insereOperacao}>+</Botao>
      </div>
      <div className="linha">
          <Botao onClick={insereOperacao}>.</Botao>
          <Botao onClick={insereNum}>0</Botao>
          <Botao onClick={() => setEntrada("")}>C</Botao>
          <Botao onClick={insereOperacao}>-</Botao>
      </div>
      <div className="linha">
          <Botao onClick={calcular}>=</Botao>
      </div>
      </div>
    </div>
  );
}
