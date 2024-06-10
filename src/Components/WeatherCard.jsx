import React from "react";
import SVGWind from "../assests/icons/windsock.svg";
import SVGHumidity from "../assests/icons/raindrop.svg";
import SVGPresssure from "../assests/icons/thermometer.svg";
import visiblity from "../assests/icons/Visiblity.svg";
import DetailBox from "./DetailBox";
import { getIconUrl, getDate } from "../helper/_functions";

const WeatherCard = ({ data }) => {
  const { main, name, sys, weather, wind, visibility } = data;
  const weatherIconCode = weather?.[0]?.main?.toLowerCase();

  return (
    <div className="card">
      <div className="card-content">
        <div id="top">
          <p>
            {name}, {sys?.country}
          </p>
        </div>
        <div className="upper-card">
          <img
            src={getIconUrl(weatherIconCode)}
            alt="Is"
            className="img-temp"
          />
          <div className="info">
            <h2>{parseInt(main?.temp)}°C</h2>
          </div>

          <div className="info">
            <p>{weather?.[0]?.main}</p>
            <span>Feels like {parseInt(main?.feels_like)}</span>
          </div>
          <div className="info">
            <p> {getDate("date")}</p>
            <span>{getDate("time")}</span>
          </div>
        </div>

        <div className="lower-card">
          <DetailBox
            src={SVGHumidity}
            title={"Humidity"}
            width={30}
            value={main?.humidity}
          />
          <DetailBox
            src={SVGWind}
            title={"Wind Speed"}
            width={30}
            value={wind?.speed}
          />
          <DetailBox
            src={SVGPresssure}
            title={"Pressure"}
            width={30}
            value={main?.pressure}
          />
          <DetailBox
            src={visiblity}
            // src={SVGWind}
            title={"Visibility"}
            width={15}
            value={visibility}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
