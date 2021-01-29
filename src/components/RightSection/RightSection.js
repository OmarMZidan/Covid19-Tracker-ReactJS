import { Card, CardContent } from "@material-ui/core";
import React, { useContext } from "react";
import { AuthContext } from "../../context/CovidProvider";
import LineGraph from "./../LineGraph/LineGraph";
import Table from "./../Table/Table";
import "./RightSection.scss";

const RightSection = ({ countries }) => {
  const [casesType, setCasesType] = useContext(AuthContext);

  return (
    <Card className="home__right">
      <CardContent>
        <h3>live Cases by Country</h3>
        <Table countries={countries} />
        <h3>Worldwide new {casesType}</h3>
        <LineGraph casesType={casesType} />
      </CardContent>
    </Card>
  );
};

export default RightSection;
