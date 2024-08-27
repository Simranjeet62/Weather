export default function Hour({ hour }) {
  return (
    <div className="border border-solid border-white rounded-lg text-center flex-shrink-0 bg-sky-100 bg-opacity-60">
      <div className="p-1">
        <span>{hour.time}</span>
        <div className="flex items-center">
          <img src={hour.condition.icon} />
          <div className="flex flex-col items-center">
            <span className="text-2xl">{hour.temp_c}&deg;C</span>
            <span>rain: {hour.chance_of_rain}%</span>
          </div>
        </div>
        <span className="text-center block mb-3">{hour.condition.text}</span>
        <div className="flex flex-col">
          <span>Feels Like: {hour.feelslike_c}&deg;C</span>
          <span>Humidity: {hour.humidity}%</span>
          <span>Wind: {hour.wind_kph} kph</span>
          <span>Wind Driection: {hour.wind_dir}</span>
        </div>
      </div>
    </div>
  );
}
