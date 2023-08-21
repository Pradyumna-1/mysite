import React from 'react'
import './footer.css'
import {RxLinkedinLogo} from "react-icons/rx"
import {FaFacebook} from "react-icons/fa"
// import {SlSocialInstagram} from "react-icons/sl"
import {BsInstagram} from 'react-icons/bs'
const Footer=() =>{
  return (
    <footer>
      <a href="#" className="footer__logo">
        PRADYUMNA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href='#services'>Services</a></li> */}
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank">
          <RxLinkedinLogo />
        </a>
        <a href="https://instagram.com" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FaFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <p>@copyright mypersonal Portfolio all are reserved. </p>
      </div>
    </footer>
  );
}

export default Footer
