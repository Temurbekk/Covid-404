import React from "react";
import { Box, Heading, Text } from "grommet";

const CardContent = ({ name, category, hours, phone, children }) => {
  return (
    <Box pad={{ horizontal: "small" }}>
      <Box
        margin={{ top: "small" }}
        direction="row"
        align="start"
        justify="between"
      >
        <Box align="start">
          <Heading level="3" margin="none">
            {name}
          </Heading>
          <Text color="dark-1" size="xlarge">
            &#8226; {category}
          </Text>
          <Text color="dark-1" size="xlarge">
            &#8226; {hours}
          </Text>
          <Text color="dark-1" size="medium">
            &#8226; {phone}
          </Text>
        </Box>
        <Box
          round="xsmall"
          pad={{ vertical: "xxsmall", horizontal: "medium" }}
          background={"dark-2"}
        >
          <Text size="xsmall">NEW</Text>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default CardContent;
