import React, { Fragment } from "react";
import { Box, Grid } from "grommet";
import data from "../../../mocksData/NewsMockData";
import NewsCard from "../../Custom/NewsCards/NewsCard";
import NewsCardContent from "../../Custom/NewsCards/NewsCardContext";
import NewsCardDescription from "../../Custom/NewsCards/NewsCardDescription";

const News = () => {
  return (
    <Fragment>
      <div>
        {
          <Grid align="center" columns={{ count: "fit" }} gap="large">
            {Object.entries(data).map(([_, business]) => (
              <Box align="center" margin="large">
                <NewsCard key={business.key} business={business}>
                  <NewsCardContent hours={business.hours} name={business.name}>
                    <NewsCardDescription description={business.description} />
                  </NewsCardContent>
                </NewsCard>
              </Box>
            ))}
          </Grid>
        }
      </div>
    </Fragment>
  );
};
export default News;
