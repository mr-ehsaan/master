import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
  Radio,
  Checkbox,
  Card,
  Row,
  Col,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { companies } from "../../constants/";

const InsuranceForm = ({
  insurance,
  layout,
  onResetInsurance,
  uploadRequest,
  normFile,
  insuranceChange,
  column,
}) => {
  const { Option } = Select;

  return (
    <Card title="Insurance Information">
      <Col {...column}>
        <Form.Item
          name={["insurance", "haveInsurance"]}
          label="Do you Have Insurance"
        >
          <Radio.Group onChange={insuranceChange}>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Radio.Group>
        </Form.Item>
      </Col>

      {insurance === "yes" ? (
        <Row>
          <Col {...column}>
            <Form.Item
              name={["insurance", "insurance_front"]}
              label="Insurance Doc(front)"
              rules={[{ required: true }]}
              getValueFromEvent={normFile}
              extra=".jpeg .png .jpg"
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
                  <Option key={company} value={company}>
                    {company}
                  </Option>
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
      ) : (
        <Col {...column}>
          <Form.Item
            name={["insurance", "insurance_attest"]}
            valuePropName="checked"
            wrapperCol={{ ...layout.wrapperCol }}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("Should accept insurance attestation")
                      ),
              },
            ]}
          >
            <Checkbox>I assured that I don't have inscurance</Checkbox>
          </Form.Item>
        </Col>
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
