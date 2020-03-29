import React, { useState, useEffect } from "react";
import { Text, WorldMap, ResponsiveContext } from "grommet";
import Section from "../../shared/Section";
import { useQuery } from "react-query";
import { fetchAll } from "../shared/API";

const DataHeading = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const { data = "" } = useQuery("fetch-all-cases", fetchAll);

  useEffect(() => {
    let timer = setTimeout(() => setFadeIn(true), 3500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const size = React.useContext(ResponsiveContext);

  return (
    <Section>
      <div>
        <h1 className="title is-1">
          {fadeIn && data ? data.cases : "Too Many"} <span>Cases</span>
        </h1>
        <h1 className="title is-1" style={{ color: "orange" }}>
          {fadeIn && data ? data.recovered : "Not Enough"}
          <span> Recovered</span>
        </h1>
        <h1 className="title is-2" style={{ color: "grey" }}>
          {fadeIn && data ? data.deaths : "Too Many"} <span>Deaths</span>
        </h1>
      </div>
      <div>
        {size === "small" || <WorldMap color={fadeIn && data ? "red" : ""} />}
      </div>
    </Section>
  );
};

export default DataHeading;
