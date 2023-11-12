import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      textTransform: "uppercase",
      fontSize: "1rem",
      fontWeight: 800,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 4,
      color: "white",
      marginBottom: "1rem",
    },
    body1: {
      color: "rgba(255,255,255,0.6)",
      lineHeight: 1.6,
    },
    body2: {
      textTransform: "uppercase",
      fontSize: "0.9375rem",
      fontWeight: 700,
      textDecoration: "none",
      marginBottom: "1.25rem",
      color: "black",
      letterSpacing: 2,

      "@media (min-width: 600px)": {
        fontSize: "0.75rem",
        marginBottom: 0,
      },
    },
  },
};

export default lightThemeOptions;
