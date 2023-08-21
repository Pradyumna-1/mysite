import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

import Typewriter from "typewriter-effect";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h4>Hi there, I'm </h4>
        <h2>Pradyumna Kumar Naik</h2>

        <h3 className="text-light">
          <Typewriter
            options={{
              strings: [" Frontend Developer ", " Frontend Developer "],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
