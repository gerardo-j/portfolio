import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

export default function ProjectLink(props) {
  return (
    <>
      <Link to={props.live}>
        <Tooltip title="Live"  arrow>
          <WebAssetIcon/>       
        </Tooltip>
      </Link>
      <a href={props.src}>
        <Tooltip title="Src </>">
          <GitHubIcon/>
        </Tooltip>
      </a>
    </>
  );
}