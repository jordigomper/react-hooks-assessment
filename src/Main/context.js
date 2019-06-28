import React, { createContext, useReducer, useEffect, useContext } from "react";
import { isArray } from "util";

const defaultValues = {
  habitants: [],
  professions: []
};

const APIContext = createContext(defaultValues);
const useAPIContext = () => useContext(APIContext);

const extractProfessions = habitants => {
  // create new Set professions
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
      return {
        habitants: Object.freeze(action.data),
        professions: Object.freeze(professions)
      };
    default:
      return state;
  }
}

const APIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValues);

  async function fetchData() {
    const localData = localStorage.getItem("habitantsLocal");
    localData && dispatch({ type: "fetch", data: JSON.parse(localData) });

    const response = await fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(({ Brastlewark }) => Brastlewark)
      .catch(error => console.error(error.message));

    if (response && isArray(response)) {
      dispatch({ type: "fetch", data: response });
      localStorage.setItem("habitantsLocal", JSON.stringify(response));
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <APIContext.Provider value={state}>{children}</APIContext.Provider>;
};

export { useAPIContext, APIProvider };
