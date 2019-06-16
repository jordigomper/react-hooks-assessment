import React, { useContext } from "react";
import { APIContext } from "../context";

const Home = () => {
  const { value } = useContext(APIContext);

  return <div>{value}</div>;
};

export default Home;
