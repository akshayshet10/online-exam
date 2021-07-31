import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./component/Header";
import Register from "./screen/Register";
import Login from "./screen/Login";

import HomeScreen from "./screen/HomeScreen";
import LineGraph from "./screen/LineGraph";
import GenerateAutomaticResult from "./screen/GenerateAutomaticResult";

import Profile from "./screen/Profile";
import Teaching from "./screen/Teaching";
import TakeExam from "./screen/TakeExam";
import TrackProgress from "./screen/TrackProgress";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
     
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/Linegraph" component={LineGraph} />
        <Route path="/GenerateResult" component={GenerateAutomaticResult} />
        <Route path="/Teaching" component={Teaching} />
        <Route path="/Exam" component={TakeExam} />
        <Route path="/track" component={TrackProgress} />
      
      

     
      </Switch>
    </BrowserRouter>
  );
};

export default App;
