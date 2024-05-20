import React, { useEffect, useRef } from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBullhorn,
  FaBezierCurve,
  FaBrush,
  FaGlobe,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import useScrollTriggeredCountUp from "../../components/ScrollTriggetCountUp";
import ImageGalleryComponent from "../../components/imageGallery";
import ContactUS from "../../components/contactUS";
import CarouselComponent from "../../components/carousel";
// import CarouselComponent from "../../components/carousel";

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

  const ref = useRef();
  const count1 = useScrollTriggeredCountUp(ref, 100);
  const count2 = useScrollTriggeredCountUp(ref, 150);
  const count3 = useScrollTriggeredCountUp(ref, 1450);
  const count4 = useScrollTriggeredCountUp(ref, 5000);

  return (
    <div id="homePage">
      <section id="section1">
        {/* <div className="overlay"></div>

        <div className="container" data-aos="fade-up">
          <b>TƏBİƏT DOSTLARINA XOŞ GƏLMİSİNİZ</b>

          <h1>
            Təbiət Dostları dünyanın yüzlərlə ölkəsində ətraf mühitin
            mühafizəsində töhvə vermək məqsədi ilə fəaliyyətdədir. 
          </h1>

          <div className="buttons">
            <Link to={"/"}>START A PROJECT</Link>
            <Link to={"/"}>MORE ABOUT US</Link>
          </div>
        </div> */}
        <CarouselComponent />

        <div className="socialMediaIcons" data-aos="zoom-in-left">
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
            <p>LinkedIn</p>
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
          <p data-aos="fade-up">HELLO THERE</p>
          <h1 data-aos="fade-up">We Are Glint</h1>

          <p className="description" data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>

          <div className="counts" data-aos="fade-up">
            <div className="count">
              <h2 ref={ref}>{count1}</h2>
              <h4>Awards Received</h4>
            </div>
            <hr />

            <div className="count">
              <h2 ref={ref}>{count2}</h2>
              <h4>Awards Received</h4>
            </div>
            <hr />

            <div className="count">
              <h2 ref={ref}>{count3}</h2>
              <h4>Awards Received</h4>
            </div>
            <hr />

            <div className="count">
              <h2 ref={ref}>{count4}</h2>
              <h4>Awards Received</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div className="container">
          <div className="head" data-aos="fade-up">
            <h2>WHAT WE DO</h2>

            <h1>
              We’ve got everything you need to launch and grow your business
            </h1>
          </div>

          <div className="cards">
            <div className="card" data-aos="fade-right">
              <div className="">
                <FaBrush className="icon" />
              </div>

              <div className="cardHead">
                <h2>Brand Identity</h2>

                <p className="text">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>

            <div className="card" data-aos="fade-left">
              <div className="">
                <FaBezierCurve className="icon" />
              </div>

              <div className="cardHead">
                <h2>Illustration</h2>

                <p className="text">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>

            <div className="card" data-aos="fade-right">
              <div className="">
                <FaBullhorn className="icon" />
              </div>

              <div className="cardHead">
                <h2>Marketing</h2>

                <p className="text">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>

            <div className="card" data-aos="fade-left">
              <div className="">
                <FaGlobe className="icon" />
              </div>

              <div className="cardHead">
                <h2>Web Design</h2>

                <p className="text">
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section4">
        <div className="head" data-aos="fade-up">
          <h2>RECENT WORKS</h2>

          <h1>We love what we do, check out some of our latest works</h1>
        </div>

        <div className="container">
          <ImageGalleryComponent />
        </div>
      </section>

      <section id="section5" className="contactUS">
        <div className="container">
          <hr />
          <div className="head" data-aos="fade-up">
            <h2>CONTACT US</h2>
            <h1>Reach out for a new project or just say hello</h1>
          </div>

          <ContactUS />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
