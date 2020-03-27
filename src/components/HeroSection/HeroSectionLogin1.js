import React from "react";
import {connect} from "react-redux";
import * as Yup from "yup";
import {useFormik} from "formik";
import {toast} from "react-toastify";

import Service from "services/causes/AuthService";
import {RESULT} from "core/globals";

const HeroSection = () => {
  let formikProps;

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password min length is 6"),
  });

  const handleSubmit = (values, {setSubmitting}) => {
    setSubmitting(true);

    Service.login(values)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
        setSubmitting(false);
      })
      .catch(err => {
        toast.error("Unknown Server Error");
        setSubmitting(false);
      });
  };

  formikProps = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  const {values, touched, errors, setFieldValue, setValues, handleChange, handleBlur, isSubmitting} = formikProps;

  const payload = () => (
    <React.Fragment>
      <section
        className="hero-section ptb-100 background-img full-screen"
        style={{
          backgroundImage: "url('img/hero-bg-1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between pt-5 pt-sm-5 pt-md-5 pt-lg-0">
            <div className="col-md-7 col-lg-6">
              <div className="hero-content-left text-white">
                <h1 className="text-white">Welcome Back !</h1>
                <p className="lead">
                  Keep your face always toward the sunshine - and shadows will
                  fall behind you.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="card login-signup-card shadow-lg mb-0">
                <div className="card-body px-md-5 py-5">
                  <div className="mb-5">
                    <h5 className="h3">Login</h5>
                    <p className="text-muted mb-0">
                      Sign in to your account to continue.
                    </p>
                  </div>

                  <form
                    className="login-signup-form"
                    method="post"
                    onSubmit={formikProps.handleSubmit}
                  >
                    <div className="form-group">
                      <label className="pb-1">Email Address</label>
                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-email color-primary"></span>
                        </div>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="name@yourdomain.com"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col">
                          <label className="pb-1">Password</label>
                        </div>
                        <div className="col-auto">
                          <a
                            href="password-reset.html"
                            className="form-text small text-muted"
                          >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="input-group input-group-merge">
                        <div className="input-icon">
                          <span className="ti-lock color-primary"></span>
                        </div>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter your password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                      id="signIn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Signing in..." : "Sign in"}
                    </button>
                  </form>
                </div>
                <div className="card-footer bg-transparent border-top px-md-5">
                  <small>Not registered?</small>
                  <a href="/causes/signup" className="small">
                    {" "}
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-img-absolute">
          <img
            src="img/hero-bg-shape-1.svg"
            alt="wave shape"
            className="img-fluid"
          />
        </div>
      </section>
    </React.Fragment>
  );

  return payload();
};

export default connect(state => ({
  state,
}))(HeroSection);
