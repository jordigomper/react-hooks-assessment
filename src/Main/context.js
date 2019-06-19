import React, { createContext, useReducer, useEffect } from "react";
import { isArray } from "util";

const STATE_INITIAL_VALUE = {
  habitants: [],
  professions: []
};

const APIContext = createContext([]);

const extractProfessions = habitants => {
  const professions = habitants.reduce((acc, { professions }) => {
    professions.map(profession => {
      profession && profession !== "undefined" && acc.add(profession);
    });
    return acc;
  }, new Set());

  return Array.from(professions);
};

function reducer(state, action) {
  switch (action.type) {
    case "fetch":
      const professions = extractProfessions(action.data);
      return { habitants: action.data, professions };
    default:
      return state;
  }
}

const APIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, STATE_INITIAL_VALUE);

  async function fetchData() {
    const localData = localStorage.getItem("habitantsLocal");
    localData && dispatch({ type: "fetch", data: JSON.parse(localData) });

    const response = await fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(({ Brastlewark }) => Brastlewark)
      .catch(error => console.error(error.message));

    if (response && isArray(response)) {
      console.log(response);
      dispatch({ type: "fetch", data: response });
      localStorage.setItem("habitantsLocal", JSON.stringify(response));
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <APIContext.Provider value={state}>{children}</APIContext.Provider>;
};

export { APIContext, APIProvider };
