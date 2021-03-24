import React from 'react'
import './App.css';
import {Header} from './components/head';
import DisplayModels from "./components/ModelCard";

let carModels = [
    {id: 100, model: 'sl600', producer: 'Mercedes', tankVolume: 70, horsePower: 220, image:"img/mercedes.jpg"},
    {id: 1300, model: 'e340', producer: 'BMW', tankVolume: 65, horsePower: 210, image:"img/bmw.jpg"},
    {id: 1003, model: 'Phaeton', producer: 'Cadillac', tankVolume: 80, horsePower: 260, image:"img/cadillac.jpg"}
    ];

function App() {
  return (
    <div className="App">
      <Header h1='Homework #1 '/>
      <DisplayModels models={carModels}/>

    </div>
  );
}

export default App;
