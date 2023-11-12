import { styled } from "@mui/system";
import React from "react";

interface Props {
  src: string;
}

const StyledImage = styled("img")(() => ({
  height: "294px",
  width: "100vw",

  "@media (min-width: 600px)": {
    height: "auto",
    maxWidth: "50vw",
    aspectRatio: "83 / 60",
  },
}));

const Image = ({ src }: Props) => {
  return <StyledImage src={src} />;
};

export default Image;
