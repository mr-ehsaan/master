import React from "react";
import { Button, Col, Form, Input, Row, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { companies } from "../../constants";

function Insurance({ normFile, uploadRequest, column }) {
  return (
    <Row>
      <Col {...column}>
        <Form.Item
          name={["insurance", "insurance_front"]}
          label="Insurance Doc(front)"
          rules={[{ required: true }]}
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra=".jpeg .png .jpg"
          layout="vertical"
        >
          <Upload
            name="insurance_front_image"
            accept=".jpg,.png,.jpeg"
            customRequest={uploadRequest}
            maxCoun={1}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
      </Col>
      <Col {...column}>
        <Form.Item
          name={["insurance", "insurance_back"]}
          label="Insurance Doc(back)"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true }]}
          extra=".jpeg .png .jpg"
        >
          <Upload
            name="insurance_back_image"
            maxCount={1}
            accept=".jpg,.png,.jpeg"
            customRequest={uploadRequest}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
      </Col>
      <Col {...column}>
        <Form.Item
          name={["insurance", "insurance_company"]}
          label="Insurance Company"
          rules={[
            {
              type: "string",
              required: true,
            },
          ]}
        >
          <Select placeholder="PAK-QATAR FAMILY TAKAFUL" allowClear>
            {companies.map((company) => (
              <Select.Option key={company} value={company}>
                {company}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col {...column}>
        <Form.Item
          name={["insurance", "insurance_number"]}
          label="Insurance No."
          rules={[
            {
              type: "string",
              required: true,
            },
          ]}
        >
          <Input placeholder="123-4567-8910" />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default Insurance;
