import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        {/* <BrowserRouter> - reason it makes a browser history object*/}
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin} />
            <Route path="/auth/signup" component={Signup} />
          </Switch>
          {/* </BrowserRouter> */}
        </Router>
      </StylesProvider>
    </div>
  );
};
