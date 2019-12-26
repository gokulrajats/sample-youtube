import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import DashBoard from "./DashBoard";
import { Fragment } from "react";
import App from './App';
import React from 'react'; 
  const RouteIt = ()=>{

  return(
      <Fragment>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={DashBoard} />
      </div>
  </Router>
  </Fragment>
  )};
  
  export default RouteIt;