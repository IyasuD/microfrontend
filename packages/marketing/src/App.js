import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Landing from "./components /Landing";
import Pricing from "./components /Pricing";
const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        {/* <BrowserRouter> - reason it makes a browser history object*/}
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
          {/* </BrowserRouter> */}
        </Router>
      </StylesProvider>
    </div>
  );
};
