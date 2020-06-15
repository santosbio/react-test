import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Users from "./components/Users/Users";
import Login from "./components/Login/Login";
import Stations from "./components/Stations/Stations";
import Farms from "./components/Farms/Farms";
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/users" component={Users}></Route>
                    <Route path="/stations" component={Stations}></Route>
                    <Route path="/farms" component={Farms}></Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
