import React from "react";
import "./Table.scss";
import numeral from "numeral";

const Table = ({ countries }) => {
  console.log(countries);
  return (
    <table className="table">
      <tbody>
        {countries.map(({ country, cases, countryInfo }, index) => (
          <tr key={index}>
            <td className="table__country">
              <img
                className="table__flag"
                src={countryInfo.flag}
                alt={`${country} logo`}
              />
              {country}
            </td>
            <td className="table__number" align="right">
              <strong>{numeral(cases).format("0,0")}</strong>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
