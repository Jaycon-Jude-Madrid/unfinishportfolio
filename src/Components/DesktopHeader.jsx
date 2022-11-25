import { Box, Typography, Button, Link } from "@mui/material";

import Resume from "../assets/Resume.pdf";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
  AiOutlineContainer,
} from "react-icons/ai";
import React from "react";

const __Font = "14px";
const __fontColor = "black";

const navLinkStyle = (theme) => ({
  fontSize: `${__Font}`,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  marginRight: "30px",
  color: __fontColor,
  fontWeight: "700",
  "&:hover": {
    textDecoration: "underline 3px black",
  },
});
const LinkStyle = (theme) => ({
  textDecoration: "none",
  color: "black",
});
const resumeButtonStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: `14px`,

  border: `1px solid ${__fontColor}`,
  padding: "8px",
  textTransform: "capitalize",
  borderRadius: "4px",
  gap: "5px",
  color: __fontColor,
  fontWeight: "700",
  "&:hover": {
    backgroundColor: __fontColor,
    color: "white",
  },
};
const navContainerStyle = (theme) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});

const DesktopHeader = () => {
  return (
    <Box>
      {" "}
      <Box sx={navContainerStyle}>
        <Typography sx={navLinkStyle}>
          {" "}
          <AiOutlineHome />
          Home
        </Typography>
        <Link href="#AboutMe" sx={LinkStyle}>
          <Typography sx={navLinkStyle}>
            <AiOutlineUser />
            About
          </Typography>
        </Link>
        <Typography sx={navLinkStyle}>
          <AiOutlineFundProjectionScreen />
          Project
        </Typography>

        <Typography sx={navLinkStyle}>
          <AiOutlinePhone />
          Reach Me
        </Typography>
        <Button
          sx={resumeButtonStyle}
          href={Resume}
          target="__blank"
          type="application/pdf"
        >
          {" "}
          <AiOutlineContainer />
          Resume
        </Button>
      </Box>
    </Box>
  );
};

export default DesktopHeader;
