import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { SlSocialInstagram } from "react-icons/sl";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_odllzql",
      "template_hbpu7m4",
      form.current,
      "8Pq7xSQe_WeWcnrwh"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>pradyumnakumarnaik1@gmail.com</h5>
            <a href="mailto:pradyumnakumarnaik1@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <GrLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>pradyumnakumarnaik</h5>
            <a
              href="https://www.linkedin.com/in/pradyumna-kumar-naik-9398b723a "
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <SlSocialInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>im_siddharth_20</h5>
            <a
              href="https://www.instagram.com/im_siddharth_20/?next=%2F"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
