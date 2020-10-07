import React, { useState } from "react";
import "./styles/Social.css";

import { db } from "../components/views/firebase";

function Counter() {
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(new Date().toLocaleDateString());
  const [message, setMessage] = useState(() => {
    return <div></div>;
  });

  setInterval(() => {
    setTimer(() => new Date().toLocaleString());
  }, 1000);

  function collectEmail(e) {
    e.preventDefault();
    db.collection("subscribers")
      .add({
        email: email,
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error.message);
      });

    setEmail("");

    setMessage(() => {
      return (
        <div>
          <p>
            Thank you for Subscribing to{" "}
            <b>
              <i>SMOKED</i>
            </b>
            . <br /> Please, check your email.
          </p>
        </div>
      );
    });

    setInterval(() => {
      setMessage(() => {
        return message;
      });
    }, 9000);
  }

  return (
    <div className="counter">
      <div className="counterDiv timer">
        <small>{timer}</small>
      </div>
      <div className="counterDiv subscribe">
        <form onSubmit={collectEmail}>
          <small>{message}</small>
          <div className="counterInput">
            <p>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email..."
                required
              />

              <button>Subscribe</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Counter;
