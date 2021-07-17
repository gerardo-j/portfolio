import React from "react";
import Box from "@material-ui/core/Box";

const TabPanel = ({ index, value, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={index !== value}
      id={`full-width-tabpanel-${value}`}
      aria-labelledby={`full-width-tab-${value}`}
    >
      {index === value && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
