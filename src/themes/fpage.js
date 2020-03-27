import React, {Fragment, useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";

import Header from "components/Header/header";
import FooterSection from "components/Footer";
import Service from "services/FooterService";
import {RESULT} from "core/globals";

export default () => {
  const {page} = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const loadData = e => {
    setIsLoading(true);
    Service.get({url: page})
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setData(res.data);
        } else {
          setData("");
        }
        setIsLoading(false);
      })
      .catch(err => {
        setData("");
        setIsLoading(false);
      });
  };

  useEffect(e => {
    loadData();
  }, []);

  const payload = () => (
    <Fragment>
      <Header />
      <div className="main">
        <div className="mt-5 ptb-100 px-5 container">
          {isLoading && <div>Loading...</div>}
          {!isLoading && <div dangerouslySetInnerHTML={{__html: data.content}}></div>}
        </div>
      </div>
      <FooterSection />
    </Fragment>
  );

  return payload();
}
