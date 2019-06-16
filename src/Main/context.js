import React, { createContext, useState, useEffect } from "react";

const APIContext = createContext([]);

const APIProvider = ({ children }) => {
  const [habitants, setHabitants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(process.env.REACT_APP_API_URL)
        .then(response => response.json())
        .then(({ Brastlewark }) => Brastlewark);
      console.log(response);
      setHabitants(response);
    }
    fetchData();
  }, []);

  return (
    <APIContext.Provider value={habitants}>{children}</APIContext.Provider>
  );
};

export { APIContext, APIProvider };
