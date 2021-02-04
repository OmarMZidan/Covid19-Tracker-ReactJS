import React, { useContext } from "react";
import { AuthContext } from "../../context/CovidProvider";
import LineGraph from "./../LineGraph/LineGraph";
import Table from "./../Table/Table";
import "./RightSection.scss";

const RightSection = ({ countries }) => {
  const [casesType] = useContext(AuthContext);

  return (
    <div className="home__right">
      <div className="home__casesList">
        <h1>live Cases by Country</h1>
        <Table countries={countries} />
        <h1>Worldwide new {casesType}</h1>
        <LineGraph casesType={casesType} />
      </div>
    </div>
  );
};

export default RightSection;
