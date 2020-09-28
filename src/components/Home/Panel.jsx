import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectLink from './ProjectLink';


const useStyles = makeStyles(theme => ({
    root: {
        color: "black",
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: "10%",
        width: "100%"
    },
    a: {
        textDecoration: "none",
        width: "100%",
        color: "black",
        fontSize: "2rem"
    },
    list: {
        fontSize: "1.2rem",
        fontWeight: "700",
        textDecoration: "none",
        listStyle: "none"
    }
    
}))

export default function ProjectPanel(props) {
    const classes = useStyles();
    console.log(props)
    return (
        <div>
            <a href="/" className={classes.a}>
                <img 
                className={classes.a}
                src={props.img}
                alt={"Project Preview"}/>
                <span className="project-heading">{props.name}</span>
                <ProjectLink live={props.live} src={props.src}/>
            </a>
            <ul className={classes.list}>
                {props.languages !== undefined ? props.languages.map((language, index) => {
                    return <li key={index}>{language}</li>
                }) : null}
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </div>
    )
}