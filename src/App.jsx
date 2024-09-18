import { useEffect, useState } from "react";
import Logo_Search from "./Components/Logo_Search";
import Weather from "./Components/Weather";

export default function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [position, setPosition] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setPosition(`${lat},${lon}`);
  }

  console.log(weatherData);

  const wKey = "a7defc10e50b46afbb9113219242108";

  useEffect(
    function () {
      async function getWeather() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://api.weatherapi.com/v1/current.json/forecast.json?key=${wKey}&q=${
              searchCity ? searchCity : position
            }`
          );
          const data = await res.json();
          setWeatherData(data);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        }
      }
      let timeoutId = setTimeout(() => getWeather(), 500);
      return () => clearTimeout(timeoutId);
    },
    [searchCity, position]
  );

  return (
    <div className="background h-screen">
      <Logo_Search
        setCity={setSearchCity}
        city={searchCity}
        weatherData={weatherData}
      />
      {isLoading ? (
        <h1 className="text-center text-3xl mt-6">...Loading</h1>
      ) : weatherData?.current ? (
        <Weather weather={weatherData} />
      ) : (
        <h1 className="text-center text-3xl mt-6">⛔Server Error</h1>
      )}
    </div>
  );
}
