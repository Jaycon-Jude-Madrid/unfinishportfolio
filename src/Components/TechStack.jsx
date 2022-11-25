import {
  Box,
  List,
  ListItem,
  Typography,
  Tooltip,
  styled,
} from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";
import React from "react";
import {
  SiReact,
  SiFirebase,
  SiMaterialui,
  SiTypescript,
} from "react-icons/si";

const ListStyle = (theme) => ({
  display: "flex",
  justifyContent: "space-evenly",
  paddingTop: "20px",
  [theme.breakpoints.down("md")]: {
    width: " 390px",
    margin: "0 auto",
  },
});
const ListItemStyle = (theme) => ({
  fontSize: "45px",
  width: "100px",
  cursor: "pointer",
  transition: "transform .7s ease-in-out",
  "&:hover": {
    animationName: "rotate",
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },
  " @keyframes rotate": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
});
const HeadingText = (theme) => ({
  fontSize: "30px",
  fontWeight: "600",

  [theme.breakpoints.down("md")]: {
    "&::after": {
      display: "none",
    },
    paddingLeft: "20px",
  },
});

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const TechStackContainerStyle = (theme) => ({
  width: "500px",
  paddingTop: "20px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "20px",
  },
});
const TechStack = () => {
  return (
    <Box>
      <Typography sx={HeadingText}>Technology Stack</Typography>
      <List sx={ListStyle}>
        <BootstrapTooltip title="ReactJS">
          <ListItem sx={ListItemStyle}>
            <SiReact />
          </ListItem>
        </BootstrapTooltip>
        <BootstrapTooltip title="TypeScript">
          <ListItem sx={ListItemStyle}>
            <SiTypescript />
          </ListItem>
        </BootstrapTooltip>{" "}
        <BootstrapTooltip title="Material UI">
          <ListItem sx={ListItemStyle}>
            <SiMaterialui />
          </ListItem>
        </BootstrapTooltip>
        <BootstrapTooltip title="Firebase">
          <ListItem sx={ListItemStyle}>
            <SiFirebase />
          </ListItem>
        </BootstrapTooltip>
      </List>
      <Box sx={TechStackContainerStyle}>
        <Typography sx={{ fontSize: "15px" }}>
          So this is the technology I'm presently learning, mainly focusing on
          the front-end side because it intrigues me alot.
        </Typography>
      </Box>
    </Box>
  );
};

export default TechStack;
