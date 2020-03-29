import React, { useState, useEffect } from "react";
import { Box, DataTable as GrommetDataTable } from "grommet";
import getColumns from "./GetColumns";

const DataTable = ({ data, location, caseTotal, deathTotal }) => {
  const [DataArr, setDataArr] = useState([]);
  const { columns } = getColumns(location);

  const nArr = data.map(numbers => ({
    ...numbers,
    location,
    caseRatio: (numbers.cases / caseTotal) * 100,
    deathRatio: (numbers.deaths / deathTotal) * 100
  }));

  useEffect(() => {
    setDataArr(nArr);
  }, [data]);

  return (
    <Box align="center" pad="large">
      <GrommetDataTable columns={columns} data={DataArr} size="medium" />
    </Box>
  );
};

export default DataTable;
