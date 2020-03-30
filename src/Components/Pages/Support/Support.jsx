import React, { Fragment, useState } from "react";

import { Box, Heading, Text } from "grommet";

import config from "../../Custom/SupportForm/Config";
import SupportForm from "../../Custom/SupportForm/SupportForm";

const Support = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = form => {
    //You can send the data to server here
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 3000);
  };

  return (
    <Fragment>
      <Box align="center" margin="medium">
        <Heading size="medium">We are here to help</Heading>
        <SupportForm form={config} onSubmit={handleSubmit} status={status} />
      </Box>
    </Fragment>
  );
};

export default Support;
