import React, { Fragment } from "react";
import { Box, Paragraph } from "grommet";

const SupportFormHeading = ({ size, ...rest }) => {
  return (
    <Fragment>
      <Box direction="row" {...rest}>
        <h1>STAY HOME PLEASE</h1>
      </Box>
      <Paragraph margin={{ top: "none" }} textAlign="center" size="xxlarge">
        check here for any local <b>Covid-19</b> news.
      </Paragraph>
    </Fragment>
  );
};
export default SupportFormHeading;
