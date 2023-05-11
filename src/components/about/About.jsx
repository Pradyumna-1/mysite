import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=""></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>I am a Fresher's </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>

            <article className="about__card">
              <FaRegFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
          Hello  I'm Pradyumna Kumar Naik a frontend developer,studying in Computer Science and Engineering at Government College of Engineering Kalahandi,Bhawanipatna. I am a highly motivated individual with a passion for lifelong learning. I am an diligent worker and I strive to be honest in all aspects of my life. I have utilized my expertise to develop and implement
innovative solutions, resulting in significant improvements in development.
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Lets Talk about
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
