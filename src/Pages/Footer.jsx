import { Typography, Box } from "@mui/material";
import { useTransform, useViewportScroll, motion } from "framer-motion";
import React from "react";

const FooterContainer = (theme) => ({
  width: "1000px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
});
const Footer = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale,
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress,
          }}
        >
          <Box sx={FooterContainer}>
            <Typography
              sx={{
                fontSize: "30px",
                color: "white",
                fontWeight: "700",
                padding: "20px",
              }}
            >
              Get In Touch
            </Typography>
          </Box>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
