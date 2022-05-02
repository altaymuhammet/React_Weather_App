import React from "react";
import classes from "./CurrentWeather.module.css";
import { Container, Row, Col } from "react-bootstrap";
import CurrentDayWeatherDetails from "../CurrentDayWeatherDetails/CurrentDayWeatherDetails";
import { AiFillCloseCircle } from "react-icons/ai";

import CurrentDayWeather from "../CurrentDayWeather/CurrentDayWeather";
import UpComingDaysWeather from "../UpComingDaysWeather/UpComingDaysWeather";

const CurrentWeather = ({ data, close }) => {
  const closeCurrentWeatherHandler = () => {
    close(false);
  };

  const style = {
    backgroundColor: "#112B3C",
    height: "420px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  };

  return (
    <Container fluid className={`${classes.container} mx-3`}>
      <AiFillCloseCircle
        className={classes.closeCircle}
        onClick={closeCurrentWeatherHandler}
      />
      <Row className={`${classes.row} m-0 p-0`} style={style}>
        <Col
          className={`${classes.col} m-0 p-0`}
          xs={12}
          sm={4}
          style={{
            borderRadius: "20px",
            position: "relative",
            height: "420px",
          }}
        >
          <div className={classes.opacityDiv}></div>
          <div className={classes.imageDiv}></div>
          <CurrentDayWeather
            weatherData={{
              data: data.consolidated_weather[0],
              title: data.title,
            }}
          />
        </Col>
        <Col
          className="m-0 p-0 pb-3"
          xs={12}
          sm={8}
          style={{
            backgroundColor: "#112B3C",
            borderRadius: "20px",
            color: "#fff",
          }}
        >
          <CurrentDayWeatherDetails weatherData={data} />
          <UpComingDaysWeather
            weatherData={data.consolidated_weather.slice(1)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentWeather;
