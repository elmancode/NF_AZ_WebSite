import React, { useState } from "react";
import "./index.scss";
import { Form, Input, Spin } from "antd";
import { BASE_URL } from "../../../constants";
import axios from "axios";

const SponsorMemberShipForm = () => {
  const [validationError, setValidationError] = useState(null);

  const [loading, setLoading] = useState(false);

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
      const memberShipData = {
        fullName: fullName,
        phoneNumber: +phoneNumber,
        email: email,
      };

      const validationError = SponsorMemberShipForm(memberShipData);
      if (validationError) {
        console.error(validationError);
        setValidationError(validationError);
        return;
      }
      setLoading(true);
      const { data } = await axios.post(
        `${BASE_URL}memberShip/sponsor`,
        memberShipData
      );

      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("error:", error);
      setLoading(false);
    }
  };
  return (
    <div id="sponsorMemberShipForm">
      <div className="container">
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
          <p>
            Dəyərli dost! Bu səhifədəsinizsə demək ki, Təbiət Dostlarına sponsor
            (fiziki və ya hüquqi şəxs) olaraq dəstək olmaq istəyirsiniz.
            Düşünürük ki, artıq təşkilatın məqsəd, vəzifələri və fəaliyyətləri
            ilə tanışsınız. Bu səbəbdən aşağıdaki formu doldurmanız rica olunur.
            Qeydiyyat formu doldurdaq sonra, ödəniş üçün Təbiət Dostlarının
            əməkdaşları sizinlə əlaqə saxlayacaqlar.
          </p>

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

            {validationError?.index === 2 ? (
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

            {validationError?.index === 3 ? (
              <p className="errorText">{validationError?.error}</p>
            ) : null}
          </Form.Item>

          {/* şəhər ölkə */}
          <Form.Item>
            <p>
              Şəhər, Ölkə <span>*</span>
            </p>
            <Input onChange={(e) => setCountry(e?.target.value)} />

            {validationError?.index === 0 ? (
              <p className="errorText">{validationError?.error}</p>
            ) : null}
          </Form.Item>

          {/* hüquqi şəxs */}
          <Form.Item>
            <p>
              Hüquqi şəxs <span>*</span>
            </p>
            <Input onChange={(e) => setCountry(e?.target.value)} />

            {validationError?.index === 0 ? (
              <p className="errorText">{validationError?.error}</p>
            ) : null}
          </Form.Item>

          <Form.Item>
            <button className="success" onClick={handleFinish}>
              {loading ? <Spin /> : "Təqdim edin"}
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SponsorMemberShipForm;
