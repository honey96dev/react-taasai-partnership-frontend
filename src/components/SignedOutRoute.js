import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

export default ({component, ...props}) => {
  const {auth} = useSelector(state => state);

  return (
    auth.signedIn ? <Redirect to={"/"}/> : <Route component={component} {...props}/>
  );
};
