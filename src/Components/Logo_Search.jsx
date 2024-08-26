export default function Logo_Search({ setCity, city, weatherData }) {
  return (
    <div className="bg-gray-100 flex flex-col gap-20 p-3">
      <h1 className="text-xl">Weather app</h1>
      <form className="self-center text-2xl flex gap-5 mb-5">
        <label htmlFor="searchWeather" className="">
          Search
        </label>
        <input
          className="rounded-lg px-2.5"
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
