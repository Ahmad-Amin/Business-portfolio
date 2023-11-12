import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const StoriesHero = () => {
  return (
    <Box
      sx={{
        "@media (min-width: 600px)": {
          backgroundImage: `url(/assets/images/moon-of-appalacia.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(/assets/images/moon-of-appalacia.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "375px",
          "@media (min-width: 600px)": {
            display: "none",
          },
        }}
      />
      <Box
        sx={{
          padding: "4.5rem 1.875rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "#000000",

          "@media (min-width: 600px)": {
            padding: "6rem 5rem",
            maxWidth: "50vw",
            backgroundColor: "transparent",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "white", marginBottom: "1rem" }}
        >
          LAST MONTH’S FEATURED STORY
        </Typography>
        <Typography variant="h2">HAZY FULL MOON OF APPALACHIA</Typography>
        <Typography sx={{ marginBottom: "1.5rem" }}>
          March 2nd 2020 by John Appleseed
        </Typography>
        <Typography variant="body1">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called &quot;mountains,&quot; especially in
          eastern Kentucky and West Virginia, and while the ridges are not high,
          the terrain is extremely rugged.
        </Typography>

        <Button
          sx={{
            color: "white",
            padding: 0,
            letterSpacing: 2,
            margin: "1.5rem 0",
            flexDirection: "row !important",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          READ THE STORY
          <Image
            src="/assets/graphics/arrow.svg"
            height="12"
            width="42"
            alt="arrow"
            style={{ marginLeft: "1.125rem" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default StoriesHero;
