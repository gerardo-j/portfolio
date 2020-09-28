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
                <span className="header-text">I'm Gerardo, A programmer</span>
            </div>
        </Grid>
        <MainContainer/>
        </Container>
    )
}