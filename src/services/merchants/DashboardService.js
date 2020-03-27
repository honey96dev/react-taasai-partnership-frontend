import fetch from "apis/fetch";
import {POST} from "apis/constants";
import apis from "core/apis";

export default {
  overall: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.merchants.dashboard.overall, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  offersList: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.merchants.dashboard.offersList, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },
};
