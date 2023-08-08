import React from "react";
import {Link} from "react-router-dom";
import ProjectLink from "./ProjectLink";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  a: {
    textDecoration: "none",
    width: "100%",
    color: "black",
    fontSize: "2rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: "100%",
    color: theme.palette.text.secondary,
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));

const ProjectPanel = ({ live, img, name, src }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Link to={live} className={classes.a}>
        <img className={classes.a} src={img} alt={"Project Preview"} />
        <h3 className="project-heading">{name}</h3>
      </Link>
      <ProjectLink live={live} src={src} />
    </Paper>
  );
};

export default ProjectPanel;
