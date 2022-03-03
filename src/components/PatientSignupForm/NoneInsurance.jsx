import { Checkbox, Col, Form, Row } from "antd";
import React from "react";
import { layout } from "../../constants";

function NoneInsurance() {
  return (
    <Row>
      <Col span={24}>
        <Form.Item
          name={["insurance", "insurance_attest"]}
          valuePropName="checked"
          wrapperCol={{ ...layout.wrapperCol }}
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Should accept insurance attestation"),
            },
          ]}
        >
          <Checkbox>I assured that I don't have inscurance</Checkbox>
        </Form.Item>
      </Col>
    </Row>
  );
}

export default NoneInsurance;
