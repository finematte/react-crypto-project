import React from "react";
import ContactCSS from "./Contact.module.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('SERVICE_ID', 'TRMPLATE_ID', form.current, 'PUBLIC_KEY');
    
    e.target.reset();
  };

  return (
    <div className={ContactCSS.contactContainer}>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={ContactCSS.formContainer}
      >
        <h2 className={ContactCSS.contactUs}>Contact Us</h2>
        <input type="text" placeholder="Full Name" name="user_name" required />
        <input type="text" placeholder="Email" name="user_email" required />
        <input type="text" placeholder="Subject" name="subject" required />
        <textarea name="message" cols="30" rows="10" required></textarea>
        <button type="submit" className={ContactCSS.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
