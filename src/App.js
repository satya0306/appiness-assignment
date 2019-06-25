import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginContainer from "./container/LoginContainer";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginContainer} />
        <Route path="/details" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
