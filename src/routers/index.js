import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

import routes from "core/routes";
import Theme2 from "themes/theme2";
import CausesPage from "pages/causes";
import MerchantsPage from "pages/merchants";
import FPage from "themes/fpage";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path={routes.causes.root} component={CausesPage}/>
            <Route path={routes.merchants.root} component={MerchantsPage}/>
            <Route exact path="/fpage/:page" component={FPage} />
            <Route path="/" component={Theme2}/>
            <Redirect to="/"/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
