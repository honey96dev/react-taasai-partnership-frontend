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
        <section className="about-us ptb-100 alternative-background">
          <div id="ride_section" className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-content-right">
                  <img
                    src="img/estimate.png"
                    // src="img/delivery-app.svg"
                    width="500"
                    alt="about us"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h1 className="ride-heading">Get a ride in a minute</h1>
                <p>Pick your destination, request a ride, meet your driver, enjoy the journey.</p>
                {/*<span className="badge badge-primary badge-pill">*/}
                {/*  About our app*/}
                {/*</span>*/}
                {/*<h2 className="mt-4">Deliver your product using AppCo</h2>*/}
                {/*<p className="mb-4 lh-190">*/}
                {/*  Quick has all the right tools in order to make your website*/}
                {/*  building process a breeze and automatize your time-consuming*/}
                {/*  tasks in your development workflow.*/}
                {/*</p>*/}
                {/*<ul className="list-unstyled">*/}
                {/*  <li className="py-2">*/}
                {/*    <div className="d-flex align-items-center">*/}
                {/*      <div>*/}
                {/*        <div className="badge badge-circle badge-primary mr-3">*/}
                {/*          <span className="ti-check"></span>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <div>*/}
                {/*        <p className="mb-0">Tones of SASS variables</p>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </li>*/}
                {/*  <li className="py-2">*/}
                {/*    <div className="d-flex align-items-center">*/}
                {/*      <div>*/}
                {/*        <div className="badge badge-circle badge-primary mr-3">*/}
                {/*          <span className="ti-check"></span>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <div>*/}
                {/*        <p className="mb-0">*/}
                {/*          Create your own skin to match your brand*/}
                {/*        </p>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </li>*/}
                {/*  <li className="py-2">*/}
                {/*    <div className="d-flex align-items-center">*/}
                {/*      <div>*/}
                {/*        <div className="badge badge-circle badge-primary mr-3">*/}
                {/*          <span className="ti-check"></span>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <div>*/}
                {/*        <p className="mb-0">*/}
                {/*          Globally orchestrate tactical channels whereas bricks*/}
                {/*        </p>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </li>*/}
                {/*  <li className="py-2">*/}
                {/*    <div className="d-flex align-items-center">*/}
                {/*      <div>*/}
                {/*        <div className="badge badge-circle badge-primary mr-3">*/}
                {/*          <span className="ti-check"></span>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <div>*/}
                {/*        <p className="mb-0">*/}
                {/*          Use Gulp to prepare all assets for production*/}
                {/*        </p>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </li>*/}
                {/*  <li className="py-2">*/}
                {/*    <div className="d-flex align-items-center">*/}
                {/*      <div>*/}
                {/*        <div className="badge badge-circle badge-primary mr-3">*/}
                {/*          <span className="ti-check"></span>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*      <div>*/}
                {/*        <p className="mb-0">*/}
                {/*          Collaboratively predominate vertical manufactured*/}
                {/*        </p>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </li>*/}
                {/*</ul>*/}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
