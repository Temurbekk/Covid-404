import React from "react";
import { Box, Heading, Text } from "grommet";

const NewsCardContent = ({ headline, hours, children }) => {
  return (
    <Box pad={{ horizontal: "small" }}>
      <Box
        margin={{ top: "small" }}
        direction="row"
        align="center"
        justify="between"
      >
        <Box>
          <Heading level="3" margin="none">
            {headline}
          </Heading>
          <Text color="dark-1" size="xlarge">
            &#8226; {hours}
          </Text>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default NewsCardContent;
