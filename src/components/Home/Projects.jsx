import React from "react";
import Panel from "./Panel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Project1Preview from "../../imgs/Project-1-Preview.png";
import Project2Preview from "../../imgs/Project-2-Preview.png";
import Project3Preview from "../../imgs/Project-3-Preview.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: "100%",
    color: theme.palette.text.secondary,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Paper className={classes.paper}>
          <Panel
            name="Note Keeper"
            img={Project2Preview}
            live="/Notes"
            src="https://github.com/gerardo-j/keeper-react-app"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Paper className={classes.paper}>
          <Panel
            name="Dice Game"
            img={Project1Preview}
            live="/Dice"
            src="https://github.com/gerardo-j/dice-react-app"
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Paper className={classes.paper}>
          <Panel
            name="Simon"
            img={Project3Preview}
            live="/Simon"
            src="https://github.com/gerardo-j/simon-react-app"
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Projects;
