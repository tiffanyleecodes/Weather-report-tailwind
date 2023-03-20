import React from "react";
import ThermostatIcon from "@mui/icons-material/Thermostat";

function WeatherReport({ weatherData, showWeather }) {
  return (
    <div className="report">
      <hr className="my-8 border-2 border-zinc-800 opacity-20 mx-4" />
      {weatherData ? (
        <>
          <div className="px-10">
            <div className="flex items-center justify-between flex-col">
              <h1 className="text-2xl font-bold mb-2">
                {weatherData.name} , {weatherData.sys.country}
              </h1>
              <img src={showWeather[0].img} alt="" className="w-32 " />

              <h2 className="text-2xl font-medium">{showWeather[0].type}</h2>
            </div>

            <div className="flex items-end justify-between mt-5">
              <div className="flex items-center justify-between">
                <ThermostatIcon className=" mt-3  " />
                <p className="text-3xl">
                  {(weatherData.main.temp - 273).toFixed(1)}&#176;c
                </p>
              </div>

              <div className="ml-4">
                <p className="text-1xl">
                  Feels Like {(weatherData.main.feels_like - 273).toFixed(1)}
                  &#176;c
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="font-medium">Weather data not available</p>
      )}
    </div>
  );
}

export default WeatherReport;
