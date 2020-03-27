import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";

import {EFFECT, PROJECT} from "core/globals";
import {Fade} from "components/MyToast/MyToast";
import Routes from "routers";


function App() {
  const {auth} = useSelector(state => state);
  sessionStorage.setItem(PROJECT.PERSIST_KEY, JSON.stringify(auth));

  return (
      <Fragment>
        <Routes />
        <ToastContainer
          className="text-left"
          hideProgressBar={true}
          position="top-right"
          dir="ltr"
          // newestOnTop={true}
          // autoClose={0}
          autoClose={EFFECT.TRANSITION_TIME5}
          closeButton={false}
          transition={Fade}
        />
      </Fragment>
  );
}

export default App;
