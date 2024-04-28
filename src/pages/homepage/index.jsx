import React, { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import behance from "../../assets/icons/behance.png";
import instagram from "../../assets/icons/instagram.png";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div id="homePage">
      <section id="section1">
        <div className="overlay"> </div>

        <div className="container" data-aos="fade-up">
          <b>Təbiət Dostlarına xoş gəlmisiniz</b>
          <h1>
            TƏBİƏT DOSTLARI DÜNYANIN YÜZLƏRLƏ ÖLKƏSİNDƏ ƏTRAF MÜHİTİN
            MÜHAFİZƏSİNDƏ TÖHVƏ VERMƏK MƏQSƏDİ İLƏ FƏALİYYƏTDƏDİR.  
          </h1>
        </div>

        <div className="socialMediaIcons">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
            <p>facebook</p>
          </a>

          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="facebook" />
            <p>twitter</p>
          </a>

          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="facebook" />
            <p>instagram</p>
          </a>

          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={behance} alt="facebook" />
            <p>behance</p>
          </a>
        </div>
      </section>

      <section id="section2">
        <div className="overlay"> </div>

        <div className="container">
          <b>Təbiət Dostlarına xoş gəlmisiniz</b>
          <h1>
            TƏBİƏT DOSTLARI DÜNYANIN YÜZLƏRLƏ ÖLKƏSİNDƏ ƏTRAF MÜHİTİN
            MÜHAFİZƏSİNDƏ TÖHVƏ VERMƏK MƏQSƏDİ İLƏ FƏALİYYƏTDƏDİR.  
          </h1>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
