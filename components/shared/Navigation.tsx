import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const Navigation = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <Container disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.75rem 1.5rem",
          backgroundColor: "#FFFFFF",

          "@media (min-width:600px)": {
            flexDirection: "row",
            justifyContent: "space-between",
          },
        }}
      >
        <Box
          sx={{
            alignSelf: "flex-start",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            minHeight: "1.75rem",

            "@media (min-width: 600px)": {
              alignSelf: "center",
              width: "auto",
            },
          }}
        >
          <Link href="/">
            <Image
              src="/assets/graphics/logo.svg"
              alt="logo"
              width="170"
              height="16"
            />
          </Link>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setDisplayMenu(!displayMenu);
            }}
            sx={{
              "@media (min-width: 600px)": {
                display: "none",
              },
            }}
          >
            <Image
              src={
                displayMenu
                  ? "/assets/graphics/close.svg"
                  : "/assets/graphics/menu.svg"
              }
              alt="menu"
              width={displayMenu ? 15 : 20}
              height={displayMenu ? 16 : 6}
            />
          </Button>
        </Box>
        <Box
          sx={{
            display: displayMenu ? "flex" : "none",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
            padding: "0 2rem",

            "@media (min-width:600px)": {
              flexDirection: "row",
              display: "flex",
              marginTop: 0,
              padding: 0,
            },
          }}
        >
          <Link
            href="/stories"
            sx={{
              textDecoration: "none",
              "@media (min-width:600px)": { marginRight: "2.25rem" },
            }}
          >
            <Typography variant="body2">Stories</Typography>
          </Link>
          <Link
            href="/features"
            sx={{
              textDecoration: "none",
              "@media (min-width:600px)": { marginRight: "2.25rem" },
            }}
          >
            <Typography variant="body2">Features</Typography>
          </Link>
          <Link href="/pricing" sx={{ textDecoration: "none" }}>
            <Typography variant="body2">Pricing</Typography>
          </Link>
        </Box>
        <Box
          sx={{
            width: "100vw",
            padding: "0 2rem",
            display: displayMenu ? "block" : "none",
            "@media (min-width:600px)": {
              display: "block",
              width: "auto",
              padding: 0,
            },
          }}
        >
          <Divider
            sx={{
              width: "100%",
              marginBottom: "1.25rem",
              "@media (min-width: 600px)": {
                display: "none",
              },
            }}
          />
          <Button
            sx={{
              width: "100%",
              backgroundColor: "black",
              color: "#fafafa",
              borderRadius: 0,

              "@media (min-width: 600px)": {
                width: "9.875rem",
              },
            }}
          >
            Get An Invite
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Navigation;
