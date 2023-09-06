import React from 'react'
import './Section.css'
import WorkExperience from './ResumeCard'
import google from "../images/google.png"
import arcticwolf from "../images/arctic-wolf.png" 
import teledyne from "../images/teledyne.png"

function Experience() {
  const workExperienceData = [
    {
      company: "Google", 
      image: google, 
      position: "Software Engineering Intern",
      location: "New York, NY",
      duration: "Sep - Dec 2022",
      description: "Google ChromeOS is a fast, secure, and versatile Linux-based operating system derived from open-source ChromiumOS and powers Chromebooks and other Chrome devices."
    },
    {
      company: "Arctic Wolf", 
      image: arcticwolf, 
      position: "Software Engineering Intern",
      location: "Waterloo, ON",
      duration: "May - Aug 2022",
      description: "Arctic Wolf Networks provides real-time cybersecurity threat monitoring services to help organizations protect their networks and systems by leveraging cloud technology."
    },
    {
      company: "Teledyne DALSA", 
      image: teledyne, 
      position: "Image Processing Intern",
      location: "Waterloo, ON",
      duration: "Sep - Dec 2021",
      description: "Teledyne DALSA, a subsidiary of Teledyne Technologies, creates imaging technology, developing advanced image sensors, cameras, and software for image processing and analysis."
    }
  ]

  const renderedWorkExperiences = workExperienceData.map((item, key) => {
    return (
      <WorkExperience key={key} company={item.company} image={item.image} position={item.position} location={item.location} duration={item.duration} description={item.description}/>
    )
  })

  return (
    <div className="section">
      <h1>Experience</h1>
      {renderedWorkExperiences}
    </div>
  );
}

export default Experience;