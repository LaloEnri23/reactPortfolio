// Imports React, the component's specific CSS styles, and a PDF file of Harold's resume.
import React from 'react';
import './Resume/Resume.css';


// This is a functional React component named 'Resume'.
const Resume = () => {

 // Returns the JSX for the 'Resume' component. This component is a section with the class 'resume',
  // containing an h2 tag, a download link for Harold's resume, and an h3 tag followed by several unordered lists.
  // These lists describe Harold's proficiencies in front-end and back-end development.

  return (
    <section className="resume">
      <h2>Resume</h2>
      <a className="download-resume"  >
        Download my Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li id='sub'>Front-end Development:</li>
      </ul>
      <ul>
        <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. 
      </li>
      </ul>
      <ul>
        <li id='sub'>Back-end Development:</li>
      </ul>
      <ul>
        <li>
        Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? 
      </li>
      </ul>


    </section>
  );
};

// Exports the 'Resume' component so it can be imported and used in other components or files.
export default Resume;