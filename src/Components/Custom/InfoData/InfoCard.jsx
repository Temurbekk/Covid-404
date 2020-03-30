import React from "react";
import { Box, Heading } from "grommet";

const InfoCard = ({ title, children, ...rest }) => (
  <Box
    width="xlarge"
    round="small"
    elevation="small"
    overflow="hidden"
    {...rest}
  >
    <Box height="xsmall">
      <Heading level="1" margin="none">
        {title}
      </Heading>
    </Box>

    {children}
  </Box>
);

export default InfoCard;
