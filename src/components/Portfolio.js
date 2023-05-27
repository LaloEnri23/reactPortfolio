import React from 'react';
import Project from './Project';
import prj1 from '../images/prj1.jpg';
import prj2 from '../images/prj2.jpg';
import prj3 from '../images/prj3.jpg';
import prj4 from '../images/prj4.jpg';
import './Portfolio/Portfolio.css'; // import the CSS file

const Portfolio = () => {

  const projects = [
    { title: 'Aplicacion de Clima', imageUrl: prj1, deployedUrl: 'https://laloenri23.github.io/NewAplicacion-Weather/', repoUrl: 'https://laloenri23.github.io/NewAplicacion-Weather/' },
    { title: 'Stylist.Ai', imageUrl: prj2, deployedUrl: 'https://autohome.github.io/jenhua-joerdo/', repoUrl: 'https://autohome.github.io/jenhua-joerdo/' },
    { title: 'Fitness-Fiend - Fitness Tracker', imageUrl: prj3, deployedUrl: 'https://fast-basin-24052.herokuapp.com', repoUrl: 'https://fast-basin-24052.herokuapp.com' },
    { title: 'Creatify App', imageUrl: prj4, deployedUrl: 'https://fathomless-crag-99497.herokuapp.com', repoUrl: 'https://fathomless-crag-99497.herokuapp.com' },

  ];

  return (
    <div className="mainproject">
      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;