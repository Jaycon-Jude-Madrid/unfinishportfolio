import { Button, Box, Menu, MenuItem, Typography, Fade } from "@mui/material";
import Resume from "../assets/Resume.pdf";
import React from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
  AiOutlineContainer,
  AiOutlineMenu,
} from "react-icons/ai";

const __Font = "14px";
const __fontColor = "black";

const MobileMenuButtonStyle = (theme) => ({
  fontSize: "20px",
  color: __fontColor,
  border: `1px solid ${__fontColor}`,
  "&:hover": {
    backgroundColor: __fontColor,
    color: "white",
  },

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
});

const menuItemStyle = (theme) => ({
  "&:hover": {
    background: "none",
  },
});
const resumeButtonStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: `14px`,

  border: `1px solid ${__fontColor}`,
  padding: "3px",
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
const MobileHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ maxWidth: "500px" }}>
      {" "}
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={MobileMenuButtonStyle}
      >
        <AiOutlineMenu />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} sx={menuItemStyle}>
          {" "}
          <Typography sx={navLinkStyle}>
            {" "}
            <AiOutlineHome />
            Home
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={menuItemStyle}>
          {" "}
          <Typography sx={navLinkStyle}>
            <AiOutlineUser />
            About
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={menuItemStyle}>
          {" "}
          <Typography sx={navLinkStyle}>
            <AiOutlineFundProjectionScreen />
            Project
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={menuItemStyle}>
          {" "}
          <Typography sx={navLinkStyle}>
            <AiOutlinePhone />
            Reach Me
          </Typography>
        </MenuItem>
        <MenuItem sx={menuItemStyle}>
          {" "}
          <Button sx={resumeButtonStyle} href={Resume} target="__blank">
            {" "}
            <AiOutlineContainer />
            Resume
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MobileHeader;
