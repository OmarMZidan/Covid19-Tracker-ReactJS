import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const LineGraph = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => {});
  }, []);
  return <div>{/* <Line data options /> */}</div>;
};

export default LineGraph;
