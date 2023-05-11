import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Smart  Camera or Monitoring System ",
    github: "https://github.com/Pradyumna-1/SmartCCtv",
    demo: "https://cdn.dribbble.com/userupload/4045142/file/original-cab5df91128cab7696e24380ad36b03b.png?compress=1&resize=752x",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Food Services frontend Webapp",
    github: "https://pradyumna-1.github.io/Doge_Food_Services/",
    demo: "https://dribbble.com/shots/16691825-Food-Delivery-Web-Landing-Page-Design/attachments/11731683?mode=media",
  },

  {
    id: 3,
    Image: IMG3,
    title: "Figma dashboard UI kit for data designn web apps",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3936864/file/original-f447eab50ca75b833d7e5834fbd229aa.png?compress=1&resize=752x",
  },

  {
    id: 4,
    Image: IMG4,
    title: " Responsive Drumkit music system for entertainment ",
    github: "https://github.com/Pradyumna-1/Drum-Kit-",
    demo:"https://dribbble.com/shots/7269232-Holo-Music-2-0/attachments/223592?mode=media",
  },

  {
    id: 5,
    Image: IMG5,
    title: "South Indian Hindi dubbed movies.",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3232614/file/original-6b11cbb03d2fe31957fa7952698c2e9d.jpg?compress=1&resize=752x",
  },

  {
    id: 6,
    Image: IMG6,
    title: "Doctor's Search UI kit for patient in figma",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3357779/file/original-0a63a54332be3c3dbb70bfe8a0d4e792.png?compress=1&resize=752x",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={Image} alt={title}></img>
              </div>

              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blanck">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo{" "}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
