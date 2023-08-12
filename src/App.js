import React, { useState } from 'react';
import './App.css'
import Search from './components/search/search';
import RealTimeWeather from './components/realTimeWeather/realTimeWeather';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const openWeatherApiURL = "https://api.openweathermap.org/data/2.5";

    const fetchCurrentWeather = fetch(`${openWeatherApiURL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`)

    const fetchWeatherForcast = fetch(`${openWeatherApiURL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`)

    // Agréger le résultat des promesses fetchCurrentWeather et fetchWeatherForcast
    Promise.all([fetchCurrentWeather, fetchWeatherForcast])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);

  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <RealTimeWeather data={currentWeather} />}
      {/* {forecast && <Forecast data={forecast} />} */}
    </div>
  );
}

export default App;
