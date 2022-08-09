import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This code is
          <a href="https://github.com/Nikoteenie/weather-shecodes.git" alt="">
            {" "}
            open-sourced{" "}
          </a>
          by Nicole Brodkin
        </footer>
      </div>
    </div>
  );
}
