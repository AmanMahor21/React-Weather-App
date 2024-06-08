import React, { useEffect, useState } from "react";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

import { MdDarkMode } from "react-icons/md";

const DisplayWeather = ({ setname, fetchedData, name, apiFetch }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  });
  const themechanger = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  console.log(theme);
  const handleInput = (e) => {
    setname(e.target.value);
  };

  return (
    <>
      <div className="con">
        <div className="d-flex">
          <h2 className="title">Wheather Application</h2>
          <button onClick={themechanger} className="themeBtn">
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>
        <div className="">
          <header className="box">
            <input
              type="text"
              className="textbox"
              onChange={handleInput}
              placeholder="Enter Location"
            />
            <button type="button" className="btn btn-light" onClick={apiFetch}>
              Search
            </button>
          </header>
        </div>


        <div>
          {fetchedData &&
          fetchedData?.name?.toLowerCase() !== name.toLowerCase() ? (
            <p
              style={{
                textAlign: "left",
                paddingLeft: "407px",
                color: "#9c0a0a",
                fontSize: "16px",
              }}
            >
              No match Found
            </p>
          ) : (
            ""
          )}
        </div>
        {fetchedData && (
          <div className="showWeather">
            <div className="cityName">
              <MdLocationPin className="location_icon" />

              <h3>{fetchedData.name}</h3>
            </div>
            <div className="humidity">
              <WiHumidity className="humidity-icon" />

              <p>
                Humudity : <span>{fetchedData?.main?.humidity}%</span>
              </p>
            </div>
            <div className="temp">
              <FaTemperatureHigh className="temp-icon" />
              <p>
                Temperature :{" "}
                <span>
                  {Math.round(fetchedData?.main?.temp - 273.15)}
                  <span style={{ verticalAlign: "super" }}>◦</span>C
                </span>
              </p>
            </div>
            <div className="wind">
              <FaWind className="wind-icon" />
              <p>
                Wind :{" "}
                <span>{Math.round(fetchedData?.wind?.speed * 3.6)} km/h</span>
              </p>
            </div>

            <div className="pressure">
              <p>
                Pressure : <span>{fetchedData?.main?.pressure} mb</span>
              </p>
            </div>

            <div className="sea-level">
              <p>
                Sea-level : <span>{fetchedData?.main?.sea_level} mb</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayWeather;
