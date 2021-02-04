import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import RightSection from "../RightSection/RightSection";
import { sortData } from "../../utils";
import "leaflet/dist/leaflet.css";
// import logo from "./../../images/logo.png";
import LeftSection from "../LeftSection/LeftSection";

function Home() {
  const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      await axios("https://disease.sh/v3/covid-19/countries").then(
        (response) => {
          const countries = response.data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            flag: country.countryInfo.flag,
          }));

          const sortedData = sortData(response.data);
          setTableData(sortedData);
          setCountries(countries);
          setMapCountries(response.data);
        }
      );
    };
    getCountriesData();
  }, []);

  return (
    <div className="home">
      <LeftSection countries={countries} mapCountries={mapCountries} />
      <RightSection countries={tableData} />
    </div>
  );
}

export default Home;
