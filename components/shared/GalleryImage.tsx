import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  src: string;
  heading: string;
  author: string;
  date?: string;
}

const IMG_HEIGHT_MOBILE = "375px";

const GalleryImage = ({ src, heading, author, date }: Props) => {
  const router = useRouter();
  const route = router.route;
  return (
    <Box
      sx={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: IMG_HEIGHT_MOBILE,
        width: "100vw",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",

        "@media (min-width: 600px)": {
          height: "50vh",
          width: "25vw",
        },
        "@media (min-width: 1200px)": {
          height: "50vh",
          width: "20vw",
        },
        "@media (min-width: 1500px)": {
          height: "50vh",
          width: "18vw",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            transform: `translate(0, ${IMG_HEIGHT_MOBILE})`,
            zIndex: 200,
            position: "relative",

            "@media (min-width: 600px)": {
              transform: `translate(0, 50vh)`,
              zIndex: 200,
              position: "relative",
            },
          }}
        >
          {route.startsWith("/stories") ? (
            <Typography sx={{ color: "white", fontSize: "0.8125rem" }}>
              {" "}
              {date}
            </Typography>
          ) : null}
          <Typography
            sx={{ color: "white", fontSize: "1.125rem", fontWeight: 700 }}
          >
            {heading}
          </Typography>
          <Typography sx={{ fontSize: "0.8125rem" }}>by {author}</Typography>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.25)" }} />
          <Typography
            variant="body2"
            sx={{
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            READ STORY{" "}
            <Image
              src="/assets/graphics/arrow.svg"
              height="12"
              width="42"
              alt="arrow"
            />
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            background:
              "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.25), rgba(0,0,0,1))",
            height: IMG_HEIGHT_MOBILE,
            width: "100vw",
            transform: "translate(-2rem, 2rem)",
            "@media (min-width: 600px)": {
              height: "50vh",
              width: "25vw",
            },
            "@media (min-width: 1200px)": {
              height: "50vh",
              width: "20vw",
            },
            "@media (min-width: 1500px)": {
              height: "50vh",
              width: "18vw",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default GalleryImage;
