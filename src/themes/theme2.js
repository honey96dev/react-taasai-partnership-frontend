import React, {Component} from "react";

import Header from "components/Header/header";
import HeroSection from "components/HeroSection/HeroSection2";
import RideSection from "components/AboutUs/AboutUs6";
import FareSection from "components/FareEstimate";
import RoundUp from "components/RoundUp";
import BlogSection from "components/Blog";
import Contact from "components/Contact";
import FooterSection from "components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <RideSection />
          <RoundUp />
          <FareSection />
          <BlogSection />
          <Contact />
        </div>
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
