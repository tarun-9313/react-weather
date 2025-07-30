import React, { useState } from "react";
import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  async function handleWeather() {
    const API_KEY = "2cfb37bcc5d06f5917d25399d685e609";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`;
    const result = await fetch(url);
    const response = await result.json();
    if (response.cod === 200) {
      setWeather(response);
    } else {
      alert("No city found");
    }
  }

  return (
    <div className="container">
      <h1 className="title">Weather Finder</h1>
      <div className="input-section">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter city name"
        />
        <button onClick={handleWeather}>Get Weather</button>
      </div>
      {weather && (
        <div className="weather-card">
          <h3>City: {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather