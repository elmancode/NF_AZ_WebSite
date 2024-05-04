import React, { useState } from "react";
import "./index.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
} from "react-icons/fa6";

const ContactUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contactUs" data-aos="fade-up">
      <div className="left">
        <h3>SEND US A MESSAGE</h3>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Subject"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>

      <div className="right">
        <h3>CONTACT INFO</h3>

        <p className="colored">Where to Find Us</p>
        <p>1600 Amphitheatre Parkway Mountain View, CA 94043 US</p>

        <p className="colored">Email Us At</p>
        <div className="email">
          <a href="mailto:elmanasgarov@gmail.com">elmanasgarov@gmail.com</a>
          <a href="mailto:elmanasgarov@gmail.com">info@gmail.com</a>
        </div>

        <p className="colored">Call Us At</p>
        <div className="phone">
          <a href="tel:+994503134473">Phone: (+994) 50 313 4473</a>
          <a href="tel:+994503134473">Mobile: (+994) 50 313 4473</a>
          <a href="tel:+994503134473">Fax: (+994) 50 313 4473</a>
        </div>

        <div className="socialMediaIcons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
