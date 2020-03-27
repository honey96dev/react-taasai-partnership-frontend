const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
const origin = isDev ? "http://localhost:3000" : "https://www.taasai.com";

export const PROJECT = {
  IS_DEV: isDev,
  PERSIST_KEY: "taasai-roundup",
};

export const ALERT = {
  SUCCESS: "success",
  DANGER: "danger",
  LIFETIME: 5000,
};

export const AUTH = {
  CURRENT_USER: "CURRENT_USER",
  TOKEN: "TOKEN",
  USERNAME_MAX_LENGTH: 20,
  PASSWORD_MIN_LENGTH: 6,
  USER_TYPE: {
    CAUSE: "causes",
    MERCHANT: "merchants"
  },
};

export const DATE_FORMAT = {
  ISO: "YYYY-M-D",
  ISO2: "YYYY-MM-DD",
};

export const DELAY = {
  DELAY1: 500,
  DELAY2: 1000,
  DELAY3: 1500,
};

export const EFFECT = {
  TRANSITION_TIME: 500,
  TRANSITION_TIME5: 5000,
};

export const ERROR = {
  UNKNOWN_SERVER_ERROR: "UNKNOWN_SERVER_ERROR"
};

export const INPUT = {
  DESCRIPTION_LENGTH_BREAKPOINT: 400,
  TEXTAREA_ROWS1: 10,
  TEXTAREA_ROWS2: 18,
  TEXTAREA_MAX_LENGTH: 4096,
};

export const NUMERAL = {
  FORMAT: {
    FIXED_0: "0,0",
    FIXED_2: "0,0.00",
  },
};

export const PAGINATION = {
  WIDTH: 10,
  WIDTH_MOBILE: 6,
};

export const RESULT = {
  SUCCESS: "success",
  ERROR: "danger",
};

export default {
  PROJECT,
  ALERT,
  AUTH,
  DATE_FORMAT,
  EFFECT,
  ERROR,
  INPUT,
  NUMERAL,
  PAGINATION,
  RESULT,
};
