import "./App.css";
import { useRef, useState } from "react";
import WeatherReport from "./WeatherReport";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const WeatherTypes = [
    {
      type: "Clear",
      img: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather01-1024.png",
    },
    {
      type: "Rain",
      img: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-1024.png",
    },
    {
      type: "Snow",
      img: "https://cdn3.iconfinder.com/data/icons/winter-45/685/2-Snowing-1024.png",
    },
    {
      type: "Clouds",
      img: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather04-1024.png",
    },
    {
      type: "Haze",
      img: "https://cdn1.iconfinder.com/data/icons/weather-471/128/HAZE-1024.png",
    },
    {
      type: "Smoke",
      img: "https://cdn1.iconfinder.com/data/icons/world-pollution-3/512/air-pollutiom-dust-smoke-pm2.5-environment-1024.png",
    },
    {
      type: "Mist",
      img: "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-1024.png",
    },
    {
      type: "Drizzle",
      img: "https://cdn3.iconfinder.com/data/icons/spring-23/32/rain-rainfall-drizzle-sun-cloud-weather-forecast-1024.png",
    },
  ];
  const inputRef = useRef(null); // initial state
  const apikey = "a50ad62e63cf70e3ce312ed386abb7b3";

  const [weatherData, setWeatherData] = useState(undefined);
  const [showWeather, setShowWeather] = useState(null);
  const fetchWeatherData = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&appid=${apikey}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(null); // make previous fetched data to null
        setShowWeather(
          WeatherTypes.filter(
            (weather) => weather.type === data.weather[0].main
          )
        );
        console.log(data);
        setWeatherData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App bg-green-400 flex items-center justify-center h-screen ">
      <div className="page bg-slate-50 py-8  m-2 rounded-md max-w-lg">
        <div className="flex items-center justify-center">
          <input
            type="text"
            ref={inputRef}
            className="location border-2 border-zinc-800 border-r-0 h-8 w-3/4 px-2 focus:outline-none"
            placeholder="Search for a city"
          ></input>
          <button
            onClick={fetchWeatherData}
            className="border-2 border-zinc-800 border-l-0 h-8"
          >
            <SearchIcon />
          </button>
        </div>

        {weatherData !== undefined && (
          <WeatherReport weatherData={weatherData} showWeather={showWeather} />
        )}
      </div>
    </div>
  );
}

export default App;
