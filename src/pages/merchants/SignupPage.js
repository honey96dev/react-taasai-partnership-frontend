import React from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {useFormik} from "formik";
import * as Yup from "yup";

import Header from "components/Header/header";
import Service from "services/merchants/AuthService";
import {RESULT} from "core/globals";
import routes from "core/routes";

const SignupPage = () => {
  let formikProps;

  const initialValues = {
    email: "",
    password: "",
    isAgreed: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password min length is 6"),
    isAgreed: Yup.boolean()
      .oneOf([true], 'Must Accept Terms and Conditions'),
  });

  const handleSubmit = (values, {setSubmitting}) => {
    setSubmitting(true);

    Service.signup(values)
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
      <Header/>
      <div className="main">
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
                  <h1 className="text-white">Create Your Account</h1>
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
                      <h6 className="h3">Create account</h6>
                      <p className="text-muted mb-0">
                        Made with love by developers for developers.
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
                          {!!touched.email && !!errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="pb-1">Password</label>
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
                          {!!touched.password && !!errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                        </div>
                      </div>

                      <div className="my-4">
                        <div className="custom-control custom-checkbox mb-3">
                          <input
                            type="checkbox"
                            name="isAgreed"
                            className="custom-control-input"
                            id="ckbAgree"
                            checked={values.isAgreed}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="custom-control-label" htmlFor="ckbAgree">
                            I agree to the <a href="/#">terms and conditions</a>
                          </label>
                          {!!touched.isAgreed && !!errors.isAgreed && <div className="invalid-feedback d-block">{errors.isAgreed}</div>}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                        id="signIn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Signing up..." : "Sign up"}
                      </button>
                    </form>
                  </div>
                  <div className="card-footer px-md-5 bg-transparent border-top">
                    <small>Already have an account? </small>
                    <Link to={routes.merchants.auth.login} className="small">
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-img-absolute">
            <img src="/img/wave-shap.svg" alt="wave shape" className="img-fluid"/>
          </div>
        </section>
      </div>
    </React.Fragment>
  );

  return payload();
};

export default SignupPage;
