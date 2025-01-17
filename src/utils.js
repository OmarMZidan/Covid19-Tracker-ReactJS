import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "var(--red-color)",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 300,
  },
  recovered: {
    hex: "var(--turquoise-color)",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 300,
  },
  deaths: {
    hex: "var(--grey2-color)",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 300,
  },
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const sortData = (data, casesType = "cases") => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => (a[casesType] > b[casesType] ? -1 : 1));
};

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country, index) => (
    <Circle
      key={index}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          {/* <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div> */}
          <div className="info-name">
            {" "}
            <img
              className="info-flag"
              src={country.countryInfo.flag}
              alt={`${country} logo`}
            />
            {country.country}
          </div>
          <div className="info-confirmed">
            {numeral(country.cases).format("0,0")} <span>Infected</span>
          </div>
          {/* <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div> */}
        </div>
      </Popup>
    </Circle>
  ));
