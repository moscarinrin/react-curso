// Que es un componente en react?
// Es una pequeña pieza de codigo encapsulada reutilizable que puede tener estado o nelpas
// El comcepto de estado: Es el valor del componente en algun momento del tiempo
import React from "react";
import ReactDoom from "react-dom"
// import PrimeraApp from "./PrimeraApp";
import "./index.css";
import CounterApp from "./CounterApp";

// Variable que es renderizada en elemento de public


// const saludo = <h1>Hola mundo</h1>;

// const divRoot = document.querySelector("#root")

// ReactDoom.render(saludo, divRoot);
// Codigo

//Componente

const divRoot = document.querySelector("#root")

ReactDoom.render(<CounterApp value = { 0 }/> , divRoot);