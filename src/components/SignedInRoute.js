import React from "react";
import {Redirect, Route, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

export default ({component, type, ...props}) => {
  const {auth} = useSelector(state => state);
  const history = useHistory();

  const pathname = history.location.pathname;
  const signInPath = `/${type}/login`;

  return (
    (!auth.signedIn || auth.user.user_type !== type) && pathname !== signInPath ? <Redirect to={`${signInPath}?redirect=${encodeURI(history.location.pathname)}`}/> : <Route component={component} {...props}/>
  );
}
