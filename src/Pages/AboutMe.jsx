import { Box, Typography } from "@mui/material";
import React from "react";
import AboutMeImage from "../Components/AboutMeImage";
import TechStack from "../Components/TechStack";
const AboutMeContainer = (theme) => ({
  maxWidth: "1000px",
  height: "100vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "auto",
  gap: "50px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
    height: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
});
const AboutMyselft = (theme) => ({
  fontSize: "30px",
  fontWeight: "600",
  "&::after": {
    content: "' '",
    display: "block",
    position: "relative",
    top: " -24px",
    left: "100px",

    height: "3px",
    marginLeft: "100px",
    backgroundColor: "black",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
    paddingLeft: "20px",
    "&::after": {
      display: "none",
    },
  },
});

const AboutMeContent = (theme) => ({
  width: "500px",
  fontSize: "18px",
  color: "#272729",
  lineHeight: 1.8,
  paddingTop: "20px",
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
    width: "100%",

    padding: "20px",
  },
});
const AboutMe = () => {
  return (
    <Box
      sx={AboutMeContainer}
      id="AboutMe"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Box className="techStack">
        <Typography sx={AboutMyselft}>About Myself</Typography>
        <Typography sx={AboutMeContent}>
          Hello and good day! My name is Jaycon. I am a third-year college
          student at STI Cagayan De Oro City. My determination to become an
          aspiring engineer began when I became curious about how technology
          works. One of my greatest ambitions is to become a software engineer;
          I am doing everything I can to attain that title; it will never be
          easy, but I will embrace it as a challenge to myself.
        </Typography>

        <TechStack />
      </Box>
      <Box className="AboutMeImage">
        <AboutMeImage />
      </Box>
    </Box>
  );
};

export default AboutMe;
