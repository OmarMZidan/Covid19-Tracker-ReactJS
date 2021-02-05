import React, { useState } from "react";
import "./Table.scss";
import numeral from "numeral";
import { sortData } from "../../utils";

const Table = ({ countries }) => {
  const [tableCases, setTableCases] = useState("cases");
  const [active, setActive] = useState("cases");
  console.log(countries);
  const sortedData = sortData(countries, tableCases);

  const handleChangeTab = (tabName) => {
    setTableCases(tabName);
    setActive(tabName);
  };
  return (
    <div>
      <div className="tabs">
        <div
          className={`tabs__btn ${active === "cases" && "tabs__btn--active"}`}
          onClick={() => handleChangeTab("cases")}
        >
          Infected
        </div>
        <div
          className={`tabs__btn ${
            active === "recovered" && "tabs__btn--active"
          }`}
          onClick={() => handleChangeTab("recovered")}
        >
          Recovered
        </div>
        <div
          className={`tabs__btn ${active === "deaths" && "tabs__btn--active"}`}
          onClick={() => handleChangeTab("deaths")}
        >
          Deaths
        </div>
      </div>
      <table className="table">
        <tbody>
          {sortedData.map(
            (
              {
                country,
                cases,
                deaths,
                recovered,
                countryInfo,
                todayRecovered,
                todayCases,
                todayDeaths,
              },
              index
            ) => (
              <tr key={index}>
                <td className="table__country">
                  <img
                    className="table__flag"
                    src={countryInfo.flag}
                    alt={`${country} logo`}
                  />
                  {country}{" "}
                  <sup>
                    +
                    {numeral(
                      tableCases === "cases"
                        ? todayCases
                        : tableCases === "recovered"
                        ? todayRecovered
                        : todayDeaths
                    ).format("0,0")}
                  </sup>
                </td>
                <td className="table__number" align="right">
                  <strong>
                    {numeral(
                      tableCases === "cases"
                        ? cases
                        : tableCases === "recovered"
                        ? recovered
                        : deaths
                    ).format("0,0")}
                  </strong>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
