import React from "react";
import { Form, Button, Radio, Card, Col } from "antd";
import Insurance from "./Insurance.jsx";
import NoneInsurance from "./NoneInsurance.jsx";

const InsuranceForm = ({
  insurance,
  layout,
  onResetInsurance,
  uploadRequest,
  normFile,
  insuranceChange,
  column,
}) => {
  return (
    <Card title="Insurance Information">
      <Col {...column}>
        <Form.Item name={["insurance", "haveInsurance"]} label="Insurance">
          <Radio.Group onChange={insuranceChange}>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>

      {insurance === "yes" ? (
        <Insurance
          uploadRequest={uploadRequest}
          normFile={normFile}
          column={column}
        />
      ) : (
        <NoneInsurance column={column} />
      )}

      <Col {...column}>
        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
          <Button type="warning" htmlType="button" onClick={onResetInsurance}>
            Reset Insurance
          </Button>
        </Form.Item>
      </Col>
    </Card>
  );
};

export default InsuranceForm;
