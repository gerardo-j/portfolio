import React from "react";
import ResumeIMG from "./Resume.jpg";
import ResumePDF from "./Resume.pdf";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import GetAppIcon from "@material-ui/icons/GetApp";

const Resume = () => {
  return (
    <Typography>
      <a href={ResumePDF} download="Resume">
        <Tooltip title="Download" arrow>
          <GetAppIcon fontSize="large" className="icons" />
        </Tooltip>
      </a>
      <img className="resume-img" src={ResumeIMG} alt="Resume" />
    </Typography>
  );
};

export default Resume;
