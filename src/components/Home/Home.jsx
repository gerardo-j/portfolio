import React from 'react';
import MainContainer from "./MiddleContainer";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import '../HomeStyles.css';

export default function Home() {
    return (
        <Container maxWidth={false} className="main-container">
        <Grid  item xs={12}>   
            <div className="header-text-container">
                <span className="header-text">MY NAME IS GERARDO JUAREZ</span>
                <span className="header-bio">I'm a passionate programmer, I enjoy learning new technologies to help make my life easier.</span>
            </div>
        </Grid>
        <MainContainer/>
        </Container>
    )
}