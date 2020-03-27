export const routes = {
  root: "/",
  causes: {
    root: "/causes",
    auth: {
      login: "/causes/login",
      signup: "/causes/signup",
    },
    home: "/causes/home",
    information: {
      root: "/causes/information",
      main: "/causes/information",
    },
    payout: {
      root: "/causes/payout",
      main: "/causes/payout",
    },
  },
  merchants: {
    root: "/merchants",
    auth: {
      login: "/merchants/login",
      signup: "/merchants/signup",
    },
    home: "/merchants/home",
    information: {
      root: "/merchants/information",
      main: "/merchants/information",
    },
  }
};

export default routes;
