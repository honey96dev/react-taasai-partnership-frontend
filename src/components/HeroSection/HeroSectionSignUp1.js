import React, {useState} from "react";
import {connect} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";

import {RESULT} from "core/globals";
import toast from "components/MyToast/MyToast";
import Service from "services/causes/AuthService";
import {Link} from "react-router-dom";
import routes from "core/routes";

const HeroSection = () => {
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
    </React.Fragment>
  );

  return payload();
};

export default connect(state => ({
  state,
}))(HeroSection);
