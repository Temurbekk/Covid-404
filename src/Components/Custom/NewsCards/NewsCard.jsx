import React from "react";
import { Box, Image } from "grommet";

const NewsCard = ({ business = {}, children, ...rest }) => (
  <Box
    width="xlarge"
    round="small"
    elevation="small"
    overflow="hidden"
    {...rest}
  >
    <Box height="medium">
      <Image src={business.image} fit="cover" />
    </Box>
    {children}
  </Box>
);

export default NewsCard;
