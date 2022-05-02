import React from "react";
import classes from "./CurrentDayWeather.module.css";
import moment from "moment";
import { HiLocationMarker } from "react-icons/hi";

const CurrentDayWeather = ({ weatherData }) => {
  const weekDay = moment(weatherData.applicable_date).format("dddd");
  const imgSrc = `https://www.metaweather.com/static/img/weather/${weatherData.data.weather_state_abbr}.svg`;
  const currentDay = moment(weatherData.applicable_date).format("MMM Mo");
  const max = Math.round(weatherData.data.max_temp);
  const min = Math.round(weatherData.data.min_temp);
  const weatherState = weatherData.data.weather_state_name;

  return (
    <div className={classes.current}>
      <div>
        <h1>{weekDay.toUpperCase()}</h1>
      </div>
      <div className="d-flex justify-content-start justify-content-md-between align-items-center ">
        <div className="d-flex justify-content-start align-items-center">
          <HiLocationMarker
            style={{ fontSize: "1.3rem", marginRight: "5px" }}
          />
          <h5 className="mt-2">{weatherData.title}</h5>
        </div>
        <div className={classes.imgSrc}>
          <img src={imgSrc} style={{ width: "60%", marginLeft: "20px" }} />
        </div>
      </div>
      <div className={classes.bottomOfCurrentDay}>
        <h2>{currentDay}</h2>
        <br></br>
        <h6 className="d-flex justify-content-md-between w-75">
          <span className="me-3">Max Temp:</span> {max} °C
        </h6>
        <h6 className="d-flex justify-content-md-between w-75">
          <span className="me-3">Max Temp:</span> {min} °C
        </h6>
        <h6 className="mt-3" style={{ fontWeight: "bold " }}>
          {weatherState}
        </h6>
      </div>
    </div>
  );
};

export default CurrentDayWeather;
