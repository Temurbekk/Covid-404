import React, { Fragment } from "react";
import { Box, Image, Heading } from "grommet";

import data from "../../../mocksData/CovidMockData";

import InfoCard from "../../Custom/InfoData/InfoCard";
import InfoCardDescription from "../../Custom/InfoData/InfoCardDescription";

const Home = () => {
  return (
    <Fragment>
      <Box align="center" width="xxlarge" margin="xxsmall">
        <Heading className="shake-slow shake-constant" style={{ color: "red" }}>
          PLEASE
        </Heading>
        <Heading className="shake-slow shake-constant">Stay</Heading>
        <Heading className="shake-opacity shake-constant">HOME!!</Heading>
      </Box>
      <Box width="xxlarge" align="center">
        <Image src="https://wordpress.accuweather.com/wp-content/uploads/2020/03/CoronavirusAnimation2.gif" />
        {Object.entries(data).map(([_, business]) => (
          <Box align="center" margin="large">
            <InfoCard key={business.key} title={business.title}>
              <InfoCardDescription description={business.description} />
            </InfoCard>
          </Box>
        ))}
      </Box>
    </Fragment>
  );
};

export default Home;
