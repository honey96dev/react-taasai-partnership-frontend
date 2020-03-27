import fetch, {setHeader} from "apis/fetch";
import {POST} from "apis/constants";
import apis from "core/apis";
import {PROJECT, RESULT} from "core/globals";
import helpers from "core/helpers";

export default {
  login: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.merchants.auth.login, params)
        .then(res => {
          if (res.result === RESULT.SUCCESS) {
            helpers.onSuccessSignIn(params, res);
          }
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  signup: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.merchants.auth.signup, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  signOut: params => {
    setHeader({Authorization: null});
    sessionStorage.removeItem(PROJECT.PERSIST_KEY);
    localStorage.removeItem(PROJECT.PERSIST_KEY);
  },
};
