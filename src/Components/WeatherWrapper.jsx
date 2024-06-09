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
        <HeaderTag title={"Weather Application"} />

        {/* SEARCH FIELD */}
        <SearchComponent setState={setState} />

        {/* IF ERROR OCCUR */}
        {state?.error && <NoDataFound />}

        {/* CARD */}
        {state?.data && (
          <div className="card-wrapper">
            {state?.data?.map((item, index) => {
              return <WeatherCard data={item} />;
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default WeatherWrapper;
