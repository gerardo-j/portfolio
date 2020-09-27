import React from "react";
import MainContainer from "./MainContainer";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";

function Header() {
    return (
        <div>
            <Container maxWidth={false} className="dark-container">
                <Grid container>
                    <Grid  item xs={12}>
                        <div className="header-text-container">
                            <span className="header-text">I'm Gerardo, A programmer</span>
                        </div>
                    </Grid>
                </Grid>
            <MainContainer/>
            </Container>
        </div>

    )
}

export default Header;