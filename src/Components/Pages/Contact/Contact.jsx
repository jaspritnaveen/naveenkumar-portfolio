import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) =>     e.preventDefault();

      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message was sent!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message failed: " + error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Name</label>
      <input type="text" name="from_name" required />

      <label>Email</label>
      <input type="email" name="from_email" required />

      <label>Message</label>
      <textarea name="message" rows="5" required />

      <input type="submit" value="Send" />
    </form>
  );
};
