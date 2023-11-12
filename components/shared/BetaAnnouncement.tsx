import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const BetaAnnouncement = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(/assets/images/bg-beta.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          padding: "4.5rem 1.875rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",

          "@media (min-width: 600px)": {
            padding: "6rem 5rem",
            flexDirection: "row",
            justifyContent: "space-between",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{ "@media (min-width: 600px)": { maxWidth: "30vw" } }}
        >
          We’re in beta. Get your invite today!
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
          Get An Invite
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

export default BetaAnnouncement;
