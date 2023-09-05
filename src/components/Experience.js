import React from 'react'
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
      description: "Jane Street is a quantitative trading firm with a unique focus on technology and collaborative problem solving."
    },
    {
      company: "Arctic Wolf", 
      image: arcticwolf, 
      position: "Software Engineering Intern",
      location: "Waterloo, ON",
      duration: "May - Aug 2022",
      description: "Jane Street is a quantitative trading firm with a unique focus on technology and collaborative problem solving."
    },
    {
      company: "Teledyne DALSA", 
      image: teledyne, 
      position: "Image Processing Intern",
      location: "Waterloo, ON",
      duration: "Sep - Dec 2021",
      description: "Jane Street is a quantitative trading firm with a unique focus on technology and collaborative problem solving."
    }
  ]

  const renderedWorkExperiences = workExperienceData.map((item, key) => {
    return (
      <WorkExperience key={key} company={item.company} image={item.image} position={item.position} location={item.location} duration={item.duration} description={item.description}/>
    )
  })

  return (
    <div>
      <h1>Experience</h1>
      {renderedWorkExperiences}
    </div>
  );
}

export default Experience;