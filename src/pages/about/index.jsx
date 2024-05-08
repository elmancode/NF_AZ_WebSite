import React, { useEffect } from "react";
import "./index.scss";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="aboutPage">
      <div className="backgroundImage">
        <div className="backImageContainer">
          <div className="text">
            <h2>About US</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              possimus corrupti nemo rerum veritatis accusamus provident quos
              autem qui et quo sunt sapiente est, itaque minus optio animi
              aperiam, quas atque ab magnam. Aut ut magnam blanditiis.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h1>Təbiət Dostları Azərbaycan</h1>

        <p>
          Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
          nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec,
          egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh
          pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
          accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
