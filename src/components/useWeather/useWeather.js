import React, { useState } from "react";

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useWeather = () => {
  const [form, setForm] = useState(true);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const getWoeid = async (location) => {
    const response = await fetch(`${REQUEST_URL}/search/?query=${location}`);
    const data = await response.json();
    if (!data || data.length === 0) {
      setError("No location found!");
      setForm(true);
      setLoader(false);
      return;
    }
    return data[0].woeid;
  };

  const getCityData = async (id) => {
    const cityData = await fetch(`${REQUEST_URL}/${id}`);
    const city = await cityData.json();
    if (!city || city.length === 0) {
      setError("Something went wrong!");
      setForm(true);
      setLoader(false);
      return;
    }
    return city;
  };

  const submitRequest = async (location) => {
    setForm(false);
    setLoader(true);
    const id = await getWoeid(location);
    const data = await getCityData(id);
    setCurrentWeather(data);
    setLoader(false);
  };

  return {
    form,
    setForm,
    currentWeather,
    setCurrentWeather,
    loader,
    error,
    setError,
    submitRequest,
  };
};

export default useWeather;
