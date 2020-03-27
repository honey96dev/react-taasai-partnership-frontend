import React, {Component} from "react";
import FooterSection from "components/Footer";
import Stats from "./partial/Stats";
import OffersList from "./partial/OffersList";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          {/*<HeroSection />*/}
          {/*<RideSection />*/}
          {/*<RoundUp />*/}
          {/*<FareSection />*/}
          {/*<BlogSection />*/}
          {/*<Contact />*/}
          <div className="container">
            <div className="ptb-100">
              <Stats/>
              <OffersList/>
            </div>
          </div>
        </div>
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
