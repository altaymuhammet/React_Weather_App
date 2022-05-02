import React from "react";
import classes from "./CurrentDayWeatherDetails.module.css";
import moment from "moment";

const CurrentDayWeatherDetails = ({ weatherData }) => {
  const sunrise = moment(weatherData.sun_rise).format("HH : MM");
  const sunset = moment(weatherData.sun_set).format("HH : MM");

  return (
    <div className={`${classes.detailContainer} p-4`}>
      <div className={classes.item}>
        <span>Country:</span> {weatherData.parent.title}
      </div>
      <div>
        <span>Latitude:</span> {weatherData.latt_long.split(",")[0]}
      </div>
      <div>
        <span>Longitude:</span> {weatherData.latt_long.split(",")[1]}
      </div>
      <div>
        <span>Sunrise:</span> {sunrise}
      </div>
      <div>
        <span>Sunset:</span> {sunset}
      </div>
      <div>
        <span>Time Zone:</span> {weatherData.timezone}
      </div>
    </div>
  );
};

export default CurrentDayWeatherDetails;
