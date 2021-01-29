import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./home.scss";
import InfoBox from "./../InfoBox/InfoBox";
import Map from "./../Map/Map";
import RightSection from "./../RightSection";
import { sortData, prettyPrintStat } from "./../../utils";
import "leaflet/dist/leaflet.css";
import logo from "./../../images/logo.png";

function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 27, lng: 30 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

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
          setMapCountries(response.data);
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
      let data = response.data;

      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4);
      setCountry(countryCode);
      setCountryInfo(data);
    });
  };

  return (
    <div className="home">
      <div className="home__left">
        <div className="home__header">
          {/* <FontAwesomeIcon icon={faUserNurse} /> */}
          {/* <img src={logo} alt="logo" /> */}
          <h1>Stats Overview </h1>
          <FormControl className="home__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country, index) => (
                <MenuItem key={index} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="home__stats">
          <InfoBox
            title="Coronavirus Cases"
            onClick={(e) => setCasesType("cases")}
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
          />
          <InfoBox
            title="Recovered"
            onClick={(e) => setCasesType("recovered")}
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
          />
          <InfoBox
            title="Deaths"
            onClick={(e) => setCasesType("deaths")}
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
          />
        </div>
        <Map
          center={mapCenter}
          zoom={mapZoom}
          countries={mapCountries}
          casesType={casesType}
        />
      </div>
      <RightSection countries={tableData} casesType={casesType} />
    </div>
  );
}

export default Home;
