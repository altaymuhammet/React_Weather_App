import "./App.css";
import useWeather from "./components/useWeather/useWeather";
import WeatherForm from "./components/form/WeatherForm";
import Loader from "./components/Loader/Loader";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";

function App() {
  const {
    form,
    setForm,
    currentWeather,
    setCurrentWeather,
    loader,
    error,
    setError,
    submitRequest,
  } = useWeather();

  const locationHandler = (location) => {
    submitRequest(location.trim());
  };

  const closeHandler = (state) => {
    setCurrentWeather(state);
    setForm(true);
    setError(false);
  };

  const inputChangeHandler = (state) => {
    setError(state);
  };

  return (
    <div className="App">
      <h1 style={{ color: "white", marginBottom: "40px" }}>
        Weather{" "}
        <span style={{ fontWeight: "bold", color: "#112b3c" }}>App</span>{" "}
      </h1>
      {loader && <Loader />}
      {form && (
        <WeatherForm
          data={locationHandler}
          err={error}
          changeHandler={inputChangeHandler}
        />
      )}
      {currentWeather && (
        <CurrentWeather data={currentWeather} close={closeHandler} />
      )}
    </div>
  );
}

export default App;
