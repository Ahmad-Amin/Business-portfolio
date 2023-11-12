import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Feature from "./Feature";
import { useRouter } from "next/router";

const FeaturesContainer = () => {
  const [data, setData] = useState([
    {
      src: "",
      heading: "",
      description: "",
    },
  ]);
  const router = useRouter();
  const route = router.route;

  useEffect(() => {
    fetch("/api/features")
      .then((res) => res.json())
      .then((images) => setData(images));
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "5rem 0",
        backgroundColor: "#FFFFFF",

        "@media (min-width: 600px)": {
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        },
      }}
    >
      {route.startsWith("/features")
        ? data.map((feature) => {
            return (
              <Feature
                src={feature.src}
                heading={feature.heading}
                description={feature.description}
                key={feature.src}
              />
            );
          })
        : data.slice(0, 3).map((feature) => {
            return (
              <Feature
                src={feature.src}
                heading={feature.heading}
                description={feature.description}
                key={feature.src}
              />
            );
          })}
    </Box>
  );
};

export default FeaturesContainer;
