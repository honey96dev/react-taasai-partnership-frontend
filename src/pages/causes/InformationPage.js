import React from "react";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import FormikErrorFocus from "formik-error-focus";
import * as Yup from "yup";
import PhoneInput, {isValidPhoneNumber, parsePhoneNumber} from "react-phone-number-input";

import {RESULT} from "core/globals";
import apis from "core/apis";
import helpers from "core/helpers";
import authActions from "actions/auth";
import Service from "services/causes/InformationService";

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
    phone: (!!user.dial_code.length && !!user.phone.length) ? `${user.dial_code} ${user.phone}` : "",
    // logo: user.logo || "",
    manager_title: user.manager_title || "",
    manager_name1: user.manager_name1 || "",
    manager_name2: user.manager_name2 || "",
    about: user.about || "",
    join_reason: user.join_reason || "",
    social_media: user.social_media || "",
    social_frequency: user.social_frequency || "",
    major_event: user.major_event || "",
    bank_name: user.bank_name || "",
    bank_accountname: user.bank_accountname || "",
    bank_shortcode: user.bank_shortcode || "",
    bank_accountnumber: user.bank_accountnumber || "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Organization Name is required"),
    address: Yup.string()
      .required("Address is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    phone: Yup.string()
      .required("Phone is required")
      .test("phone-check", "Phone is invalid", isValidPhoneNumber),
    manager_title: Yup.string()
      .required("Title is required"),
    manager_name1: Yup.string()
      .required("First Name is required"),
    manager_name2: Yup.string()
      .required("Last Name is required"),
    about: Yup.string()
      .required("Mission is required"),
    join_reason: Yup.string()
      .required("Required"),
    social_media: Yup.string()
      .required("Required"),
    social_frequency: Yup.string()
      .required("Required"),
    major_event: Yup.string()
      .required("Required"),
    bank_name: Yup.string()
      .required("Bank Name is required"),
    bank_accountname: Yup.string()
      .required("Account Name is required"),
    bank_shortcode: Yup.string()
      .required("Short Code is required"),
    bank_accountnumber: Yup.string()
      .required("Account Number is required"),
    // address: Yup.string()
    //   .required("Address is required"),
  });

  const handleSubmit = (values, {setSubmitting}) => {
    setSubmitting(true);
    const mobile = parsePhoneNumber(values.phone);

    Service.save({...values, id: user.id, dial_code: `+${mobile.countryCallingCode}`, phone: mobile.nationalNumber,})
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
                            <label className="pb-1">Organization Name</label>
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
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="pb-1">Phone</label>
                            <input hidden id="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur}/>
                            <PhoneInput
                              className="md-form md-outline my-0"
                              // placeholder={t("DRIVERS.FIELDS.MOBILE")}
                              flagUrl={`${apis.assetsBaseUrl}${apis.assets.flags}/{XX}.png`}
                              value={values.phone}
                              onChange={value => helpers.triggerChangeEvent("phone", value)}/>
                            {!!touched.address && !!errors.address &&
                            <div className="invalid-feedback d-block">{errors.address}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">Bank Account</div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              name="bank_name"
                              className="form-control"
                              placeholder="Enter Bank Name"
                              value={values.bank_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.bank_name && !!errors.bank_name &&
                            <div className="invalid-feedback d-block">{errors.bank_name}</div>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              name="bank_accountname"
                              className="form-control"
                              placeholder="Enter Account Name"
                              value={values.bank_accountname}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.bank_accountname && !!errors.bank_accountname &&
                            <div className="invalid-feedback d-block">{errors.bank_accountname}</div>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              name="bank_shortcode"
                              className="form-control"
                              placeholder="Enter Short Code"
                              value={values.bank_shortcode}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.bank_shortcode && !!errors.bank_shortcode &&
                            <div className="invalid-feedback d-block">{errors.bank_shortcode}</div>}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              name="bank_accountnumber"
                              className="form-control"
                              placeholder="Enter Account Number"
                              value={values.bank_accountnumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.bank_accountnumber && !!errors.bank_accountnumber &&
                            <div className="invalid-feedback d-block">{errors.bank_accountnumber}</div>}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <label className="pb-1">Manager Information</label>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            {/*<label className="pb-1">Title</label>*/}
                            <input
                              name="manager_title"
                              className="form-control"
                              placeholder="Enter Title"
                              value={values.manager_title}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.manager_title && !!errors.manager_title &&
                            <div className="invalid-feedback d-block">{errors.manager_title}</div>}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            {/*<label className="pb-1">First Name</label>*/}
                            <input
                              name="manager_name1"
                              className="form-control"
                              placeholder="Enter First Name"
                              value={values.manager_name1}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.manager_name1 && !!errors.manager_name1 &&
                            <div className="invalid-feedback d-block">{errors.manager_name1}</div>}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            {/*<label className="pb-1">Last Name</label>*/}
                            <input
                              name="manager_name2"
                              className="form-control"
                              placeholder="Enter Last Name"
                              value={values.manager_name2}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.manager_name2 && !!errors.manager_name2 &&
                            <div className="invalid-feedback d-block">{errors.manager_name2}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="pb-1">Organization's Mission</label>
                            <textarea
                              name="about"
                              className="form-control"
                              placeholder="Enter Organization's Mission"
                              rows={8}
                              value={values.about}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.about && !!errors.about &&
                            <div className="invalid-feedback d-block">{errors.about}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="pb-1">Why does your organization want to be part of Taasai's Round Up Program & how do you plan to use funds to make an impact in the your area?</label>
                            <textarea
                              name="join_reason"
                              className="form-control"
                              rows={3}
                              value={values.join_reason}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.join_reason && !!errors.join_reason &&
                            <div className="invalid-feedback d-block">{errors.join_reason}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="pb-1">Please provide your social media handle facebook, twitter, instagram?</label>
                            <textarea
                              name="social_media"
                              className="form-control"
                              rows={3}
                              value={values.social_media}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.social_media && !!errors.social_media &&
                            <div className="invalid-feedback d-block">{errors.social_media}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="pb-1">How often are emails sent to your supporter list, as well as frequency of social media posts?</label>
                            <textarea
                              name="social_frequency"
                              className="form-control"
                              rows={3}
                              value={values.social_frequency}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.social_frequency && !!errors.social_frequency &&
                            <div className="invalid-feedback d-block">{errors.social_frequency}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="pb-1">Provide any details on the major local events hosted by your organization including?</label>
                            <textarea
                              name="major_event"
                              className="form-control"
                              rows={3}
                              value={values.major_event}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {!!touched.major_event && !!errors.major_event &&
                            <div className="invalid-feedback d-block">{errors.major_event}</div>}
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
