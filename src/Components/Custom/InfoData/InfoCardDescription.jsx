import React from "react";
import { Box, Text } from "grommet";

const CardDescription = ({ description }) => (
  <Box
    tag="description"
    width="xxlarge"
    round="small"
    direction="row"
    align="center"
  >
    <Text size="xlarge" color="dark-1" margin={{ vertical: "small" }}>
      {description}
    </Text>
  </Box>
);

export default CardDescription;
