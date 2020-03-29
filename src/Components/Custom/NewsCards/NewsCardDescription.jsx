import React from "react";
import { Box, Text } from "grommet";

const NewsCardDescription = ({ description }) => (
  <Box
    tag="description"
    direction="row"
    align="start"
    justify="between"
    pad={{ left: "small", vertical: "small" }}
  >
    <Text size="large" color="dark-1" margin={{ vertical: "small" }}>
      {description}
    </Text>
  </Box>
);

export default NewsCardDescription;
