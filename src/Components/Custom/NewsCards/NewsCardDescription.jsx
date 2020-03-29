import React from "react";
import { Box, Text } from "grommet";

const NewsCardDescription = ({ description }) => (
  <Box
    tag="description"
    direction="row"
    align="center"
    justify="between"
    pad={{ left: "small", vertical: "small" }}
  >
    <Text size="medium" color="dark-5" margin={{ vertical: "small" }} truncate>
      {description}
    </Text>
  </Box>
);

export default NewsCardDescription;
