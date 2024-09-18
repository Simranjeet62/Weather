import Hour from "./Hour.jsx";

export default function Forecast({ weather }) {
  const { forecast } = weather;
  const hour = forecast.forecastday[0].hour;
  console.log(hour);
  return (
    <div className="w-3/4 mt-6">
      <h1 className="text-center text-2xl m-5 font-medium">Hourly Forecast</h1>
      <div className="flex overflow-x-scroll gap-3">
        {hour.map((el) => (
          <Hour hour={el} />
        ))}
      </div>
    </div>
  );
}
