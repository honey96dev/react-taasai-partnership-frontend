import fetch from "apis/fetch";
import {POST} from "apis/constants";
import apis from "core/apis";

export default {
  overall: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.causes.dashboard.overall, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  donateList: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.causes.dashboard.donateList, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  withdrawList: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.causes.dashboard.withdrawList, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },
};
