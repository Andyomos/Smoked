import React, { useState } from "react";
import "../styles/Views.css";

import { db } from "./firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mssg, setMssg] = useState("");
  const [message, setMessage] = useState(() => {
    return <div></div>;
  });

  function messageLogger(e) {
    e.preventDefault();

    db.collection("smoking")
      .add({
        name: name,
        email: email,
        mssg: mssg,
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error.message);
      });

    setName("");
    setEmail("");
    setMssg("");

    setMessage(() => {
      return (
        <div>
          <p>
            Thank you for contacting{" "}
            <b>
              <i>SMOKED</i>
            </b>
            . <br /> We'll get back to you shortly.
          </p>
        </div>
      );
    });

    setInterval(() => {
      setMessage(() => {
        return message;
      });
    }, 8000);
  }

  return (
    <div className="contactMain">
      <h4>Smoked </h4>
      <div className="formDiv">
        <form onSubmit={messageLogger} className="mainForm" method="post">
          <fieldset>
            <legend>Contact Us Below </legend>
            <div className="contactMessageLogger">{message}</div>
            <div className="contactInputDiv">
              <label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  required
                />
              </label>
            </div>
            <div className="contactInputDiv">
              <label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  required
                />
              </label>
            </div>
            <div className="contactInputDiv">
              <label>
                <textarea
                  name="text"
                  id="mssg"
                  value={mssg}
                  onChange={(e) => setMssg(e.target.value)}
                  cols="25"
                  rows="8"
                  placeholder="Enter Message"
                ></textarea>
              </label>
            </div>
            <div className="contactInputDiv">
              <label>
                <button type="submit">Submit</button>
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Contact;
