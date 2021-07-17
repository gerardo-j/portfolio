import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  palette: {
    primary: {
      main: "#000000",
      dark: "#E4F9F5",
      light: "#E4F9F5",
    },
  },
});

export default Theme;
