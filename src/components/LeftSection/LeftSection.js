import React, { useEffect, useState, useContext } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import "./LeftSection.scss";
import InfoBox from "../InfoBox/InfoBox";
import Map from "../Map/Map";
import axios from "axios";
import { prettyPrintStat } from "../../utils";
import { AuthContext } from "../../context/CovidProvider";
import {
  faVirus,
  faHeadSideCough,
  faHandHoldingMedical,
  faSkull,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

const LeftSection = ({ countries, mapCountries }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 27, lng: 30 });
  const [country, setCountry] = useState("worldwide");
  const [mapZoom, setMapZoom] = useState(3);
  const [countryInfo, setCountryInfo] = useState({});
  const [casesType, setCasesType] = useContext(AuthContext);

  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/all").then((response) => {
      setCountryInfo(response.data);
    });
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await axios(url).then((response) => {
      let data = response.data;
      console.log(data);
      if (countryCode === "worldwide") {
        setMapCenter({ lat: 27, lng: 30 });
      } else {
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      }
      setMapZoom(4);
      setCountry(countryCode);
      setCountryInfo(data);
    });
  };

  return (
    <div className="home__left">
      <div className="home__header">
        <h1>Stats Overview</h1>
        <FormControl className="home__dropdown">
          <Select variant="standard" value={country} onChange={onCountryChange}>
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
          color="var(--red-color)"
          icon={faVirus}
          title="Infected"
          onClick={(e) => setCasesType("cases")}
          number={prettyPrintStat(countryInfo.cases)}
          today={prettyPrintStat(countryInfo.todayCases)}
        />
        <InfoBox
          color="var(--gold-color)"
          icon={faHeadSideCough}
          title="Active"
          number={prettyPrintStat(countryInfo.active)}
        />
        <InfoBox
          color="var(--turquoise-color)"
          icon={faHandHoldingMedical}
          title="Recovered"
          onClick={(e) => setCasesType("recovered")}
          number={prettyPrintStat(countryInfo.recovered)}
          today={prettyPrintStat(countryInfo.todayRecovered)}
        />
        <InfoBox
          color="var(--grey2-color)"
          icon={faSkull}
          title="Deaths"
          onClick={(e) => setCasesType("deaths")}
          number={prettyPrintStat(countryInfo.deaths)}
          today={prettyPrintStat(countryInfo.todayDeaths)}
        />
        {country === "worldwide" && (
          <InfoBox
            color="var(--purple-color)"
            icon={faFlag}
            title="Countries"
            number={countryInfo.affectedCountries}
          />
        )}
        {country !== "worldwide" && (
          <InfoBox
            color="var(--purple-color)"
            icon={faFlag}
            title="Population"
            number={prettyPrintStat(countryInfo.population)}
          />
        )}
      </div>
      <Map
        center={mapCenter}
        zoom={mapZoom}
        countries={mapCountries}
        casesType={casesType}
      />
    </div>
  );
};

export default LeftSection;
