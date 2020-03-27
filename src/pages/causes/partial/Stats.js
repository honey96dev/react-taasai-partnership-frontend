import React, {Fragment, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import numeral from "numeral";

import {NUMERAL, RESULT} from "core/globals";
import Service from "services/causes/DashboardService";

import "./Stats.css";

export default () => {
  const {auth: {user}} = useSelector(state => state);

  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({});

  const progressBarHeight = 4;

  const loadData = e => {
    setIsLoading(true);
    Service.overall({id: user.id})
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setStats(res.data);
        } else {
          setStats({});
        }
        setIsLoading(false);
      })
      .catch(err => {
        setStats({});
        setIsLoading(false);
      });
  };

  useEffect(e => {
    loadData();
  }, []);

  const payload = () => (
    <Fragment>
      <div>
        <div className="row">
          <div className="col-md-3 mb-4 mb-lg-0">
            <div className="media align-items-center">
              <i className="fa fa-directions icon-box text-center text-info mr-4 circle p-3 border border-info bg-info-light25"/>
              <div className="media-body">
                <h4 className="weight-400 m-0">{numeral(stats.contributors || 0).format(NUMERAL.FORMAT.FIXED_0)}</h4>
                <small className="text-muted">Contributors</small></div>
            </div>
            <div data-test="progress" className="progress md-progress my-2" style={{height: progressBarHeight}}>
              <div className="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}/>
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <div className="media align-items-center">
              <i className="fa fa-coins icon-box text-center text-danger mr-4 circle p-3 border border-danger bg-danger-light25"/>
              <div className="media-body">
                <h4 className="weight-400 m-0">{numeral(stats.total || 0).format(NUMERAL.FORMAT.FIXED_2)}</h4>
                <small className="text-muted">Total Value</small></div>
            </div>
            <div data-test="progress" className="progress md-progress my-2" style={{height: progressBarHeight}}>
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}/>
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <div className="media align-items-center">
              <i className="fa fa-pound-sign icon-box text-center text-success mr-4 circle p-3 border border-success bg-success-light25"/>
              <div className="media-body">
                <h4 className="weight-400 m-0">{numeral(stats.balance || 0).format(NUMERAL.FORMAT.FIXED_2)}</h4>
                <small className="text-muted">Live Balance</small></div>
            </div>
            <div data-test="progress" className="progress md-progress my-2" style={{height: progressBarHeight}}>
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}/>
            </div>
          </div>
          <div className="col-md-3 mb-4 mb-lg-0">
            <div className="media align-items-center">
              <i className="fa fa-download icon-box text-center text-warning mr-4 circle p-3 border border-warning bg-warning-light25"/>
              <div className="media-body">
                <h4 className="weight-400 m-0">{numeral(stats.withdrawn || 0).format(NUMERAL.FORMAT.FIXED_0)}</h4>
                <small className="text-muted">Withdrawn</small></div>
            </div>
            <div data-test="progress" className="progress md-progress my-2" style={{height: progressBarHeight}}>
              <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}/>
            </div>
          </div>
          {/*<MDBCol md="4" className="mb-4 mb-lg-0">*/}
          {/*  <div className="media align-items-center">*/}
          {/*    <MDBIcon icon="pound-sign"*/}
          {/*             className="icon-box text-center text-danger mr-4 circle p-3 border border-danger bg-danger-light25"/>*/}
          {/*    <div className="media-body">*/}
          {/*      <h4 className="weight-400 m-0">{numeral(stats.total_earning || 0).format(NUMERAL.FORMAT.FIXED_2)}</h4>*/}
          {/*      <small className="text-muted">{t("DASHBOARD.FIELDS.EARNING")}</small></div>*/}
          {/*  </div>*/}
          {/*  <MDBProgress className="my-2" material value={50} color="danger"/>*/}
          {/*</MDBCol>*/}
          {/*<MDBCol md="4" className="mb-4 mb-lg-0">*/}
          {/*  <div className="media align-items-center">*/}
          {/*    <MDBIcon icon="car"*/}
          {/*             className="icon-box text-center text-success mr-4 circle p-3 border border-success bg-success-light25"/>*/}
          {/*    <div className="media-body">*/}
          {/*      <h4 className="weight-400 m-0">{numeral(stats.drivers_count || 0).format(NUMERAL.FORMAT.FIXED_0)}</h4>*/}
          {/*      <small className="text-muted">{t("DASHBOARD.FIELDS.DRIVERS")}</small></div>*/}
          {/*  </div>*/}
          {/*  <MDBProgress className="my-2" material value={50} color="success"/>*/}
          {/*</MDBCol>*/}
        </div>
      </div>

    </Fragment>
  );

  return payload();
}
