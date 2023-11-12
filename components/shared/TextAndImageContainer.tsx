import { Box } from "@mui/material";
import React from "react";
import DisplayImage from "./StyledImage";
import TextBox from "./TextBox";

interface Props {
  data: { src: string; heading: string; description: string; cta: string };
}

const TextAndImageContainer = ({ data }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: data.heading.includes("Create and share")
          ? "white"
          : "black",
        "@media (min-width: 600px)": {
          flexDirection: data.heading.includes("BEAUTIFUL")
            ? "row"
            : "row-reverse",
        },
      }}
    >
      <DisplayImage src={data.src} />
      <TextBox
        heading={data.heading}
        description={data.description}
        cta={data.cta}
      />
    </Box>
  );
};

export default TextAndImageContainer;
