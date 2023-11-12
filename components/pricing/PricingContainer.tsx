import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { Box, Typography } from "@mui/material";
import Card from "./PricingCard";
import Compare from "./PricingTable";
const label = { inputProps: { "aria-label": "Switch demo" } };

const PricingContainer = () => {
  const [monthlySelected, setMonthlySelected] = useState(true);

  const [data, setData] = useState([
    {
      plan: "",
      description: "",
      monthlyPrice: "",
      yearlyPrice: "",
    },
  ]);

  useEffect(() => {
    fetch("/api/pricing")
      .then((res) => res.json())
      .then((plans) => setData(plans));
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "2.5rem auto",
        }}
      >
        <Typography
          sx={{ color: monthlySelected ? "black" : "grey", fontWeight: 700 }}
        >
          Monthly
        </Typography>
        <Switch
          onChange={() => setMonthlySelected(!monthlySelected)}
          {...label}
          sx={{
            ".MuiSwitch-thumb": {
              backgroundColor: "black",
            },
          }}
        />
        <Typography
          sx={{ color: !monthlySelected ? "black" : "grey", fontWeight: 700 }}
        >
          Yearly
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "@media (min-width: 600px)": {
            flexDirection: "row",
            justifyContent: "space-evenly",
          },
        }}
      >
        {data.map((plan) => {
          return (
            <Card
              key={plan.plan}
              plan={plan}
              monthlySelected={monthlySelected}
            />
          );
        })}
      </Box>
      <Box>
        <Compare />
      </Box>
    </Box>
  );
};

export default PricingContainer;
