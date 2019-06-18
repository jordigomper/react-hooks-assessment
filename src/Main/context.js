import React, { createContext, useState, useEffect } from "react";
import { isArray } from "util";

function MyError(message) {
  this.name = "error";
}

const APIContext = createContext([]);

const APIProvider = ({ children }) => {
  const [habitants, setHabitants] = useState([]);

  async function fetchData() {
    const localData = localStorage.getItem("habitantsLocal");
    localData && setHabitants(JSON.parse(localData));

    const response = await fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(({ Brastlewark }) => Brastlewark)
      .catch(error => console.error(error.message));

    if (response && isArray(response)) {
      setHabitants(response);
      localStorage.setItem("habitantsLocal", JSON.stringify(response));
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <APIContext.Provider value={habitants}>{children}</APIContext.Provider>
  );
};

export { APIContext, APIProvider };
