import moment from "moment";
import React from "react";
import classes from "./UpComingDaysWeather.module.css";

const UpComingDaysWeather = ({ weatherData }) => {
  return (
    <ul className={classes.upcomingDays}>
      {weatherData.map((data) => {
        return (
          <li
            className={`${classes.item} pt-3 d-flex flex-column justify-content-between align-items-center`}
            key={data.id}
          >
            <h5>{moment(data.applicable_date).format("ddd")}</h5>
            <img
              className={classes.img}
              src={`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`}
            />
            <h5>{`${Math.round(data.the_temp)}°C`}</h5>
          </li>
        );
      })}
    </ul>
  );
};

export default UpComingDaysWeather;
