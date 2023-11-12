import { Box, Container, Link, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <Container disableGutters>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "3.5rem 3.75rem",
          backgroundColor: "#000",
          minHeight: "33.6875rem",
          justifyContent: "space-between",

          "@media (min-width:600px)": {
            minHeight: "15.625rem",
            padding: "1.75rem 1.5rem",
            flexDirection: "row",
            justifyContent: "space-between",
          },
        }}
      >
        <Box
          sx={{
            "@media (min-width: 600px)": {
              display: "flex",
              justifyContent: "space-between",
              minHeight: "6.625rem",
            },
          }}
        >
          <Box
            sx={{
              "@media (min-width: 600px)": {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              },
            }}
          >
            <Box
              sx={{
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                minHeight: "1.75rem",

                "@media (min-width: 600px)": {
                  alignSelf: "center",
                  width: "auto",
                },
              }}
            >
              <Image
                src="/assets/graphics/logo-white.svg"
                alt="logo"
                width="170"
                height="16"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "10.5rem",
                marginTop: "2rem",
              }}
            >
              <Image
                src="/assets/graphics/facebook-white.svg"
                alt="logo"
                width="20"
                height="20"
              />
              <Image
                src="/assets/graphics/youtube-white.svg"
                alt="logo"
                width="20"
                height="20"
              />
              <Image
                src="/assets/graphics/twitter-white.svg"
                alt="logo"
                width="20"
                height="20"
              />
              <Image
                src="/assets/graphics/pinterest-white.svg"
                alt="logo"
                width="20"
                height="20"
              />
              <Image
                src="/assets/graphics/instagram-white.svg"
                alt="logo"
                width="20"
                height="20"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem",
              padding: "0 2rem",

              "@media (min-width:600px)": {
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                display: "flex",
                marginTop: 0,
                padding: 0,
                marginLeft: "6.875rem",
              },
            }}
          >
            <Link
              href="/"
              sx={{
                textDecoration: "none",
              }}
            >
              <Typography variant="body2" sx={{ color: "#FFF" }}>
                Home
              </Typography>
            </Link>
            <Link
              href="/stories"
              sx={{
                textDecoration: "none",
              }}
            >
              <Typography variant="body2" sx={{ color: "#FFF" }}>
                Stories
              </Typography>
            </Link>
            <Link
              href="/features"
              sx={{
                textDecoration: "none",
              }}
            >
              <Typography variant="body2" sx={{ color: "#FFF" }}>
                Features
              </Typography>
            </Link>
            <Link href="/pricing" sx={{ textDecoration: "none" }}>
              <Typography variant="body2" sx={{ color: "#FFF" }}>
                Pricing
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",

            "@media (min-width:600px)": {
              minHeight: "6.625rem",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#FFF",
            }}
          >
            Get An Invite{" "}
            <Image
              src="/assets/graphics/arrow.svg"
              height="12"
              width="42"
              alt="arrow"
            />
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "0.9375rem" }}>
            Copyright 2019. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
