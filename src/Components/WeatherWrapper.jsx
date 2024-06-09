import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import HeaderTag from "./HeaderTag";
import NoDataFound from "./NoDataFound";
import WeatherCard from "./WeatherCard";

const WeatherWrapper = () => {
  // STATES
  const [state, setState] = useState({
    data: "",
    error: undefined,
  });

  console.log(state);

  return (
    <React.Fragment>
      <div className="main-wrapper">
        {/* HEADER  */}
        <HeaderTag title={"ReactWeather"} />

        {/* SEARCH FIELD */}
        <SearchComponent setState={setState} />

        {/* CARD */}
        <WeatherCard data={state}/>

        {/* IF NOT DATA FOUND */}
        {state?.error && <NoDataFound />}
      </div>
    </React.Fragment>
  );
};

export default WeatherWrapper;
