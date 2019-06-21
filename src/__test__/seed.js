import React, { useContext, createContext } from "react";

export const useAppContext = () => useContext(AppContext);
const defaultValues = [];
const AppContext = createContext(defaultValues);
export default AppContext;
