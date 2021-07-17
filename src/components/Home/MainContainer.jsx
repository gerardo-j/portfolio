import React, { useState } from "react";
import Resume from "./Resume";
import MainContainerFooter from "./MainContainerFooter";
import TabPanel from "./TabPanel";
import Projects from "./Projects";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import SwipeableViews from "react-swipeable-views";

const Swipe = () => {
  const handleChange = (event, value) => {
    setIndex(value);
  };

  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  const [index, setIndex] = useState(0);
  return (
    <div className="middle-container">
      <AppBar position="static" color="transparent">
        <Tabs
          value={index}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Projects" />
          <Tab label="Resume" />
        </Tabs>
      </AppBar>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {/* Panel 1 */}
        <TabPanel value={0} index={index}>
          <Projects />
        </TabPanel>
        {/* Panel 2 */}
        <TabPanel value={1} index={index}>
          <Resume />
        </TabPanel>
      </SwipeableViews>
      <MainContainerFooter />
    </div>
  );
};

export default Swipe;
