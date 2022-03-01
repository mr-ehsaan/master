import React from "react";

import { Button, Col, Form, PageHeader, Row, Card } from "antd";
import PersonalForm from "./PersonalFrom";
import InsuranceForm from "./Insuranceform";
import {
  initialState,
  validateMessages,
  layout,
  leftRightCol,
  layoutformat,
  column,
} from "../../constants";

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
        <Col {...leftRightCol} />
        <Col {...column}>
          <PageHeader title="SignUp Form" />
        </Col>
        <Col {...leftRightCol} />
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
              layout={layout}
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
