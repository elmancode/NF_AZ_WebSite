import React, { useState } from "react";
import "./index.scss";
import MemberShipAboutPage from "../../components/memberShip/memberShipAboutText";
import MemberShipForm from "../../components/memberShip/memberShipForm";

const MemberShipPage = () => {
  const [reading, setReading] = useState(false);

  const handleReading = () => {
    setReading(!reading);
    window.scrollTo({ top: 100, left: 100, behavior: "smooth" });
  };

  return (
    <div id="memberShip">
      <div className="container">
        <div className="headText">
          <h1>Təbiət Dostları - Üzvlük qeydiyyat forması</h1>

          <h4>
            Ətraflı məlumat üçün suallarınızı{" "}
            <a href="mailto:membership@naturefriendsazerbaijan.org">
              membership@naturefriendsazerbaijan.org
            </a>{" "}
            ünvanına göndərə bilərsiniz
          </h4>
        </div>

        {reading ? (
          <>
            <MemberShipForm />
            <div className="buttons">
              <button onClick={handleReading}>Geri</button>
              <button className="success">Təqdim edin</button>
            </div>
          </>
        ) : (
          <>
            <MemberShipAboutPage />
            <button onClick={handleReading} className="handleReading">
              Razıyam
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MemberShipPage;
