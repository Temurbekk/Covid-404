import React from "react";
import { Box, Text } from "grommet";

const CardDescription = ({ description }) => (
  <Box
    tag="description"
    direction="row"
    align="center"
    justify="between"
    pad={{ left: "small", vertical: "small" }}
  >
    <Text size="mediu" color="dark-1" margin={{ vertical: "small" }} truncate>
      {description}
    </Text>
  </Box>
);

export default CardDescription;
