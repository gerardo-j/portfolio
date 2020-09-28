import React from "react";
import MainContainer from "./MiddleContainer";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
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
    }
  }
});

function App() {
    
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={false} className="main-container">
                <Grid  item xs={12}>
                    <div className="header-text-container">
                        <span className="header-text">I'm Gerardo, A programmer</span>
                    </div>
                </Grid>
            <MainContainer/>
            </Container>

        </ThemeProvider>
    )
}

export default App;