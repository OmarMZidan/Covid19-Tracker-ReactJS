import { Card, CardContent } from "@material-ui/core";
import React from "react";
import LineGraph from "./LineGraph/LineGraph";
import Table from "./Table/Table";

const RightSection = ({ countries, casesType }) => {
  return (
    <Card className="app__right">
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
