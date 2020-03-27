import React from "react";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";

import {RESULT} from "core/globals";
import authActions from "actions/auth";
import Service from "services/merchants/InformationService";

import "react-phone-number-input/style.css";

export default () => {
  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);
  const {user} = auth;

  let formikProps;

  const initialValues = {
    name: user.name || "",
    address: user.address || "",
    email: user.email || "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Organization Name is required"),
    address: Yup.string()
      .required("Address is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
  });

  const handleSubmit = (values, {setSubmitting}) => {
    setSubmitting(true);

    Service.save({...values, id: user.id,})
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          dispatch(authActions.successSignIn(res.data));
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
              <div className="col-md-12">
                <div className="card login-signup-card shadow-lg mb-0">
                  <div className="card-body px-md-5 py-5">
                    <div className="mb-5">
                      <h6 className="h3">Cause Information</h6>
                      <p className="text-muted mb-0">
                        Enter your cause information with follow fields.
                      </p>
                    </div>
                    <form
                      className="login-signup-form"
                      method="post"
                      onSubmit={formikProps.handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="pb-1">Name</label>
                            <input
                              name="name"
                              className="form-control"
                              placeholder="Enter Name"
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.name && !!errors.name &&
                            <div className="invalid-feedback d-block">{errors.name}</div>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="pb-1">Email Address</label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="name@yourdomain.com"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.email && !!errors.email &&
                            <div className="invalid-feedback d-block">{errors.email}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="pb-1">Address</label>
                            <input
                              name="address"
                              className="form-control"
                              placeholder="Enter Address"
                              value={values.address}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.address && !!errors.address &&
                            <div className="invalid-feedback d-block">{errors.address}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 d-none d-sm-block"/>
                        <div className="col-md-4">
                          <button
                            type="submit"
                            className="btn btn-lg btn-block solid-btn border-radius mt-4 mb-3"
                            id="signIn"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Saving..." : "Save"}
                          </button>
                        </div>
                        <div className="col-md-4 d-none d-sm-block"/>
                      </div>
                      {/*<FormikErrorFocus*/}
                      {/*  offset={0}*/}
                      {/*  align="top"*/}
                      {/*  focusDelay={200}*/}
                      {/*  ease="linear"*/}
                      {/*  duration={1000}*/}
                      {/*/>*/}
                    </form>
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
