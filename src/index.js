import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange, red } from "@mui/material/colors";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = createTheme({
  palette: {
    primary: {
      main: "#CCC"
    },
    secondary: {
      main: orange[500]
    },
    myCustomColor: {
      main: red[500],
      superDark: red[800],
      superLight: red[100]
    }
  },
  typography: {
    myVariant: {
      fontSize: "1rem",
      color: orange[500]
    }
  }
});

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
