import React, { useState } from "react";
import { Button, Col, Form, Row, Select } from "antd";
import PersonalForm from "../components/PersonalFrom";
import InsuranceForm from "../components/Insuranceform";
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
  const companies = [
    "SPI Insurance Company",
    "FORI Insurance Company",
    "Small Insurance Company",
    "Asia Insurance Company Limited",
    "United Insurance Company Limited",
    "Adamjee Insurance Company Limited",
    "IGI General Insurance Company Limited",
    "State life Insurance Company of Pakistan",
    "The Pakistan General Insurance Company",
    "Alflah Insurance Company ",
  ];

  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ width: "0 auto" }}
    >
      <Col xs={22} sm={18}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          {" "}
          <PersonalForm
            normFile={normFile}
            prefixSelector={prefixSelector}
            layout={layout}
          />
          <InsuranceForm
            companies={companies}
            insurance={insurance}
            setInsurance={setInsurance}
          />
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignupForm;
