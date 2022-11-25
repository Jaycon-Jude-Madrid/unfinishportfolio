import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, CssBaseline } from "@mui/material";
import ProgressBar from "./Components/ProgressBar";
import DividerBottom from "./Components/DividerBottom";
import { HeaderBanner, AboutMe, Header, Footer } from "./Pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto",
    },
  },
});
AOS.init();
const mainContainerStyle = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{ overflowX: "hidden" }}>
        <Box className="MainContainer" sx={mainContainerStyle}>
          <ProgressBar />
          <Header />
          <HeaderBanner />
          <DividerBottom />
          <AboutMe />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
