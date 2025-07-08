import React, { useRef, useState, useEffect } from "react";
import ShowData from "./ShowData";

const Input = () => {
  const [values, setValues] = useState(null);
  const ref = useRef();

  // Automatically fetch weather data based on current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("Current location:", lat, lon);

        // Fetch weather data using coordinates
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f00c38e0279b7bc85480c3fe775d518c&units=metric`
        );
        const jsonData = await data.json();
        setValues(jsonData);
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  }, []);

  const fetchApiData = async () => {
    const city = ref.current.value;
    if (!city) return;
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f00c38e0279b7bc85480c3fe775d518c&units=metric`
    );
    const jsonData = await data.json();
    setValues(jsonData);
    ref.current.value = "";
  };

  return (
    <>
      <div>
        <span className="w-100 spanT">
          <input
            ref={ref}
            required
            type="text"
            className="form-control Inpu"
            placeholder="Enter your City..."
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={fetchApiData}
          >
            Search
          </button>
        </span>
      </div>
      <ShowData values={values} />
    </>
  );
};

export default Input;
