import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Miami" />
        <footer>
          This code is
          <a
            href="https://github.com/Nikoteenie/weather-shecodes.git"
            rel="noreferrer"
            target="_blank"
            alt=""
          >
            {" "}
            open-sourced{" "}
          </a>
          by Nicole Brodkin
        </footer>
      </div>
    </div>
  );
}
