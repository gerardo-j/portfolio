import React from "react";
import Home from "./Home/Home";
import NotesApp from "./Note Keeper/src/components/NotesApp";
import DiceApp from "./Dice Game/DiceApp";
import SimonApp from "./Simon Game/SimonApp";
import Theme from "./MuiTheme";
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    
    return (
        <ThemeProvider theme={Theme}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Notes" exact component={NotesApp}/>
                    <Route path="/Dice" exact component={DiceApp}/>
                    <Route path="/Simon" exact component={SimonApp}/>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App;