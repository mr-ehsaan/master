import React, { useState, useEffect } from "react";
import { Form, Select } from "antd";
import PersonalForm from "../components/PersonalFrom";
const SignupForm = () => {
  const [insurance, setInsurance] = useState("no");

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }} defaultValue="92">
        <Option value="92">+92</Option>
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      {" "}
      <PersonalForm
        insurance={insurance}
        setInsurance={setInsurance}
        normFile={normFile}
        prefixSelector={prefixSelector}
        layout={layout}
      />
    </Form>
  );
};

export default SignupForm;
