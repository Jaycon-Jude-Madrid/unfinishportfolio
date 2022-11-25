import React from "react";
import { Box } from "@mui/material";

const DividerContainer = (theme) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
});
const CustomStyle = (theme) => ({
  [theme.breakpoints.down("md")]: {},
});
const DividerBottom = () => {
  return (
    <Box sx={DividerContainer}>
      {" "}
      <Box className="custom-shape-divider-bottom-1668952110" sx={CustomStyle}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </Box>
    </Box>
  );
};

export default DividerBottom;
