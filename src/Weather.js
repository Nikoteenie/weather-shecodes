import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon:
        ("src",
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`),
    });
  }

  let apiKey = "b6520355a84f46a27e6fe4523cdc2546";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleSubmit);

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city... "
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>Miami</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitlize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
              <span className="float-left">
                <strong className="temperature">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span className="unit">°C</span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li> Precipitation: 50% </li>
              <li> Humidity:{weatherData.humidity}% </li>
              <li> Wind:{weatherData.wind}km/h </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b6520355a84f46a27e6fe4523cdc2546";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.dafaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return "Loading...";
  }
}
