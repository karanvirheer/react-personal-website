import "./contact.scss";
import React, { useState } from "react";
import { span } from "prelude-ls";
import HourFromTime from "es-abstract/5/HourFromTime";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <h3> (Work In Progress) </h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span> Thanks, I will reply soon!</span>}
        </form>
      </div>
    </div>
  );
}
