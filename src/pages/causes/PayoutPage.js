import React, {Component} from "react";
import CauseHeader from "components/Header/CauseHeader";
import FooterSection from "components/Footer";
import Stats from "./partial/Stats";
import WithdrawList from "./partial/WithdrawList";

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
              <WithdrawList/>
            </div>
          </div>
        </div>
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
