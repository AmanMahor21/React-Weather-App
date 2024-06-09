import React, { useState } from "react";
import { getWeather } from "../core/_request";

const SearchComponent = ({ setState }) => {
  // VAIRABLES & STATES
  const [searchState, setSearchState] = useState("");
  const [customLoader, setCustomLoader] = useState(false);

  // GET WEATHER VIA API
  const getWeatherData = () => {
    setCustomLoader(true);
    getWeather(searchState)
      .then((response) => {
        setCustomLoader(false);
        setState(response?.data);
      })
      .catch((e) => {
        setState({
          data: "",
          error: e?.response?.statusText,
        });
      })
      .finally(() => {
        setCustomLoader(false);
      });
  };

  // HANDLE ENTER
  const handleEnterPress = (e) => {
    if (e.code === "Enter") {
      getWeatherData();
    }
  };

  return (
    <div className="search-wrapper">
      {/* INPUT FIELD */}
      <input
        type="text"
        className="search-box"
        name={searchState}
        onKeyDown={handleEnterPress}
        onChange={(e) => setSearchState(e.target.value)}
      />

      {/* SEARH BUTTON */}
      <button
        className={`search-btn ${searchState ? "" : "search-btn-disabled"}`}
        disabled={searchState ? false : true}
        onClick={() => getWeatherData()}
      >
        Search
      </button>

      {/* LOADER */}
      {customLoader && (
        <div className="overlay">
          <span class="loader"></span>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
