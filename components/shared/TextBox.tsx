import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  heading: string;
  description: string;
  cta: string;
}

const TextBox = ({ heading, description, cta }: Props) => {
  const router = useRouter();
  const route = router.route;
  return (
    <Box
      sx={{
        padding: "4.5rem 1.875rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "flex-start",
        "@media (min-width: 600px)": { padding: "6rem 5rem", maxWidth: "50vw" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: heading.includes("Create and share") ? "black" : "white",
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: heading.includes("Create and share") ? "black" : "white" }}
      >
        {description}
      </Typography>
      <Button
        sx={{
          display:
            route.startsWith("/features") || route.startsWith("/pricing")
              ? "none"
              : "block",
          padding: 0,
          letterSpacing: 2,
          margin: "1.5rem 0",
          color: heading.includes("Create and share") ? "black" : "white",
          flexDirection: "row !important",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        {cta}
        <Image
          src={
            heading.includes("Create and share")
              ? "/assets/graphics/arrow-black.svg"
              : "/assets/graphics/arrow.svg"
          }
          height="12"
          width="42"
          alt="arrow"
          style={{ marginLeft: "1.125rem" }}
        />
      </Button>
    </Box>
  );
};

export default TextBox;
