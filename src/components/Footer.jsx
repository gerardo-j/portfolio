import React from "react"
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from '@material-ui/core/Tooltip';


export default function Footer() {

    return(
        <div className="footer">
            <Tooltip title="Email" arrow>
                <EmailIcon className="icons"/>
            </Tooltip>
            <Tooltip title="GitHub" arrow>
                <GitHubIcon className="icons"/>
            </Tooltip>
        </div>
    )
}