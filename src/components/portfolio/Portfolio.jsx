import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
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
    github: "https://github.com/Pradyumna-1/mini-resturant",
    demo: "https://mini-resturant.onrender.com/",
  },

  {
    id: 3,
    Image: IMG3,
    title: "Covid-19 API Update State Wise available ",
    github: "https://github.com/Pradyumna-1/covidapi",
    demo: "https://covid19api-w4oa.onrender.com/",
  },

  {
    id: 4,
    Image: IMG4,
    title: " Responsive Drumkit music system for entertainment ",
    github: "https://github.com/Pradyumna-1/Drum-Kit-",
    demo: "https://pradyumna-1.github.io/Drum-Kit-/",
  },

  {
    id: 5,
    Image: IMG5,
    title: "Netflix all time Watch top 10 Series List",
    github: "https://netflixtop5serieslist.netlify.app/",
    demo: "https://netflixtop5serieslist.netlify.app/",
  },

  {
    id: 6,
    Image: IMG6,
    title: "Dogesh Online Food Delivery Services",
    github: "https://github.com/Pradyumna-1/Doge_Food_Services",
    demo: "https://pradyumna-1.github.io/Doge_Food_Services/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work </h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={Image} alt={title}></img>
              </div>

              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
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
