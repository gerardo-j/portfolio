import React from "react";
import Home from "./Home/Home";
import NotesApp from "./Note Keeper/src/components/NotesApp";
import DiceApp from "./Dice Game/DiceApp";
import SimonApp from "./Simon Game/SimonApp";
import Theme from "./MuiTheme";
import { ThemeProvider } from "@material-ui/core";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  console.log("App has loaded");
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Notes" exact element={<NotesApp />} />
          <Route path="/Dice" exact element={<DiceApp />} />
          <Route path="/Simon" exact element={<SimonApp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
