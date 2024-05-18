import React from "react";
import "./index.scss";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Card,
  Space,
  Typography,
} from "antd";
import {
  PlusOutlined,
  CloseOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const MemberShipForm = () => {
  const { TextArea } = Input;

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 20,
      },
    },
  };

  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 20,
        offset: 4,
      },
    },
  };

  return (
    <div id="memberShipForm">
      <div className="content">
        <Form
          labelCol={{
            span: 0,
          }}
          wrapperCol={{
            span: 0,
          }}
          {...formItemLayoutWithOutLabel}
          style={{
            maxWidth: 1000,
          }}
        >
          <Form.Item>
            <p>
              Ad, Soyad <span>*</span>
            </p>
            <Input placeholder="Ad, Soyad" />

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Doğum tarixi <span>*</span>
            </p>

            <DatePicker placeholder="2002-05-20" />

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Elektron poçt ünvanı <span>*</span>
            </p>

            <Input />

            <hr />
          </Form.Item>

          <Form.List
            name="SocialMediaURLS"
            rules={[
              {
                validator: async (_, SocialMediaURLS) => {
                  if (!SocialMediaURLS || SocialMediaURLS.length < 2) {
                    return Promise.reject(
                      new Error("6-dan çox hesab əlavə etməyin")
                    );
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }) => (
              <>
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: "100%",
                    }}
                    icon={<PlusOutlined />}
                  >
                    Sosial şəbəkə hesabları (əgər varsa)
                  </Button>
                </Form.Item>

                {fields.map((field) => (
                  <Form.Item
                    {...formItemLayoutWithOutLabel}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item {...field}>
                      <Input
                        placeholder="Sosial media hesabının linki"
                        style={{
                          width: "97%",
                        }}
                      />{" "}
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    </Form.Item>
                    <hr />
                  </Form.Item>
                ))}
              </>
            )}
          </Form.List>

          <Form.Item>
            <p>
              Mobil nömrə <span>*</span>
            </p>

            <Input />

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Ev ünvanı <span>*</span>
            </p>
            <Input />
            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              İş sahəniz <span>*</span>
            </p>

            <Input />

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Bildiyiniz dillər
              <span>*</span>
            </p>

            <div className="language">
              <div className="languages">
                <p>Azərbaycan</p>
                <p>English</p>
                <p>Deutsch</p>
                <p>Русский</p>
              </div>

              <div className="header">
                <div>
                  <p>Elementar</p>
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </div>

                <div>
                  <p>Orta səviyyə</p>
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </div>

                <div>
                  <p>Profesional</p>
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                  <Checkbox />
                </div>
              </div>
            </div>

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Təbiət Dostları haqqında necə məlumat aldınız? <span>*</span>
            </p>
            <TextArea rows={2} />
            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Təşkilatın üzvü olmağa maraqlı olmanızın səbəbi nədir?
              <span>*</span>
            </p>
            <TextArea rows={2} />

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Köynək ölçünüzü qeyd edin <span>*</span>
            </p>
            <Select>
              <Select.Option value="XS">XS</Select.Option>
              <Select.Option value="S">S</Select.Option>
              <Select.Option value="M">M</Select.Option>
              <Select.Option value="L">L</Select.Option>
              <Select.Option value="XL">XL</Select.Option>
            </Select>

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Sevdiyiniz rəngi qeyd edin <span>*</span>
            </p>
            <Input />

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Təbiətdə ən çox bəyəndiyiniz heyvanın adını yazın (səbəbini də
              qeyd edə bilərsiniz) <span>*</span>
            </p>
            <TextArea rows={2} />

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Təbiət Dostları təşkilatına töhfə verə biləcəyiniz xüsusi
              bacarıqlarınız və ya istedadınız varmı? <span>*</span>
            </p>
            <TextArea rows={2} />

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Başqa bizə bildirmək istədiyiniz bir şey varmı? <span>*</span>
            </p>
            <TextArea rows={2} />

            <hr />
          </Form.Item>

          <Form.Item>
            <p>
              Təbiət Dostları haqqında yenilik və xəbərləri e-poçt vasitəsilə
              almaq istəyirsinizmi? <span>*</span>
            </p>
            <Radio.Group>
              <Radio value="yes">Bəli</Radio>
              <Radio value="no">Xeyr</Radio>
            </Radio.Group>

            <hr />
          </Form.Item>

          <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
            <p>
              Qeydiyyatı tamamlamaq üçün şəxsiyyət vəsiqənizin hər iki üzünü ya
              şəkil (məs: .png, .jpg) ya sənəd (məs: .pdf) formatında yükləyin{" "}
              <span>*</span>
            </p>

            <div className="uploadsInput">
              <Upload action="/upload.do" listType="picture-card">
                <button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    arxa üzü
                  </div>
                </button>
              </Upload>

              <Upload action="/upload.do" listType="picture-card">
                <button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    ön üzü
                  </div>
                </button>
              </Upload>
            </div>
          </Form.Item>

          <Form.Item>
            <div className="buttons">
              <button>Geri</button>
              <button className="success">Təqdim edin</button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default MemberShipForm;
