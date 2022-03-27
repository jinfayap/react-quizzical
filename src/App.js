import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="Question">
        <h3 className="Question__title">
          How would one say goodbye in Spanish
        </h3>
        <div className="Question__options">
          <span className="selected">Adios</span>
          <span>Hola</span>
          <span>Au Revoir</span>
          <span>Adios</span>
        </div>
      </div>
      <div className="Question">
        <h3 className="Question__title">
          Which best selling toy of 1983 caused hysteria, resulting in riots
          breaking in stores?
        </h3>
        <div className="Question__options">
          <span>Cabbage Patch Kids</span>
          <span>Transformers</span>
          <span>Care Bears</span>
          <span>Rubik's Cube</span>
        </div>
      </div>
      <div className="Question">
        <h3 className="Question__title">
          What is the hottest planet in our Solar System
        </h3>
        <div className="Question__options">
          <span>Mercury</span>
          <span>Venus</span>
          <span>Mars</span>
          <span>Saturn</span>
        </div>
      </div>

      <div className="Outcome">
        <button className="Outcome__button">Check answers</button>
      </div>
    </div>
  );
};

export default App;
