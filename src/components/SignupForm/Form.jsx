import React from "react";

import { Button, Col, Form, PageHeader, Row, Card } from "antd";
import PersonalForm from "./PersonalFrom.jsx";
import InsuranceForm from "./Insuranceform.jsx";
import {
  initialState,
  validateMessages,
  layout,
  leftRightCol,
  layoutformat,
  column,
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

      <Row justify="space-around">
        <Col {...leftRightCol} />
        <Col {...layoutformat}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            form={form}
            initialValues={initialState}
          >
            <PersonalForm
              uploadRequest={uploadRequest}
              normFile={normFile}
              column={column}
            />
            <InsuranceForm
              insurance={insurance}
              insuranceChange={insuranceChange}
              layout={layout}
              onResetInsurance={onResetInsurance}
              uploadRequest={uploadRequest}
              normFile={normFile}
              column={column}
            />
            <FamilyForm
              uploadRequest={uploadRequest}
              normFile={normFile}
              column={column}
              form={form}
            />
            <Row justify="center">
              <Col {...leftRightCol} />
              <Col {...column}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Col>
              <Col {...leftRightCol} />
            </Row>
          </Form>
        </Col>
        <Col {...leftRightCol} />
      </Row>
    </Card>
  );
}

export default MainForm;
