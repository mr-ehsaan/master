import React from "react";
import { v4 as uid } from "uuid";
import { Form, Input, Button, Select, Card, Row, Col, DatePicker } from "antd";
import { buttonCol, buttonLeftRight } from "../../constants";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Insurance from "./Insurance.jsx";
import NoneInsurance from "./NoneInsurance.jsx";

const FamilyForm = ({ uploadRequest, normFile, column, form }) => {
  const { Option } = Select;

  return (
    <Card title="Family Information">
      <Form.List name={"family"}>
        {(fields, { add, remove }) => {
          const customAdd = () => {
            add();
          };
          return (
            <>
              {fields.map((field, index) => {
                return (
                  <div key={field.key}>
                    <Row>
                      <Col {...column}>
                        <Form.Item
                          initialValue={uid()}
                          name={[index, "uid"]}
                          label="ID"
                          rules={[{ required: true, type: "string" }]}
                        >
                          <Input disabled />
                        </Form.Item>
                      </Col>
                      <Col {...column}>
                        <Form.Item
                          name={[field.name, "firstname"]}
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
                      <Col {...column}>
                        <Form.Item
                          name={[field.name, "lastname"]}
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
                      <Col {...column}>
                        <Form.Item
                          name={[field.name, "dob"]}
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
                      <Col {...column}>
                        <Form.Item
                          name={[field.name, "insurance_status"]}
                          label="Insurance Status"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            placeholder="Select one"
                            allowClear
                            onChange={(e) => {
                              form.setFieldsValue({
                                family: form
                                  .getFieldValue()
                                  .family.map((fam, i) => {
                                    if (i === index) {
                                      fam.insurance_status = e;
                                    }
                                    return fam;
                                  }),
                              });
                            }}
                          >
                            <Option
                              value="same"
                              disabled={
                                form.getFieldValue().insurance.haveInsurance ===
                                "no"
                              }
                            >
                              same
                            </Option>
                            <Option value="other">other</Option>
                            <Option value="none">none</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    {form.getFieldValue().family[field.name] ? (
                      form.getFieldValue().family[field.name]
                        .insurance_status === "other" ? (
                        <Insurance
                          uploadRequest={uploadRequest}
                          normFile={normFile}
                          column={column}
                        />
                      ) : form.getFieldValue().family[field.name]
                          .insurance_status === "none" ? (
                        <NoneInsurance column={column} />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    <Row justify="center" className="removeMember">
                      <Col {...buttonLeftRight} />
                      <Col {...buttonCol}>
                        <Button
                          onClick={() => remove(field.name)}
                          block
                          icon={<MinusCircleOutlined />}
                          danger
                        >
                          Remove Family Member
                        </Button>
                      </Col>
                      <Col {...buttonLeftRight} />
                    </Row>
                  </div>
                );
              })}

              <br />
              <Row justify="center">
                <Col {...buttonLeftRight} />
                <Col {...buttonCol}>
                  <Button
                    type="dashed"
                    onClick={customAdd}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Family Member
                  </Button>
                </Col>
                <Col {...buttonLeftRight} />
              </Row>
            </>
          );
        }}
      </Form.List>
    </Card>
  );
};

export default FamilyForm;
