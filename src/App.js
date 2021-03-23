import React from 'react'
import './App.css';
import {Header} from './components/head';
import {ModelCard} from "./components/ModelCard";

let carModels = [
    {id: 100, model: 'sl600', producer: 'Mercedes', tankVolume: 70, horsePower: 220, image:"img/mercedes.jpg"},
    {id: 1300, model: 'e340', producer: 'BMW', tankVolume: 65, horsePower: 210, image:"img/bmw.jpg"},
    {id: 1003, model: 'Phaeton', producer: 'Cadillac', tankVolume: 80, horsePower: 260, image:"img/cadillac.jpg"}
    ];

function App() {
  return (
    <div className="App">
      <Header h1='Homework #1 '/>
      <ModelCard model={'sl600'} producer={'Mercedes'} tankVolume={70} horsePower={220} />
      <ModelCard model={carModels[1].model} producer={carModels[1].producer}
                 tankVolume={carModels[1].tankVolume} horsePower={carModels[1].horsePower} />
        {carModels.map(item =>
            <ModelCard model={item.model} producer={item.producer}
                       tankVolume={item.tankVolume} horsePower={item.horsePower} />
        ) }

    </div>
  );
}

export default App;
