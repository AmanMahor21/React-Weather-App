import axios from "axios";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_KEY;

const getWeather = (data) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=${WEATHER_API_KEY}`
    )
    .then((response) => response);
};

export { getWeather };
