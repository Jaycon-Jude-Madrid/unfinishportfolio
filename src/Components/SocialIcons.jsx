import React from "react";
import { motion } from "framer-motion";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { Box, List, ListItem } from "@mui/material";

const ListStyle = (theme) => ({
  "&::after": {
    content: '" "',
    display: "block",
    height: "80px",
    width: "3px",
    backgroundColor: "black",
    margin: "0 auto",
  },
  "&::before": {
    content: '" "',
    display: "block",
    height: "25px",
    width: "3px",
    backgroundColor: "black",
    margin: "0 auto",
  },

  [theme.breakpoints.down("md")]: {
    display: "flex",
    margin: "0 auto",
    width: "300px",
    paddingBottom: "150px",
    "&::after": {
      display: "none",
    },
    "&::before": {
      display: "none",
    },
  },
});
const ListItemStyle = (theme) => ({
  cursor: "pointer",
  fontSize: "45px",
  "&:hover": {
    fontSize: "25px",
    transition: " all 0.25s cubic-bezier(0.645,0.045,0.355,1)",
    transform: "rotateZ(-30deg)",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
    zIndex: "5",
  },
});

const SocialIcons = () => {
  return (
    <>
      <Box>
        <List sx={ListStyle}>
          <ListItem sx={ListItemStyle}>
            <a
              href="https://github.com/Jaycon-Jude-Madrid"
              target="_blank"
              style={{ color: "black" }}
            >
              <AiFillGithub />
            </a>
          </ListItem>{" "}
          <ListItem sx={ListItemStyle}>
            {" "}
            <a
              href="https://www.linkedin.com/in/jaycon-madrid-a29801230/"
              target="_blank"
              style={{ color: "black" }}
            >
              <AiFillLinkedin />{" "}
            </a>
          </ListItem>{" "}
          <ListItem sx={ListItemStyle}>
            <a
              href="https://www.facebook.com/JayconWasMad/"
              target="_blank"
              style={{ color: "black" }}
            >
              <AiFillFacebook />{" "}
            </a>
          </ListItem>{" "}
          <ListItem sx={ListItemStyle}>
            <a
              href="https://www.instagram.com/jycnmdrd/"
              target="_blank"
              style={{ color: "black" }}
            >
              <AiFillInstagram />
            </a>
          </ListItem>{" "}
        </List>
      </Box>
    </>
  );
};

export default SocialIcons;
