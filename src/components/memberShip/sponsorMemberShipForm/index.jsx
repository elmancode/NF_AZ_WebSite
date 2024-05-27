import React, { useState } from "react";
import "./index.scss";
import { Form, Input, Spin, Result } from "antd";
import { BASE_URL } from "../../../constants";
import axios from "axios";
import { sponsorMemberShipFormValidation } from "../../../validation/sponsorMemberFormValidation";

const SponsorMemberShipForm = () => {
  const [validationError, setValidationError] = useState(null);

  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [city, setCity] = useState(null);
  const [juridicalPerson, setJuridicalPerson] = useState(null);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

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
      const sponsorMemberShipData = {
        fullName: fullName,
        email: email,
        phoneNumber: +phoneNumber,
        city: city,
        juridicalPerson: juridicalPerson,
      };

      const validationError = sponsorMemberShipFormValidation(
        sponsorMemberShipData
      );
      if (validationError) {
        console.error(validationError);
        setValidationError(validationError);
        return;
      }
      setLoading(true);
      const { data } = await axios.post(
        `${BASE_URL}sponsorMemberShip`,
        sponsorMemberShipData
      );

      if (
        data?.message === "sponsor membership has been created successfully"
      ) {
        setResult(true);
      }
      setLoading(false);
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

            {/* email */}
            <Form.Item>
              <p>
                Elektron poçt ünvanı <span>*</span>
              </p>

              <Input onChange={(e) => setEmail(e.target.value)} />

              {validationError?.index === 1 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* mobil nomre */}
            <Form.Item>
              <p>
                Mobil nömrə <span>*</span>
              </p>

              <Input
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number"
              />

              {validationError?.index === 2 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* şəhər ölkə */}
            <Form.Item>
              <p>
                Şəhər, Ölkə <span>*</span>
              </p>
              <Input onChange={(e) => setCity(e?.target.value)} />

              {validationError?.index === 3 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
            </Form.Item>

            {/* hüquqi şəxs */}
            <Form.Item>
              <p>
                Hüquqi şəxs <span>*</span>
              </p>
              <Input onChange={(e) => setJuridicalPerson(e?.target.value)} />

              {validationError?.index === 4 ? (
                <p className="errorText">{validationError?.error}</p>
              ) : null}
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

export default SponsorMemberShipForm;
