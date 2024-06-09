import React from "react";
import sun from "../assests/icons/clear-day.svg";

// GET DYNAMIC ICON
const getIconUrl = (iconCode) => {
  try {
    return require(`../assests/icons/${iconCode}.svg`);
  } catch (error) {
    console.error(`Icon for code ${iconCode} not found.`);
    return null;
  }
};

// GET DATE
const getDate = () => {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
};

const WeatherCard = ({ data }) => {
  const { main, name, sys, weather } = data;
  const weatherIconCode = weather?.[0]?.main;

  console.log(weather);
  return (
    <div class="card">
      <div className="upper-card">
        <img src={sun} alt="Is" className="img-temp" />
        <div class="info">
          <h2>25°C</h2>
        </div>
        <div class="info">
          <p>Sunny</p>
          <span>Feels like 80</span>
        </div>
      </div>

      <div className="lower-card">
        <div>wind</div>
        <div>humidity</div>
        <div>extra info</div>
      </div>
    </div>
  );
};

export default WeatherCard;
