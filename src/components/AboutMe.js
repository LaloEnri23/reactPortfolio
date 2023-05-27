import React from 'react';
import './AboutMe/AboutMe.css';
import gato from '../images/gato.jpeg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img src={gato} alt="Eduardo Enriquez" />
        <div id='homepage'>
          <p>
          My name is Eduardo Enriquez, and I was born on February 23, in the early 2003s, in Los Angeles, California. I take great pride in my Mexican heritage, as it has played a significant role in shaping my work ethic and values. From a young age, I was instilled with the importance of hard work, thanks to my industrious Mexican parents.
          </p>
          <p>
          At the tender age of 10, I began assisting my father with his carpentry business. It was during those formative years that I learned the value of dedication, perseverance, and attention to detail. Simultaneously, I would accompany my mother to the flea market or hit the streets to assist her in selling various items. These experiences not only honed my communication and interpersonal skills but also instilled in me an entrepreneurial spirit. 
          </p>
          <p>
          To maintain a healthy body and mind, I am an avid enthusiast of football (soccer). I find immense joy in playing the sport, as it allows me to stay active, sharp, and entertained. Beyond football, I indulge in other hobbies such as going to the gym to keep myself physically fit, exploring the outdoors through camping trips, and unleashing my creativity by building intricate LEGO structures.
          </p>
          <p>
          Growing up in such an environment has strengthened my work ethic, both physically and mentally. The discipline and determination cultivated through football and collaborating with my parents have not only enhanced my ability to work as part of a team but have also equipped me with the skills to excel under pressure. During challenging times, I constantly remind myself to maintain a positive mentality and focus on the silver linings.
          </p>
          <p>
          In conclusion, my upbringing as a Mexican-American has shaped me into a driven individual with a strong work ethic, effective communication skills, and the ability to thrive in demanding situations. I embrace each day with a positive outlook, always seeking the bright side of every situation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;