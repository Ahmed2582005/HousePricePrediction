import { useState } from "react";
import "./styles/App.css";

import HouseForm from "./components/HouseForm";
import PredictionResult from "./components/PredictionResult";

function App() {

  const [prediction, setPrediction] = useState(null);

  return (
    <div className="app">

      <header className="header">

        <div className="logo">
          🏠
        </div>

        <h1>
          Smart House Price Predictor
        </h1>

        <p>
          AI Based Real Estate Price Prediction System
        </p>

      </header>


      <HouseForm setPrediction={setPrediction} />


      <PredictionResult price={prediction} />


    </div>
  );
}

export default App;