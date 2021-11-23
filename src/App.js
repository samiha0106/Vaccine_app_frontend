import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
const App = () => { 
  return (
    <Router>
    <div className="app">
     <Navbar/>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
  
      </Switch>
      <Footer />
    </div>
  </Router>
);
}

export default App;
