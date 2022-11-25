import React from "react";
import { Box, Typography } from "@mui/material";

const HeroTextContainer = (theme) => ({
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
});
const MyNameStyle = (theme) => ({
  fontSize: "20px",
  paddingLeft: "20px",
  fontWeight: "600",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
});
const CreateThingsStyle = (theme) => ({
  fontSize: "50px",
  color: "#272729",
  fontWeight: "600",
  paddingLeft: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },
});
const MainContentStyle = (theme) => ({
  fontSize: "18px",
  paddingLeft: "10px",
  color: "#272729",
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
  },
});
const FullNameStyle = (theme) => ({
  fontSize: "80px",
  fontWeight: "600",
  [theme.breakpoints.down("md")]: {
    fontSize: "100px",
  },
});
const MainContentContainer = (theme) => ({
  width: "600px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
});

const HeroText = () => {
  return (
    <Box sx={HeroTextContainer}>
      <Box>
        <Typography sx={MyNameStyle}>Hello, my name is...</Typography>
      </Box>
      <Box>
        <Typography sx={FullNameStyle}>Jaycon Madrid.</Typography>
      </Box>
      <Box sx={{ paddingBottom: "20px" }}>
        <Typography sx={CreateThingsStyle}>
          I create things to help and have fun.{" "}
        </Typography>
      </Box>
      <Box sx={MainContentContainer}>
        <Typography sx={MainContentStyle}>
          I am an ambitious software developer, a student who hopes to become an
          engineer soon. I'm presently concentrating on front-end development,
          primarily ReactJS.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroText;
