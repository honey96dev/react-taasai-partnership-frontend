import {PROJECT} from "core/globals";

export default {
  baseUrl: PROJECT.IS_DEV ? "http://192.168.40.131:4080/api/" : "/api/",
  assetsBaseUrl: PROJECT.IS_DEV ? "http://192.168.40.131:4080/assets/" : "/assets/",

  assets: {
    flags: "images/flags",
  },

  causes: {
    auth: {
      login: "causes/auth/login",
      signup: "causes/auth/signup",
    },
    information: {
      save: "causes/information/save",
    },
    dashboard: {
      overall: "causes/dashboard/overall",
      donateList: "causes/dashboard/donate-list",
      withdrawList: "causes/dashboard/withdraw-list",
    },
  },

  merchants: {
    auth: {
      login: "merchants/auth/login",
      signup: "merchants/auth/signup",
    },
    information: {
      save: "merchants/information/save",
    },
    dashboard: {
      overall: "merchants/dashboard/overall",
      offersList: "merchants/dashboard/offers-list",
    },
  },

  footers: {
    list: "footers/list",
    get: "footers/get",
  },
}
