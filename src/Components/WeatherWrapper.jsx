import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import HeaderTag from "./HeaderTag";
import NoDataFound from "./NoDataFound";
import WeatherCard from "./WeatherCard";
import Toggle from "./Toggle";

const WeatherWrapper = () => {
  // STATES
  const [state, setState] = useState({
    data: "",
    error: undefined,
  });

  return (
    <React.Fragment>
      {/* DARK & LIGHT MODE */}
      <Toggle />

      <div className="main-wrapper">
        {/* HEADER  */}
        <HeaderTag title={"ReactWeather"} />

        {/* SEARCH FIELD */}
        <SearchComponent setState={setState} />

        {/* CARD */}
        {state?.data ? (
          <div className="card-wrapper">
            <WeatherCard data={state?.data} />
          </div>
        ) : (
          state?.error && !state?.data && <NoDataFound />
        )}
      </div>
    </React.Fragment>
  );
};

export default WeatherWrapper;
