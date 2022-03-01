import React, { useState, useEffect } from "react";
import { Form } from "antd";
import MainForm from "../components/SignupForm/Form";
import { v4 as uuidv4 } from "uuid";
import { initialState } from "../constants";
const SignupForm = () => {
  const [form] = Form.useForm();
  const [insurance, setInsurance] = useState("no");

  const insuranceChange = (event) => {
    form.setFieldsValue({
      insurance: {
        haveInsurance: event.target.value,
      },
    });
    setInsurance(event.target.value);
  };
  useEffect(() => {
    form.setFieldsValue({
      personal: {
        id: uuidv4(),
      },
    });
  }, []);

  const onFinish = (values) => {
    console.log(values);
  };
  const uploadRequest = ({ file, success }) => {
    form.getFieldsValue();
    setTimeout(() => {
      success("ok");
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
      insurance: {
        insurance_front: initialState.insurance.insurance_front,
        insurance_back: initialState.insurance.insurance_back,
        insurance_company: initialState.insurance.insurance_company,
        insurance_number: initialState.insurance.insurance_number,
        insurance_attest: initialState.insurance.insurance_attest,
        haveInsurance: initialState.insurance.haveInsurance,
      },
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
