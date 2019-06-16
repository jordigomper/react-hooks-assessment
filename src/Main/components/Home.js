import React, { useContext } from "react";
import { APIContext } from "../context";

const Home = () => {
  const habitants = useContext(APIContext);

  return <div>{habitants.map(({ name }) => name)}</div>;
};

export default Home;
