import React, { useState, useEffect } from "react";
import { Form } from "antd";

import { v4 as uid } from "uuid";
import MainForm from "../components/PatientSignupForm/index.jsx";
import { initialState } from "../constants";
const SignupForm = () => {
  const [form] = Form.useForm();
  const [insurance, setInsurance] = useState("no");

  useEffect(() => {
    form.setFieldsValue({
      personal: {
        id: uid(),
      },
    });
  }, []);
  const insuranceChange = (event) => {
    setInsurance(event.target.value);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const uploadRequest = ({ file, onSuccess }) => {
    form.getFieldsValue();
    setTimeout(() => {
      onSuccess("ok");
    }, 100);
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onResetInsurance = () => {
    form.setFieldsValue({
      insurance: initialState.insurance,
      family: [],
    });
    setInsurance("no");
  };

  return (
    <MainForm
      insurance={insurance}
      form={form}
      insuranceChange={insuranceChange}
      onFinish={onFinish}
      uploadRequest={uploadRequest}
      normFile={normFile}
      onResetInsurance={onResetInsurance}
    />
  );
};

export default SignupForm;
