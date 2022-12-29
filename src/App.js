import "./App.css";
import { useState, useEffect } from "react";
import { fetchWeatherData } from "./services/weather-api";
import { ForecastWrapper } from "./UI/forecast-wrapper";
import { ForecastToday } from "./components/forecast-today";
import { ForecastList as ForecastListItem } from "./components/forecast-list";
import { ZipForm } from "./components/zip-form";
import { ErrorItem } from "./components/error-item";

function App() {
  const [zip, setZip] = useState("12472");
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState();

  // Get weather and handle erros.
  const getWeather = () => {
    fetchWeatherData(zip)
      .then(setWeather)
      .catch((error) => {
        setError(error.message);
      });
  };

  //Validate the ZIP code and get weather data.

  const submitHandler = (e) => {
    e.preventDefault();
    if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip)) {
      setError("Please enter a valid 5 digit ZIP code.");
      return;
    } else {
      setError("");
      getWeather();
    }
  };

  //Controlled input component.
  const zipHandler = (e) => {
    e.preventDefault();
    setZip(e.target.value);
  };

  //Fetch weather on page load.
  useEffect(() => {
    getWeather();
  }, []);

  const [today, ...week] = weather;

  return (
    <div className="App">
      <ZipForm value={zip} onChange={zipHandler} onClick={submitHandler} />

      {error ? <ErrorItem errorMessage={error} /> : ""}

      {today ? <ForecastToday item={today} /> : ""}

      <ForecastWrapper>
        {week.map(item => <ForecastListItem key={item.key} item={item} />)}
      </ForecastWrapper>
    </div>
  );
}

export default App;
