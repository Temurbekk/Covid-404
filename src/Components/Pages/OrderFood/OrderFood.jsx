import React, { Fragment } from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import data from "../../../mocksData/FoodMockData";
import FoodCard from "../../Custom/FoodCards/FoodCard";
import FoodCardContent from "../../Custom/FoodCards/FoodCardContent";
import FoodCardDescription from "../../Custom/FoodCards/FoodCardDescription";

const OrderFood = () => {
  return (
    <Fragment>
      <ResponsiveContext.Consumer>
        {size => (
          <Grid
            align="start"
            columns={size !== "small" && { count: "fill", size: "medium" }}
            gap="small"
          >
            {Object.entries(data).map(([_, business]) => (
              <Box align="center" margin="large">
                <FoodCard key={business.key} business={business}>
                  <FoodCardContent
                    category={business.category}
                    hours={business.hours}
                    phone={business.phone}
                    name={business.name}
                  >
                    <FoodCardDescription description={business.description} />
                  </FoodCardContent>
                </FoodCard>
              </Box>
            ))}
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Fragment>
  );
};

export default OrderFood;
