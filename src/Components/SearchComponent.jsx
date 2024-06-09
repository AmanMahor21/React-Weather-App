import React, { useState } from "react";
import { getWeather } from "../core/_request";

const SearchComponent = ({ setState }) => {
  // VAIRABLES & STATES
  const [searchState, setSearchState] = useState("");
  const [addMultiple, setAddMultiple] = useState(false);
  const [customLoader, setCustomLoader] = useState(false);

  // GET WEATHER VIA API
  const getWeatherData = () => {
    setCustomLoader(true);
    getWeather(searchState)
      .then((response) => {
        setCustomLoader(false);
        setState((current) => {
          return {
            data: addMultiple
              ? [...current?.data, response?.data]
              : [response?.data],
            error: undefined,
          };
        });
      })
      .catch((e) => {
        setState((current) => {
          return {
            data: current?.data,
            error: e?.response?.statusText,
          };
        });
      })
      .finally(() => {
        setCustomLoader(false);
      });
  };

  // HANDLE ENTER
  const handleEnterPress = (e) => {
    if (e.code === "Enter" && searchState) {
      getWeatherData();
    }
  };

  return (
    <div className="search-wrapper">
      {/* INPUT FIELD */}
      <input
        type="text"
        className="search-box"
        placeholder="Enter City or Zip Code"
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

      {/* MULTIPLE */}
      <div id="multiple">
        <input
          type="checkbox"
          id="multi-check"
          checked={addMultiple}
          onChange={(e) => setAddMultiple(e.target.checked)}
        />
        <label htmlFor="multi-check">Add Multiple Cities</label>
      </div>

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
