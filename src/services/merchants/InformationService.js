import fetch from "apis/fetch";
import {POST} from "apis/constants";
import apis from "core/apis";

export default {
  save: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.merchants.information.save, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },
};
