import React from 'react'
import './About.css'
import './Section.css'
import pfp from '../images/pfp.png'
import octocat from '../images/octocat.png'
import linkedin from '../images/linkedin.png'

function About() {
  return (
    <div className="about-layout section" id="about">
      <div className="about-image-container">
        <div className="about-row">
          <img src={pfp} alt="Profile of Matthew"/>
        </div>
        <br/>
        <div className="about-row">
          <a href="https://www.linkedin.com/in/matthewtlam/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn Logo"/>
          </a>
          <a href="https://github.com/matthewtlam" target="_blank" rel="noopener noreferrer">
            <img src={octocat} alt="Octocat Logo"/>
          </a>
        </div>
      </div>
      <div className="about-text-container">
        <h1>Hey, I'm Matthew! 👋</h1>
        <p>I'm a recent CS grad from the University of Waterloo. 
            Previously, I worked as a Software Engineer Intern at Google, 
            Arctic Wolf and Teledyne DALSA. If you want to get in touch, 
            you can contact me with any of the social media links on the site!
        </p>
        <p>Current software interests: distributed systems, backend systems design, computer vision, and AI</p>
        <p>Current hobbies: power lifting 🏋🏻‍️, cooking 🧑‍🍳, playing video games 🎮, and listening to podcasts 🎙️</p>
        <br/>
       <a href="https://drive.google.com/file/d/1kHUsLyWIefle88c-DV5sUif6JUK3a9I4/view?usp=sharing">
        <button>View Resume</button>
       </a>
      </div>
    </div>
  );
}

export default About;