import React from "react";

import { Box } from "@mui/material";

import SocialIcons from "../Components/SocialIcons";
import HeroText from "../Components/HeroText";
const HeaderBannerContainer = (theme) => ({
  margin: "0 auto",
  maxWidth: "1000px",
  minHeight: "100vh",
  marginTop: "250px",
  [theme.breakpoints.down("md")]: {
    marginTop: "160px",
  },
});
const Container = (theme) => ({
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
});

const SocialContainer = (theme) => ({
  [theme.breakpoints.down("md")]: {
    paddingTop: "5px",
  },
});
const HeaderBanner = () => {
  return (
    <Box
      sx={HeaderBannerContainer}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <Box sx={Container}>
        <Box className="Socials" sx={SocialContainer}>
          <SocialIcons />
        </Box>
        <Box className="Text">
          <HeroText />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderBanner;
