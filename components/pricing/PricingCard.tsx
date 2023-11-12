import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

interface Props {
  plan: {
    plan: string;
    description: string;
    monthlyPrice: string;
    yearlyPrice: string;
  };
  monthlySelected: boolean;
}

const PricingCard = ({ plan, monthlySelected }: Props) => {
  const { description, monthlyPrice, yearlyPrice } = plan;

  const proPlan = plan.plan.includes("Pro");
  return (
    <Card
      sx={{
        width: "90vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2.5rem 2.25rem",
        backgroundColor: proPlan ? "#000000" : "#F5F5F5",
        boxShadow: "none",
        borderRadius: 0,
        marginBottom: "1.5rem",

        "@media (min-width: 600px)": {
          padding: "6rem 5rem",
          maxWidth: "20rem",
        },
      }}
    >
      <CardContent>
        <Box>
          <Typography
            sx={{
              color: proPlan ? "white" : "black",
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1.125rem",
            }}
            variant="body1"
          >
            {plan.plan}
          </Typography>
          <Typography
            sx={{
              color: proPlan ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
              fontSize: "0.9375rem",
            }}
          >
            {description}
          </Typography>
        </Box>
        {monthlySelected ? (
          <Box sx={{ margin: "2.5rem auto" }}>
            <Typography
              sx={{
                color: proPlan ? "white" : "black",
                fontSize: "2.5rem",
                fontWeight: 700,
              }}
            >
              {monthlyPrice}{" "}
            </Typography>
            <Typography
              sx={{
                color: proPlan ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
                fontSize: "0.9375rem",
              }}
            >
              per month
            </Typography>
          </Box>
        ) : (
          <Box sx={{ margin: "2.5rem auto" }}>
            <Typography
              sx={{
                color: proPlan ? "white" : "black",
                fontSize: "2.5rem",
                fontWeight: 700,
              }}
            >
              {yearlyPrice}
            </Typography>
            <Typography
              sx={{
                color: proPlan ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
                fontSize: "0.9375rem",
              }}
            >
              per year
            </Typography>
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: proPlan ? "white" : "black",
            borderRadius: 0,
            color: proPlan ? "black" : "white",
            width: "75vw",
            "@media (min-width: 600px)": {
              maxWidth: "10rem",
            },
          }}
          size="large"
        >
          Pick Plan
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
