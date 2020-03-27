import React from "react";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {connect} from "react-redux";

import "./header.css"

class Header extends React.Component {
  LINK_TYPE = {
    LINK: "LINK",
    SECTION: "SECTION",
  };
  constructor(props) {
    super(props);
    const navItems = [
      {
        id: "hero_section",
        title: "Home",
        type: this.LINK_TYPE.LINK,
        link: "/",
        target: undefined,
      }, {
        id: "ride_section",
        title: "Ride",
        type: this.LINK_TYPE.LINK,
        link: "/#ride_section",
        target: undefined,
      }, {
        id: "roundup_section",
        title: "Round Up",
        type: this.LINK_TYPE.LINK,
        link: "/#roundup_section",
        target: undefined,
      }, {
        id: "cashback_section",
        title: "Cashback",
        type: this.LINK_TYPE.LINK,
        link: "/#cashback_section",
        target: undefined,
      }, {
        id: "blog_section",
        title: "Blog",
        type: this.LINK_TYPE.LINK,
        link: "/#blog_section",
        target: undefined,
      }, {
        id: "contact_section",
        title: "Contact Us",
        type: this.LINK_TYPE.LINK,
        link: "/#contact_section",
        target: undefined,
      }
      ];
    let navLinks = [];
    navItems.map((item, index) => {
      navLinks.push(item.id);
    });
    this.state = {
      navItems,
      navLinks,
    };
  }

  render() {
    const {navItems, navLinks} = this.state;
    return (
      <React.Fragment>
        <header className="header">
          <nav
            className={"navbar navbar-expand-lg fixed-top white-bg"}>
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src={this.props.bgColor && this.props.bgColor === 'white' ? "/img/logo-color-1x.png" : "/img/logo-white-1x.png"}
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
                  <Scrollspy items={navLinks} className="navbar-nav ml-5 mr-auto" currentClassName="is-current">
                    {navItems.map((item, index) => (
                      <li key={`menu-item-${index}`}>
                        {item.type === this.LINK_TYPE.SECTION && <AnchorLink href={`#${item.id}`} offset={item.offset}>
                          {item.title}
                        </AnchorLink>}
                        {item.type === this.LINK_TYPE.LINK && <a href={item.link} target={item.target}>
                          {item.title}
                        </a>}
                      </li>
                    ))}
                  </Scrollspy>
                </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default connect(state => ({}))(Header);
