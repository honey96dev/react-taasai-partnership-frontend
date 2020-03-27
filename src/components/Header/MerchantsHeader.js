import React from "react";
import {Link, useHistory} from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";

import authActions from "actions/auth";
import routes from "core/routes";
import Service from "services/causes/AuthService";

import "./header.css"

const CauseHeader = () => {
  const {auth} = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const links = [
    {
      url: routes.merchants.home,
      title: "Merchants",
    },
    {
      url: routes.merchants.information.root,
      title: "Information",
    },
    {
      url: routes.merchants.information.root,
      title: "Add New Offer",
    },
  ];

  const pathname = history.location.pathname;

  const handleLogout = e => {
    Service.signOut();
    dispatch(authActions.signOut());
  };

  const payload = () => (
    <React.Fragment>
      <header className="header">
        <nav
          className={"navbar navbar-expand-lg fixed-top white-bg"}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="/img/logo-white-1x.png"
                width="120"
                alt="logo"
                className="img-fluid"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ti-menu"></span>
            </button>
            <div
              className="collapse navbar-collapse main-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                {links.map((item, index) => (
                  <li key={index} className={pathname.startsWith(item.url) ? "is-current" : ""}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <ul className="navbar-nav ml-auto">
                <li>
                  <a href={routes.merchants.home} onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );

  return payload();
};

export default connect(state => ({}))(CauseHeader);
