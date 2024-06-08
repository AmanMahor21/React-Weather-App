import React, { useEffect, useState } from "react";
import DisplayWeather from "./DisplayWeather";
import axios from "axios";
import "./App.css";
const App = () => {
  const [name, setname] = useState("");
  const [fetchedData, setFetchedData] = useState("");

  // useEffect(() => {
  const apiFetch = async () => {
    try {
      const APIkey = "7bfd12414671569be9ab98cc553f17a2";
      const cityname = name;
      const fetching = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`
      );
      setFetchedData(fetching.data);
    } catch (error) {
      console.log(error);
    }
  };

  // apiFetch();
  // }, [name]);

  console.log(name);
  return (
    <>
      <DisplayWeather
        setname={setname}
        fetchedData={fetchedData}
        name={name}
        apiFetch={apiFetch}
      />
    </>
  );
};

export default App;
