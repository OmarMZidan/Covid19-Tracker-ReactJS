import { Card, CardContent } from "@material-ui/core";
import React from "react";
import LineGraph from "./LineGraph/LineGraph";
import Table from "./Table/Table";

const RightSection = ({ countries }) => {
  return (
    <Card className="app__right">
      <CardContent>
        <h3>live Cases by Country</h3>
        <Table countries={countries} />
        <h3>Worldwide new cases</h3>
        <LineGraph />
      </CardContent>
    </Card>
  );
};

export default RightSection;
