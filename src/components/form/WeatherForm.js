import React, { useRef } from "react";
import classes from "./weatherForm.module.css";

const WeatherForm = ({ data, err, changeHandler }) => {
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    data(value);

    inputRef.current.value = "";
  };

  const inputChange = () => {
    changeHandler(false);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2>Search for weather</h2>
      <input
        className="px-3"
        type="text"
        onChange={inputChange}
        ref={inputRef}
        placeholder="city name.."
        required
      />
      <button type="submit">search</button>
      {err && (
        <h3
          style={{ color: "#E83A14", fontWeight: "1.2rem", marginTop: "20px" }}
        >
          {err}
        </h3>
      )}
    </form>
  );
};

export default WeatherForm;
