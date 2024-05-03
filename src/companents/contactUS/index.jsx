import React, { useState } from "react";
import "./index.scss";

const ContactUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formun gönderilmesi veya verilerin işlenmesi burada yapılabilir.
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div id="contactUs">
      <div className="container">
        <div className="head" data-aos="fade-up">
          <h2>CONTACT US</h2>
          <h1>Reach out for a new project or just say hello</h1>
        </div>
        <div className="contactComponent">
          <div className="left">
            <h3>SEND US A MESSAGE</h3>

            <form onSubmit={handleSubmit}>
              <fieldset>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
                <button type="submit">Submit</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
