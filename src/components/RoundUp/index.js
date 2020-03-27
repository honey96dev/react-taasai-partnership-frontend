import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <section className="about-us ptb-100">
          <div id="roundup_section" className="container">
            <div className="row align-items-center">
              <div className="col-md-7 order-1 order-md-0">
                <h1 className="ride-heading">Local charity Round Up's</h1>
                <p>We built Taasai with community values in mind and to help harness the giving spirit of every community. When you ride local with Taasai, you can elect to round up your fare to the nearest Pound - and designate a local charity</p>
                {/*<p>Pick your destination, request a ride, meet your driver, enjoy the journey.</p>*/}
              </div>
              <div className="col-md-5 order-0 order-md-1">
                <div className="about-content-right">
                  <img
                    src="img/roundup.png"
                    // src="img/delivery-app.svg"
                    width="500"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
