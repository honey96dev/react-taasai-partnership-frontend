import React from "react";
import {connect} from "react-redux";

import "./HeroSection2.css";

class HeroSection extends React.Component {
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
        <section id="hero_section" className="hero-section pt-100 street-img-container"
                 // style={{
                 //   backgroundImage: "url('img/hero-bg-1.jpg')",
                 //   backgroundRepeat: "no-repeat",
                 //   backgroundPosition: "center center",
                 //   backgroundSize: "cover"
                 // }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6 order-1 order-md-0">
                <div className="hero-content-left text-white mt-5">
                  <h1 className="hero-heading"><span>Get to where you want to be.</span></h1>
                  <h1 className="hero-heading">It's in your hand.</h1>
                  {/*<p className="lead">Quickly morph client-centric results through performance based applications.*/}
                  {/*  Proactively facilitate professional human capital for cutting-edge.</p>*/}

                  {/*<a href="#download" className="btn app-store-btn">Download Now</a>*/}
                  <div className="row mt-4 mt-md-5">
                    <div className="col-6 col-md-6 text-right">
                      <a href="#">
                        <img src="img/bannerApp.png"/>
                      </a>
                    </div>
                    <div className="col-6 col-md-6 text-left">
                      <a href="#">
                        <img src="img/bannerPlay.png"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <div className="hero-animation-img pt-100">
                  <div className="row">
                    <div className="col-6 col-md-12">
                      <img src="img/man.png" alt="img" className="img-fluid"/>
                    </div>
                    <div className="col-6 d-md-none pt-100">
                      <img src="img/car.png" alt="img" className="img-fluid"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 d-block d-md-none order-0 order-md-1">
                <img src="img/hero-car.png" alt="img" className="img-fluid"/>
              </div>
            </div>

            {/*<div className="row">*/}
            {/*  <ul className="list-inline counter-wrap">*/}
            {/*    <li className="list-inline-item">*/}
            {/*      <div className="single-counter text-center">*/}
            {/*        <span>2305</span>*/}
            {/*        <h6>Happy Client</h6>*/}
            {/*      </div>*/}
            {/*    </li>*/}
            {/*    <li className="list-inline-item">*/}
            {/*      <div className="single-counter text-center">*/}
            {/*        <span>2145</span>*/}
            {/*        <h6>App Download</h6>*/}
            {/*      </div>*/}
            {/*    </li>*/}
            {/*    <li className="list-inline-item">*/}
            {/*      <div className="single-counter text-center">*/}
            {/*        <span>2345</span>*/}
            {/*        <h6>Total Rates</h6>*/}
            {/*      </div>*/}
            {/*    </li>*/}
            {/*    <li className="list-inline-item">*/}
            {/*      <div className="single-counter text-center">*/}
            {/*        <span>2245</span>*/}
            {/*        <h6>Awards win</h6>*/}
            {/*      </div>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(HeroSection);
