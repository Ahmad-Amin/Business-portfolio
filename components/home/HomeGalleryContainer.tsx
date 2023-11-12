import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import GalleryImage from "../shared/GalleryImage";

const HomeGalleryContainer = () => {
  const [data, setData] = useState([
    {
      src: "",
      heading: "",
      author: "",
      date: "",
    },
  ]);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((images) => setData(images));
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "@media (min-width: 600px)": {
          flexDirection: "row",
        },
      }}
    >
      {data.slice(0, 4).map((image) => {
        return (
          <GalleryImage
            src={image.src}
            heading={image.heading}
            author={image.author}
            date={image.date}
            key={image.src}
          />
        );
      })}
    </Box>
  );
};

export default HomeGalleryContainer;
