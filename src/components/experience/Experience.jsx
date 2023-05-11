import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have </h5>
      <h2>My Experience </h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND  */}

        <div className="experience__backend">
          <h3>UI/UX Design & Others skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Canva</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className=" experience__details-icon"/>
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AdobePhotoshop</h4>
                <small className="text-light">Biggenear</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className=" experience__details-icon"/>
              <div>
                <h4>AdobeXd</h4>
                <small className="text-light">Biggenear</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className=" experience__details-icon"/>
              <div>
                <h4>Git & Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <div>
                <h4>Linux</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
