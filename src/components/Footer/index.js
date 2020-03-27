import React from "react";

import Service from "services/FooterService";
import {RESULT} from "core/globals";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
  }

  componentDidMount() {
    Service.list()
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          const items = {};
          for (let item of res.data) {
            if (!items[item.position]) {
              items[item.position] = [];
            }
            items[item.position].push(item);
          }
          this.setState({
            items: items,
          });
        } else {
          this.setState({
            items: {},
          });
        }
      })
      .catch(err => {
        this.setState({
          items: {},
        });
      })
  }

  render() {
    const {items} = this.state;

    return (
      <React.Fragment>
        <footer className="footer-section">
          <div
            className={"footer-top background-img-2 " + (this.props.noSubscription ? 'py-5' : 'pt-150 pb-5')} 
            style={{
              backgroundImage: "url('/img/footer-bg.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top",
              backgroundSize: "cover"
            }}
          >
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-3 mb-3 mb-lg-0">
                  {/*<div className="footer-nav-wrap text-white">*/}
                  {/*  <img*/}
                  {/*    src="/img/logo-white-1x.png"*/}
                  {/*    alt="footer logo"*/}
                  {/*    width="120"*/}
                  {/*    className="img-fluid mb-3"*/}
                  {/*  />*/}
                  {/*  <p>*/}
                  {/*    Holisticly empower premium architectures without*/}
                  {/*    value-added ideas. Seamlessly evolve cross-platform*/}
                  {/*    experiences.*/}
                  {/*  </p>*/}

                  {/*  <div className="social-list-wrap">*/}
                  {/*    <ul className="social-list list-inline list-unstyled">*/}
                  {/*      <li className="list-inline-item">*/}
                  {/*        <a href="/#" target="_blank" title="Facebook">*/}
                  {/*          <span className="ti-facebook"></span>*/}
                  {/*        </a>*/}
                  {/*      </li>*/}
                  {/*      <li className="list-inline-item">*/}
                  {/*        <a href="/#" target="_blank" title="Twitter">*/}
                  {/*          <span className="ti-twitter"></span>*/}
                  {/*        </a>*/}
                  {/*      </li>*/}
                  {/*      <li className="list-inline-item">*/}
                  {/*        <a href="/#" target="_blank" title="Instagram">*/}
                  {/*          <span className="ti-instagram"></span>*/}
                  {/*        </a>*/}
                  {/*      </li>*/}
                  {/*      <li className="list-inline-item">*/}
                  {/*        <a href="/#" target="_blank" title="printerst">*/}
                  {/*          <span className="ti-pinterest"></span>*/}
                  {/*        </a>*/}
                  {/*      </li>*/}
                  {/*    </ul>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    {/*<h5 className="mb-3 text-white">Others Links</h5>*/}
                    <ul className="list-unstyled">
                      {!!items[1] && items[1].map((item, index) => (
                        <li key={index} className="mb-2">
                          <a href={`/fpage/${item.url}`}>{item.name}</a>
                        </li>
                      ))}
                      {/*<li className="mb-2">*/}
                      {/*  <a href="/#">Customer Support</a>*/}
                      {/*</li>*/}
                      {/*<li className="mb-2">*/}
                      {/*  <a href="/#">About Us</a>*/}
                      {/*</li>*/}
                      {/*<li className="mb-2">*/}
                      {/*  <a href="/#">Partnership</a>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    {/*<h5 className="mb-3 text-white">Others Links</h5>*/}
                    <ul className="list-unstyled">
                      {!!items[2] && items[2].map((item, index) => (
                        <li key={index} className="mb-2">
                          <a href={`/fpage/${item.url}`}>{item.name}</a>
                        </li>
                      ))}
                      {/*<li className="mb-2">*/}
                      {/*  <a href="/#">Privacy Policy</a>*/}
                      {/*</li>*/}
                      {/*<li className="mb-2">*/}
                      {/*  <a href="/#">Terms & Conditions</a>*/}
                      {/*</li>*/}
                      {/*<li className="mb-2">*/}
                      {/*  <a href="/#">Press Inquiries</a>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    {/*<h5 className="mb-3 text-white">Others Links</h5>*/}
                    <ul className="list-unstyled">
                      {!!items[3] && items[3].map((item, index) => (
                        <li key={index} className="mb-2">
                          <a href={`/fpage/${item.url}`}>{item.name}</a>
                        </li>
                      ))}
                      {/*<li className="mb-2">*/}
                      {/*  <a href="/#">Data Processing</a>*/}
                      {/*</li>*/}
                      {/*<li className="mb-2">*/}
                      {/*  <a href="/#">Data Transferring</a>*/}
                      {/*</li>*/}
                      {/*<li className="mb-2">*/}
                      {/*  <a href="/#">Cookies and Others</a>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom gray-light-bg pt-4 pb-4">
            <div className="container">
              <div className="row text-center justify-content-center">
                <div className="col-md-6 col-lg-5">
                  <p className="copyright-text pb-0 mb-0">
                    Copyrights © 2020. All rights reserved by
                    <a href="/#"> Taasai</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
