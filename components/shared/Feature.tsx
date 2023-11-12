import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  heading: string;
  description: string;
}

const Feature = ({ src, heading, description }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem 2.5rem",
        justifyContent: "flex-end",
        alignItems: "center",
        textAlign: "center",
        "@media (min-width: 600px)": {
          width: "25vw",
        },
      }}
    >
      <Box
        sx={{
          height: src.includes("limit") ? "36px" : "72px",
          width: "80px",
          position: "relative",
          marginBottom: "3rem",
        }}
      >
        <Image src={src} fill alt="arrow" />
      </Box>
      <Typography
        sx={{
          color: "black",
          fontSize: "1.125rem",
          fontWeight: 700,
          marginBottom: "1rem",
        }}
      >
        {heading}
      </Typography>
      <Typography sx={{ color: "black" }}>{description}</Typography>
    </Box>
  );
};

export default Feature;
