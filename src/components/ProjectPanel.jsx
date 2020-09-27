import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToolTip from './ToolTip';


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
    
}))

export default function ProjectPanel(props) {
    const classes = useStyles();
    return (
        <div>
            <a href="/" className={classes.a}>
                <img 
                className={classes.a}
                src={props.img}
                alt={"Project Preview"}/>
                <span>{props.name} <ToolTip/></span>
            </a>
        </div>
    )
}