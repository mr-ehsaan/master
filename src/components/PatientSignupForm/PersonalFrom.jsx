import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Upload,
  Card,
  Row,
  Col,
} from "antd";

import { v4 as uid } from "uuid";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;
const PersonalForm = ({ uploadRequest, normFile, formCol }) => {
  return (
    <Card title="Personal Information">
      <Row>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "id"]}
            label="Patient ID"
            initialValue={uid()}
            rules={[{ required: true, type: "string" }]}
          >
            <Input disabled />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "phone"]}
            label="Phone Number"
            rules={[{ required: true, type: "string" }]}
          >
            <Input placeholder="923011234567" />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input placeholder="email@gmail.com" />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "firstname"]}
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Ehsan" />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "lastname"]}
            label="Last Name"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <Input placeholder="Tariq" />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "dob"]}
            label="DOB "
            rules={[
              {
                type: "date",
                required: true,
              },
            ]}
          >
            <DatePicker placeholder="2022-02-08" />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "gender"]}
            label="Gender"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="male" allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "address"]}
            label="Address"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <Input placeholder="House No. 11 street 2 block F Lahore Cantt" />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "city"]}
            label="City"
            rules={[{ type: "string", required: true }]}
          >
            <Input placeholder="Lahore" />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "state"]}
            label="State"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <Input placeholder="Punjab" />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "zipcode"]}
            label="Zip code"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="54000" />
          </Form.Item>
        </Col>
        <Col {...formCol}>
          <Form.Item
            name={["personal", "snapshot"]}
            label="ID Snapshot"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true }]}
            extra=".jpeg .png .jpg"
          >
            <Upload
              name="snapshot_ID"
              maxCount={1}
              accept=".jpg,.png,.jpeg"
              customRequest={uploadRequest}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default PersonalForm;
