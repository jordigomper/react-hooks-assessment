import React, { createContext } from "react";

const APIContext = createContext([]);

const APIProvider = ({ children }) => {
  return (
    <APIContext.Provider value={{ value: "hello world" }}>
      {children}
    </APIContext.Provider>
  );
};

export { APIContext, APIProvider };
