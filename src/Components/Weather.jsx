import Forecast from "./Forecast";
import Map from "./Map";

export default function Weather({ weather = {}, geoPosition }) {
  const { current, location } = weather;

  return (
    <div className="p-3 mt-6 flex flex-col gap-8 items-center ">
      <h1 className="text-center text-2xl  font-medium">Current Weather</h1>
      <div className="flex gap-5">
        <div className="flex gap-10 bg-gray-100 bg-opacity-60 rounded-lg p-8">
          <div>
            <span className="text-lg">
              Last updated: {current.last_updated}
            </span>
            <h1 className="text-2xl">
              {location.name}, {location.region}
            </h1>
            <div className="flex items-center mt-5">
              <img src={current.condition.icon} />
              <span className="text-4xl">{current.temp_c}&deg;C</span>
            </div>
            <span className="text-xl">{current.condition.text}</span>
          </div>
          <div className="grid grid-cols-2 text-lg font-normal self-center gap-1 bg-gray-50 bg-opacity-50 p-10 rounded-lg">
            <span>Feels like: {current.feelslike_c}&deg;C</span>
            <span>Dew point: {current.dewpoint_c}&deg;C</span>
            <span>Humidity: {current.humidity}%</span>
            <span>Uv: {current.uv}</span>
            <span>Wind speed: {current.wind_kph} Kph</span>
            <span>Wind Direction: {current.wind_dir}</span>
          </div>
        </div>
        <Map location={location} />
      </div>
      <Forecast weather={weather} />
    </div>
  );
}
