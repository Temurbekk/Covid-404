import React from "react";
import { Box } from "grommet";
import DataHeading from "../../DataFetches/DataHeading";
import CountriesDataTable from "../../DataFetches/CountriesDataTable";
import StatesDataTable from "../../DataFetches/StatesDataTable";

export default () => {
  return (
    <Box align="center" margin="large">
      <DataHeading />
      <CountriesDataTable />
      <StatesDataTable />
    </Box>
  );
};
