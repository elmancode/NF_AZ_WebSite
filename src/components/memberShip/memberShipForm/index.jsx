import React, { useState } from "react";
import "./index.scss";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Result,
  Select,
  Spin,
  Upload,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { memberShipFormValidation } from "../../../validation/memberShipFormValidation";

const MemberShipForm = () => {
  const { TextArea } = Input;

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [socialMediaURLS, setSocialMediaURLS] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [occupation, setOccupation] = useState("");
  const [language, setLanguage] = useState([]);
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [tshirtSize, setTshirtSize] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [state5, setState5] = useState("");
  const [frontOfLicence, setFrontOfLicence] = useState(null);
  const [backOfLicence, setBackOfLicence] = useState(null);
  const [emailSubscribtion, setEmailSubscribtion] = useState(null);
  const [memberType, setMemberType] = useState(null);

  const [validationError, setValidationError] = useState(null);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(false);

  const handleLanguageChange = (selectedLanguage, level, checked) => {
    if (checked) {
      setLanguage([...language, `${selectedLanguage} - ${level}`]);
    } else {
      const updatedLanguages = language.filter(
        (lang) => lang !== `${selectedLanguage} - ${level}`
      );
      setLanguage(updatedLanguages);
    }
  };

  const tshirtSizeChange = (value) => {
    setTshirtSize(value);
  };

  const memberTypeChange = (value) => {
    setMemberType(value);
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

  const handleFileChange = (info, type) => {
    if (info.file.status === "done") {
      const uploadedFileUrl = info.file.response.fileURL;

      if (type === "front") {
        setFrontOfLicence(uploadedFileUrl);
      } else {
        setBackOfLicence(uploadedFileUrl);
      }
    }
  };

  const handleFinish = async () => {
    try {
      const memberShipData = {
        fullName: fullName,
        address: address,
        dateOfBirth: birthday,
        phoneNumber: +phoneNumber,
        occupation: occupation,
        languages: language,
        email: email,
        socialNetworkAccounts: socialMediaURLS,
        state1: state1,
        state2: state2,
        state3: state3,
        state4: state4,
        state5: state5,
        tShirtSize: tshirtSize,
        memberType: memberType,
        favoriteColor: favoriteColor,
        backOfLicence: backOfLicence,
        frontOfLicence: frontOfLicence,
        emailSubscription: emailSubscribtion,
      };

      const validationError = memberShipFormValidation(memberShipData);
      if (validationError) {
        console.error(validationError);
        setValidationError(validationError);
        return;
      }
      setLoading(true);
      const { data } = await axios.post(
        `${BASE_URL}memberShip`,
        memberShipData
      );

      console.log(data);
      setLoading(false);
      setResult(true);
    } catch (error) {
      console.error("error:", error);
      setLoading(false);
    }
  };

  return (
    <div id="memberShipForm">
      <div className="content">
        {result ? (
          <Result
            status="success"
            title="Qeydiyyatınız Uğurla Tamamlandı!"
            subTitle="Dəyərli Təbiət Dostu, qısa zamanda sizə geri dönüş edəcəyik"
          />
        ) : (
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
              <Input onChange={(e) => setFullName(e?.target.value)} />

              {validationError?.index === 0 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* dogum tarixi */}
            <Form.Item>
              <p>
                Doğum tarixi <span>*</span>
              </p>

              <DatePicker
                placeholder="2024-05-19"
                onChange={(date, dateString) => setBirthday(dateString)}
              />

              {validationError?.index === 1 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* email */}
            <Form.Item>
              <p>
                Elektron poçt ünvanı <span>*</span>
              </p>

              <Input onChange={(e) => setEmail(e.target.value)} />

              {validationError?.index === 2 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
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
                          className="socialMediaInput"
                          placeholder="Sosial media hesabının linki"
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setSocialMediaURLS((prevSocialMediaURLS) => {
                              const updatedSocialMediaURLS = [
                                ...prevSocialMediaURLS,
                              ];
                              updatedSocialMediaURLS[index] = newValue;
                              return updatedSocialMediaURLS;
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
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number"
              />

              {validationError?.index === 3 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* ev unvani */}
            <Form.Item>
              <p>
                Ünvan <span>*</span> <br />
                <small>
                  <em>
                    (Təşkilat tərəfindən çatdırılma üçün istifadə ediləcək)
                  </em>
                </small>
              </p>
              <Input onChange={(e) => setAddress(e.target.value)} />

              {validationError?.index === 4 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* is saheniz */}
            <Form.Item>
              <p>
                İş sahəniz <span>*</span>
              </p>

              <Input onChange={(e) => setOccupation(e.target.value)} />

              {validationError?.index === 5 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* language */}
            <Form.Item>
              <p>
                Bildiyiniz dillər <span>*</span>
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
                    <p>Zəif</p>
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
                    <p>Yaxşı</p>
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
                    <p>Əla</p>
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
            {/* How get info? */}
            <Form.Item>
              <p>
                Təbiət Dostları haqqında necə məlumat aldınız? <span>*</span>
              </p>
              <TextArea rows={2} onChange={(e) => setState1(e.target.value)} />
            </Form.Item>

            {/* Təşkilatın üzvü olmağa maraqlı olmanızın səbəbi nədir? */}
            {/* reason */}
            <Form.Item>
              <p>
                Təşkilatın üzvü olmağa maraqlı olmanızın səbəbi nədir?{" "}
                <span>*</span>
              </p>
              <TextArea rows={2} onChange={(e) => setState2(e.target.value)} />
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

              {validationError?.index === 6 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* Sevdiyiniz rəngi qeyd edin */}
            <Form.Item>
              <p>
                Sevdiyiniz rəngi qeyd edin <span>*</span>
              </p>
              <Input onChange={(e) => setFavoriteColor(e.target.value)} />

              {validationError?.index === 7 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* Təbiətdə ən çox bəyəndiyiniz heyvanın adını yazın */}
            {/* animal name */}
            <Form.Item>
              <p>
                Təbiətdə ən çox bəyəndiyiniz heyvanın adını yazın (səbəbini də
                qeyd edə bilərsiniz) <span>*</span>
              </p>
              <TextArea rows={2} onChange={(e) => setState3(e.target.value)} />
            </Form.Item>

            {/* Təbiət Dostları təşkilatına töhfə verə biləcəyiniz xüsusi
              bacarıqlarınız və ya istedadınız varmı? */}
            {/* skills */}
            <Form.Item>
              <p>
                Təbiət Dostları təşkilatına töhfə verə biləcəyiniz xüsusi
                bacarıqlarınız və ya istedadınız varmı? <span>*</span>
              </p>
              <TextArea rows={2} onChange={(e) => setState4(e.target.value)} />
            </Form.Item>

            {/* Başqa bizə bildirmək istədiyiniz bir şey varmı? */}
            {/* other info */}
            <Form.Item>
              <p>
                Başqa bizə bildirmək istədiyiniz bir şey varmı? <span>*</span>
              </p>
              <TextArea rows={2} onChange={(e) => setState5(e.target.value)} />
            </Form.Item>

            {/* Təbiət Dostları haqqında yenilik və xəbərləri e-poçt vasitəsilə
              almaq istəyirsinizmi? */}
            <Form.Item>
              <p>
                Təbiət Dostları haqqında yenilik və xəbərləri e-poçt vasitəsilə
                almaq istəyirsinizmi? <span>*</span>
              </p>
              <Radio.Group
                onChange={(e) => setEmailSubscribtion(e?.target.value)}
              >
                <Radio value="yes">Bəli</Radio>
                <Radio value="no">Xeyr</Radio>
              </Radio.Group>

              {validationError?.index === 10 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* membertype */}
            <Form.Item>
              <p>
                Üzvlük növünü seçin <span>*</span>
              </p>
              <Select onChange={memberTypeChange}>
                <Select.Option value="Fərdi üzv">Fərdi üzv</Select.Option>
                <Select.Option value="Ailəvi üzv">Ailəvi üzv</Select.Option>
                <Select.Option value="Partnyor üzv">Partnyor üzv</Select.Option>
              </Select>

              {validationError?.index === 11 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* vesiqe sekilleri */}
            <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
              <p>
                Qeydiyyatı tamamlamaq üçün şəxsiyyət vəsiqənizin hər iki üzünü
                ya şəkil (məs: .png, .jpg) ya sənəd (məs: .pdf) formatında
                yükləyin <span>*</span>
              </p>

              <div className="uploadsInput">
                <div>
                  <Upload
                    maxCount={1}
                    action={`https://nfazcloudrailway.up.railway.app/upload`}
                    listType="picture-card"
                    name="file"
                    onChange={(info) => {
                      handleFileChange(info, "back");
                    }}
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
                  {validationError?.index === 8 ? (
                    <p className="errorText">{validationError?.error}</p>
                  ) : null}
                </div>

                <div>
                  <Upload
                    maxCount={1}
                    action={`https://nfazcloudrailway.up.railway.app/upload`}
                    listType="picture-card"
                    name="file"
                    onChange={(info) => {
                      handleFileChange(info, "front");
                    }}
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
                  {validationError?.index === 9 ? (
                    <p className="errorText">{validationError?.error}</p>
                  ) : null}
                </div>

  
              </div>

            </Form.Item>

            <Form.Item>
            <div>
                  <p>
                    Üzvlük haqqı <b> 5411 2498 1243 7882</b> nömrəli karta transfer
                    edildi <span>*</span> 
                    <Checkbox style={{margin: "10px", }}>

                    </Checkbox>
                  </p>
                </div>
            </Form.Item>

            <Form.Item>
              <button className="success" onClick={handleFinish}>
                {loading ? <Spin /> : "Təqdim edin"}
              </button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
};

export default MemberShipForm;
