import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Tooltip from "@material-ui/core/Tooltip";

export default function Footer() {
  return (
    <div className="footer">
      <Tooltip title="LinkedIn" arrow>
        <a href="https://www.linkedin.com/in/gerardo-juarez-cs/">
          <LinkedInIcon fontSize="large" className="icons" />
        </a>
      </Tooltip>
      <Tooltip title="GitHub" arrow>
        <a href="https://github.com/gerardo-j">
          <GitHubIcon fontSize="large" className="icons" />
        </a>
      </Tooltip>
    </div>
  );
}
