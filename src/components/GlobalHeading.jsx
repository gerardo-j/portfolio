import React from 'react';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function GlobalHeading() {
    return (
        <div className="project-global-heading">
            <Link className="project-global-heading" to='/'>
                <Button color="inherit">Home</Button>
            </Link>
            <Link className="project-global-heading" to='/Notes'>
                <Button color="inherit">Keeper Notes</Button>
            </Link>
            <Link className="project-global-heading" to='/Dice'>
                <Button color="inherit">Dice Game</Button>
            </Link>
            <Link className="project-global-heading" to='/Simon'>
            <Button color="inherit">Simon Game</Button>
            </Link>
        </div>
    )
}