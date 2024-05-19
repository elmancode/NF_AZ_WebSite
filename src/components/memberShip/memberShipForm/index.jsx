import React, { useState } from "react";
import "./index.scss";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Upload,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const MemberShipForm = () => {
  const { TextArea } = Input;
  const [formValues, setFormValues] = useState({
    fullName: "",
    dateOfBirth: null,
    email: "",
    socialMediaURLS: [],
    phoneNumber: "",
    address: "",
    occupation: "",
    languages: [],
    tShirtSize: "",
    favoriteColor: "",
  });

  const handleLanguageChange = (language, level, checked) => {
    if (checked) {
      setFormValues({
        ...formValues,
        languages: [...formValues.languages, `${language} - ${level}`],
      });
    } else {
      const updatedLanguages = formValues.languages.filter(
        (lang) => lang !== `${language} - ${level}`
      );
      setFormValues({
        ...formValues,
        languages: updatedLanguages,
      });
    }
  };

  const tshirtSizeChange = (value) => {
    setFormValues({
      ...formValues,
      tShirtSize: value,
    });
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
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

  const handleFinish = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/memberShip");

      console.log(data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (info) => {
    if (info.file.status === "done") {
      const uploadedFileUrl = info.file.response.url;

      setFileUrl(uploadedFileUrl);
    }
  };
  console.log(formValues?.socialMediaURLS);
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
            maxWidth: 800,
          }}
        >
          {/* ad soyad */}
          <Form.Item>
            <p>
              Ad, Soyad <span>*</span>
            </p>
            <Input
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  ["fullName"]: e?.target?.value,
                });
              }}
            />
          </Form.Item>

          {/* dogum tarixi */}
          <Form.Item>
            <p>
              Doğum tarixi <span>*</span>
            </p>

            <DatePicker
              placeholder=""
              onChange={(e) => {
                console.log(e);
                setFormValues({
                  ...formValues,
                  ["dateOfBirth"]: e?.target?.value,
                });
              }}
            />
          </Form.Item>

          {/* email */}
          <Form.Item>
            <p>
              Elektron poçt ünvanı <span>*</span>
            </p>

            <Input
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  ["email"]: e?.target?.value,
                });
              }}
            />
          </Form.Item>

          {/* social media url's */}
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

                {fields.map((field, index) => (
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
                        onChange={(e) => {
                          const newSocialMediaURLS = [
                            ...formValues.socialMediaURLS,
                          ];
                          newSocialMediaURLS[index] = e.target.value;
                          setFormValues({
                            ...formValues,
                            socialMediaURLS: newSocialMediaURLS,
                          });
                        }}
                      />{" "}
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    </Form.Item>
                  </Form.Item>
                ))}
              </>
            )}
          </Form.List>

          {/* mobil nomre */}
          <Form.Item>
            <p>
              Mobil nömrə <span>*</span>
            </p>

            <Input
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  ["phoneNumber"]: e?.target?.value,
                });
              }}
            />
          </Form.Item>

          {/* ev unvani */}
          <Form.Item>
            <p>
              Ev ünvanı <span>*</span>
            </p>
            <Input
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  ["address"]: e?.target?.value,
                });
              }}
            />
          </Form.Item>

          {/* is saheniz */}
          <Form.Item>
            <p>
              İş sahəniz <span>*</span>
            </p>

            <Input
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  ["occupation"]: e?.target?.value,
                });
              }}
            />
          </Form.Item>

          {/* language */}
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
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "Azərbaycan",
                        "Elementar",
                        e.target.checked
                      )
                    }
                  />
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "English",
                        "Elementar",
                        e.target.checked
                      )
                    }
                  />
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "Deutsch",
                        "Elementar",
                        e.target.checked
                      )
                    }
                  />
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "Русский",
                        "Elementar",
                        e.target.checked
                      )
                    }
                  />
                </div>

                <div>
                  <p>Orta səviyyə</p>
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "Azərbaycan",
                        "Orta səviyyə",
                        e.target.checked
                      )
                    }
                  />
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "English",
                        "Orta səviyyə",
                        e.target.checked
                      )
                    }
                  />
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "Deutsch",
                        "Orta səviyyə",
                        e.target.checked
                      )
                    }
                  />
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "Русский",
                        "Orta səviyyə",
                        e.target.checked
                      )
                    }
                  />
                </div>

                <div>
                  <p>Profesional</p>
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "Azərbaycan",
                        "Profesional",
                        e.target.checked
                      )
                    }
                  />
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "English",
                        "Profesional",
                        e.target.checked
                      )
                    }
                  />
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "Deutsch",
                        "Profesional",
                        e.target.checked
                      )
                    }
                  />
                  <Checkbox
                    onChange={(e) =>
                      handleLanguageChange(
                        "Русский",
                        "Profesional",
                        e.target.checked
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </Form.Item>

          {/* Təbiət Dostları haqqında necə məlumat aldınız? */}
          <Form.Item>
            <p>
              Təbiət Dostları haqqında necə məlumat aldınız? <span>*</span>
            </p>
            <TextArea
              rows={2}
              // onChange={(e) => {
              //   setFormValues({
              //     ...formValues,
              //     ["occupation"]: e?.target?.value,
              //   });
              // }}
            />
          </Form.Item>

          {/* Təşkilatın üzvü olmağa maraqlı olmanızın səbəbi nədir? */}
          <Form.Item>
            <p>
              Təşkilatın üzvü olmağa maraqlı olmanızın səbəbi nədir?
              <span>*</span>
            </p>
            <TextArea rows={2} />
          </Form.Item>

          {/* Köynək ölçünüzü qeyd edin */}
          <Form.Item>
            <p>
              Köynək ölçünüzü qeyd edin <span>*</span>
            </p>
            <Select onChange={tshirtSizeChange}>
              <Select.Option value="XS">XS</Select.Option>
              <Select.Option value="S">S</Select.Option>
              <Select.Option value="M">M</Select.Option>
              <Select.Option value="L">L</Select.Option>
              <Select.Option value="XL">XL</Select.Option>
            </Select>
          </Form.Item>

          {/* Sevdiyiniz rəngi qeyd edin */}
          <Form.Item>
            <p>
              Sevdiyiniz rəngi qeyd edin <span>*</span>
            </p>
            <Input
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  ["favoriteColor"]: e?.target?.value,
                });
              }}
            />
          </Form.Item>

          {/* Təbiətdə ən çox bəyəndiyiniz heyvanın adını yazın */}
          <Form.Item>
            <p>
              Təbiətdə ən çox bəyəndiyiniz heyvanın adını yazın (səbəbini də
              qeyd edə bilərsiniz) <span>*</span>
            </p>
            <TextArea rows={2} />
          </Form.Item>

          {/* Təbiət Dostları təşkilatına töhfə verə biləcəyiniz xüsusi
              bacarıqlarınız və ya istedadınız varmı? */}
          <Form.Item>
            <p>
              Təbiət Dostları təşkilatına töhfə verə biləcəyiniz xüsusi
              bacarıqlarınız və ya istedadınız varmı? <span>*</span>
            </p>
            <TextArea rows={2} />
          </Form.Item>

          {/* Başqa bizə bildirmək istədiyiniz bir şey varmı? */}
          <Form.Item>
            <p>
              Başqa bizə bildirmək istədiyiniz bir şey varmı? <span>*</span>
            </p>
            <TextArea rows={2} />
          </Form.Item>

          {/* Təbiət Dostları haqqında yenilik və xəbərləri e-poçt vasitəsilə
              almaq istəyirsinizmi? */}
          <Form.Item>
            <p>
              Təbiət Dostları haqqında yenilik və xəbərləri e-poçt vasitəsilə
              almaq istəyirsinizmi? <span>*</span>
            </p>
            <Radio.Group>
              <Radio value="yes">Bəli</Radio>
              <Radio value="no">Xeyr</Radio>
            </Radio.Group>
          </Form.Item>

          {/* vesiqe sekilleri */}
          <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
            <p>
              Qeydiyyatı tamamlamaq üçün şəxsiyyət vəsiqənizin hər iki üzünü ya
              şəkil (məs: .png, .jpg) ya sənəd (məs: .pdf) formatında yükləyin{" "}
              <span>*</span>
            </p>
            <div className="uploadsInput">
              <Upload
                maxCount={1}
                action="http://localhost:3000/upload"
                listType="picture-card"
                name="file"
                onChange={handleFileChange}
              >
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

              <Upload
                maxCount={1}
                action="http://localhost:3000/upload"
                listType="picture-card"
                name="file"
                onChange={handleFileChange}
              >
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
            <Button type="primary" onClick={handleFinish}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default MemberShipForm;
