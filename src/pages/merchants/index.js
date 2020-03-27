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
import MerchantsHeader from "components/Header/MerchantsHeader";

export default class Routes extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <MerchantsHeader />
        <Switch>
          <SignedInRoute type={AUTH.USER_TYPE.MERCHANT} exact path={routes.merchants.root} component={FrontPage}/>
          <SignedInRoute type={AUTH.USER_TYPE.MERCHANT} exact path={routes.merchants.home} component={FrontPage}/>
          <SignedInRoute type={AUTH.USER_TYPE.MERCHANT} path={routes.merchants.information.main} component={InformationPage}/>
          <SignedOutRoute exact path={routes.merchants.root} component={LoginPage}/>
          <SignedOutRoute path={routes.merchants.auth.login} component={LoginPage}/>
          <SignedOutRoute path={routes.merchants.auth.signup} component={SignupPage}/>
          <Redirect to={routes.merchants.home}/>
        </Switch>
      </React.Fragment>
    );
  }
}
