import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function ArrowTooltips() {
  return (
    <>
        <Tooltip title="Live" arrow>
            <WebAssetIcon/>       
        </Tooltip>
          
        <Tooltip title="Src </>">
            <GitHubIcon/>
        </Tooltip>
    </>
  );
}