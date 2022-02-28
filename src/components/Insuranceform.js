import React from "react";
import { Form, Input, Button, Select, Upload, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const InsuranceForm = ({ companies, setInsurance, insurance, normFile }) => {
  const { Option } = Select;

  return (
    <>
      <Form.Item name={["personal info", "insurance"]} label="Insurance">
        <Radio.Group
          defaultValue={insurance}
          onChange={(event) => setInsurance(event.target.value)}
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </Form.Item>
      {insurance === "yes" ? (
        <>
          <Form.Item
            name={["insurance info", "insurance-front"]}
            label="Insurance Document (front)"
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
          <Form.Item
            name={["insurance info", "insurance-back"]}
            label="Insurance Document (back)"
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
          <Form.Item
            name={["insurance info", "insurance-company"]}
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
                <Option key={company} value={company}>
                  {company}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name={["insurance info", "insurance-number"]}
            label="Insurance Number"
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
          >
            <Input placeholder="123-4567-8910" />
          </Form.Item>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default InsuranceForm;
