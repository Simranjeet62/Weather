export default function Logo_Search({ setCity, city, weatherData }) {
  return (
    <div className="flex flex-col gap-20 p-3">
      <h1 className="text-xl">Weather app</h1>
      <form className="self-center text-3xl flex gap-5 mb-6">
        <label htmlFor="searchWeather" className="font-normal">
          Search
        </label>
        <input
          className="rounded-lg px-2.5 bg-gray-100 bg-opacity-40 placeholder-gray-700"
          type="text"
          placeholder={weatherData?.location?.name}
          id="searchWeather"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
      </form>
    </div>
  );
}
