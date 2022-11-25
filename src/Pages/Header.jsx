import { Box, Typography, Menu, Fade, MenuItem } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import DesktopHeader from "../Components/DesktopHeader";
import MobileHeader from "../Components/MobileHeader";

const LogoStyle = (theme) => ({
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
});

const HeaderContainerStyle = (theme) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "1000px",
  margin: "0 auto",
  height: "100px",
  alignItems: "center",
  padding: "0px 40px",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
});

const HeaderStyle = {
  zIndex: 1,
  position: "fixed",
  top: "0",
  width: "100%",
  backgroundColor: "white ",
};

function Header() {
  return (
    <Box sx={HeaderStyle} data-aos="fade-down-right" data-aos-duration="1500">
      <Box sx={HeaderContainerStyle}>
        <motion.Box
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {" "}
          <Typography sx={LogoStyle}>{"<Dev />"}</Typography>
        </motion.Box>

        <Box>
          <DesktopHeader />
          <MobileHeader />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
