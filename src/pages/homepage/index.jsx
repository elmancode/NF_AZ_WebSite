import React, { useEffect } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
          <b>TƏBİƏT DOSTLARINA XOŞ GƏLMİSİNİZ</b>
          <h1>
            Təbiət Dostları dünyanın yüzlərlə ölkəsində ətraf mühitin
            mühafizəsində töhvə vermək məqsədi ilə fəaliyyətdədir. 
          </h1>
        </div>

        <div className="socialMediaIcons">
          <a
            href="https://www.facebook.com/NatureFriends"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icons" />
            <p>Facebook</p>
          </a>

          <a
            href="https://www.instagram.com/naturefriendsaz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="icons" />
            <p>Instagram</p>
          </a>

          <a
            href="https://www.facebook.com/NatureFriends"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icons" />
            <p>LinkedinIn</p>
          </a>

          <a
            href="https://www.facebook.com/NatureFriends"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icons" />
            <p>Twitter</p>
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
