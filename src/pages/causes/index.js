import React from "react";
import {Redirect, Switch} from "react-router-dom";

import routes from "core/routes";
import {AUTH} from "core/globals";
import SignedOutRoute from "components/SignedOutRoute";
import SignedInRoute from "components/SignedInRoute";
import FrontPage from "./FrontPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import InformationPage from "./InformationPage";
import PayoutPage from "./PayoutPage";
import CauseHeader from "components/Header/CauseHeader";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CauseHeader />
        <Switch>
          <SignedInRoute type={AUTH.USER_TYPE.CAUSE} exact path={routes.causes.root} component={FrontPage}/>
          <SignedInRoute type={AUTH.USER_TYPE.CAUSE} exact path={routes.causes.home} component={FrontPage}/>
          <SignedOutRoute exact path={routes.causes.root} component={LoginPage}/>
          <SignedOutRoute path={routes.causes.auth.login} component={LoginPage}/>
          <SignedOutRoute path={routes.causes.auth.signup} component={SignupPage}/>
          <SignedInRoute type={AUTH.USER_TYPE.CAUSE} path={routes.causes.information.main} component={InformationPage}/>
          <SignedInRoute type={AUTH.USER_TYPE.CAUSE} path={routes.causes.payout.main} component={PayoutPage}/>
          <Redirect to={routes.causes.home}/>
        </Switch>
      </React.Fragment>
    );
  }
}
