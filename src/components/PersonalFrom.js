import React from "react";
import { Form, Input, Button, Select, DatePicker, Upload, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const PersonalForm = ({ prefixSelector, normFile }) => {
  const { Option } = Select;

  return (
    <>
      <Form.Item
        name={["personal info", "phone"]}
        label="Phone Number"
        rules={[{ required: true }]}
      >
        <Input
          addonBefore={prefixSelector}
          placeholder="3011234567"
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        name={["personal info", "email"]}
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
      <Form.Item
        name={["personal info", "firstname"]}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Ehsan" />
      </Form.Item>
      <Form.Item
        name={["personal info", "lastname"]}
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
      <Form.Item
        name={["personal info", "dob"]}
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
      <Form.Item
        name={["personal info", "gender"]}
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
      <Form.Item
        name={["personal info", "address"]}
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
      <Form.Item
        name={["personal info", "city"]}
        label="City"
        rules={[{ type: "string", required: true }]}
      >
        <Input placeholder="Lahore" />
      </Form.Item>
      <Form.Item
        name={["personal info", "state"]}
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
      <Form.Item
        name={["personal info", "zipcode"]}
        label="Zip code"
        rules={[
          {
            type: "number",
            required: true,
          },
        ]}
      >
        <Input placeholder="54000" />
      </Form.Item>
      <Form.Item
        name={["personal info", "snapshot"]}
        label="ID Snapshot"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra=".jpeg .png .jpg"
      >
        <Upload
          name="logo"
          action={"https://www.mocky.io/v2/5cc8019d300000980a055e76"}
          listType="picture"
          accept=".jpg,.png,.jpeg"
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </>
  );
};

export default PersonalForm;
