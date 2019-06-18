import React, { createContext, useReducer, useEffect } from "react";
import { isArray } from "util";

const STATE_INITIAL_VALUE = {
  habitants: [],
  professions: []
};

const APIContext = createContext([]);

const APIProvider = ({ children }) => {
  function reducer(state, action) {
    const currentState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
      case "fetch":
        const professionsList = currentState.professions;
        action.data.map(({ professions }) =>
          professions.map(profession => {
            const current = profession.trim().toLowerCase();
            !professionsList.includes(current) && professionsList.push(current);
          })
        );
        return { habitants: action.data, professions: professionsList };
      default:
        return state;
    }
  }

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
