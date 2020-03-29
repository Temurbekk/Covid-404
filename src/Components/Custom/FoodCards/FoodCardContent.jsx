import React from "react";
import { Box, Heading, Text } from "grommet";

const CardContent = ({ name, category, hours, phone, children }) => {
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
            {name}
          </Heading>
          <Text color="dark-5" size="small">
            &#8226; {category}
          </Text>
          <Text color="dark-5" size="small">
            &#8226; {phone}
          </Text>
          <Text color="dark-5" size="small">
            &#8226; {hours}
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
