import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./App.scss";
import InfoBox from "./components/InfoBox";
import Map from "./components/Map";
import RightSection from "./components/RightSection";
import { sortData } from "./utils";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/all").then((response) => {
      setCountryInfo(response.data);
    });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await axios("https://disease.sh/v3/covid-19/countries").then(
        (response) => {
          const countries = response.data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(response.data);
          setTableData(sortedData);
          setCountries(countries);
        }
      );
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await axios(url).then((response) => {
      setCountry(countryCode);
      setCountryInfo(response.data);
    });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker </h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox
            title="Coronavirus Cases"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <InfoBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <InfoBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        <Map />
      </div>
      <RightSection countries={tableData} />
    </div>
  );
}

export default App;
