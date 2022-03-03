import React from "react";

import { Button, Col, Form, PageHeader, Row, Card } from "antd";
import PersonalForm from "./PersonalFrom.jsx";
import InsuranceForm from "./Insuranceform.jsx";
import {
  initialState,
  validateMessages,
  layout,
  layoutformat,
  formCol,
} from "../../constants";
import FamilyForm from "./FamilyForm.jsx";

function MainForm({
  insurance,
  form,
  insuranceChange,
  onFinish,
  uploadRequest,
  normFile,
  onResetInsurance,
}) {
  return (
    <Card>
      <Row justify="center">
        <Col />
        <Col>
          <PageHeader title="SignUp Form" />
        </Col>
        <Col />
      </Row>

      <Row justify="center">
        <Col {...layoutformat}>
          <Form
            {...layout}
            name="signupForm"
            onFinish={onFinish}
            validateMessages={validateMessages}
            form={form}
            initialValues={initialState}
          >
            <PersonalForm
              uploadRequest={uploadRequest}
              normFile={normFile}
              formCol={formCol}
            />
            <InsuranceForm
              insurance={insurance}
              insuranceChange={insuranceChange}
              layout={layout}
              onResetInsurance={onResetInsurance}
              uploadRequest={uploadRequest}
              normFile={normFile}
              formCol={formCol}
            />
            <FamilyForm
              uploadRequest={uploadRequest}
              normFile={normFile}
              formCol={formCol}
              form={form}
            />
            <Row justify="center">
              <Col {...formCol}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default MainForm;
