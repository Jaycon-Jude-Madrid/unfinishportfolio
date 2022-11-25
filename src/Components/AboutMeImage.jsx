import {
  Box,
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Paper,
} from "@mui/material";
import Image from "../assets/AboutMeImage.jpg";
import React from "react";

const ImageListItemStyle = (theme) => ({
  width: "400px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "340px",
  },
});

const AboutMeImage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <ImageListItem sx={ImageListItemStyle}>
        <img src={Image} />
        <ImageListItemBar
          title={`Jaycon Jude Madrid`}
          subtitle={`ReactJS Developer`}
        />
      </ImageListItem>
    </Box>
  );
};

export default AboutMeImage;
