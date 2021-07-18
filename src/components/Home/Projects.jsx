import React from "react";
import Panel from "./Panel";
import Grid from "@material-ui/core/Grid";
import Project1Preview from "../../imgs/Project-1-Preview.png";
import Project2Preview from "../../imgs/Project-2-Preview.png";
import Project3Preview from "../../imgs/Project-3-Preview.png";

const Projects = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Panel
          name="Note Keeper"
          img={Project2Preview}
          live="/Notes"
          src="https://github.com/gerardo-j/keeper-react-app"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Panel
          name="Rolling Dice"
          img={Project1Preview}
          live="/Dice"
          src="https://github.com/gerardo-j/dice-react-app"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Panel
          name="Simon"
          img={Project3Preview}
          live="/Simon"
          src="https://github.com/gerardo-j/simon-react-app"
        />
      </Grid>
    </Grid>
  );
};

export default Projects;
