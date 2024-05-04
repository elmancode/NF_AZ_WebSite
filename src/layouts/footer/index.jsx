import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left">
          <h2>Təbiət Dostları Azərbaycan</h2>

          <p>
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor
            accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </p>
        </div>
        <div className="right">
          <h3>Get Notified</h3>

          <p>
            Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae
            aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt
            iusto porro.
          </p>

          <div className="subscribe">
            <form action="">
              <input type="email" placeholder="Email Address" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
      <p className="copyright">© Copyright Nature Friends Azerbaijan | 2024</p>
    </footer>
  );
};

export default Footer;
