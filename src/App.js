import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Landing from 'pages/Landing'
import "./style.css";

export default function App() {
  return (
    <Switch>
      <Route exact path ="/" component={Landing} />

    </Switch>
  );
}
