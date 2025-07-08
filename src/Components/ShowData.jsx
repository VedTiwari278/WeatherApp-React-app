import React from "react";
import {
  FaWind,
  FaTemperatureLow,
  FaTachometerAlt,
  FaWater,
} from "react-icons/fa";
import { useEffect } from "react";

const ShowData = ({ values }) => {
  //

  //

  console.log(values);
  if (!values) return <p>No data available</p>;

  return (
    <div className="card p-3 Maincard">
      <h2 className="text-xl font-semibold mb-4">
        {values.name}, {values.sys.country}
      </h2>
      <div className="icon mb-4 flex justify-center">
        <img
          src={`https://openweathermap.org/img/wn/${values.weather[0].icon}@2x.png`}
          alt="weather icon"
          style={{ width: "100px" }}
        />
      </div>
      <div className="SubPart grid grid-cols-2 gap-4 text-lg">
        <div className="flex items-center wind gap-2">
          <FaWind />
          <span>Wind: {values.wind.speed} m/s</span>
        </div>
        <div className="flex items-center gap-2 Humadity">
          <FaWater />
          <span>Humidity: {values.main.humidity}%</span>
        </div>
      </div>
      <div className="SubPart grid grid-cols-2 gap-4 text-lg mt-4">
        <div className="flex items-center gap-2 Pressure ">
          <FaTachometerAlt />
          <span>Pressure: {values.main.pressure} hPa</span>
        </div>
        <div className="flex items-center feel gap-2">
          <FaTemperatureLow />
          <span>Feels like: {values.main.feels_like}°C</span>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
