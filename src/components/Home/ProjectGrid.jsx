import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Panel from './Panel';
import Project1Preview from '../../imgs/Project-1-Preview.png';
import Project2Preview from '../../imgs/Project-2-Preview.png';
import Project3Preview from '../../imgs/Project-3-Preview.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2%",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    fontWeight: "700"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: "100%",
    color: theme.palette.text.secondary,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Paper className={classes.paper}>
            <Panel 
                  name="Note Keeper"
                  img={Project2Preview}
                  languages={["Mongoose"]}
                  live="/Notes"
                  />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Paper className={classes.paper}>
            <Panel 
                name="Dice Game"
                img={Project1Preview}
                live="/Dice"
                />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Paper className={classes.paper}>
            <Panel 
              name="Simon"
              img={Project3Preview}
              live="/Simon"
              />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}