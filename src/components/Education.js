import React from 'react'
import './Section.css'
import ResumeCard from './ResumeCard'
import universityofwaterloo from '../images/university-of-waterloo.png'

function Education() {
  const educationExperienceData = [
    {
      school: "University of Waterloo", 
      image: universityofwaterloo, 
      degree: "Honours Bachelor of Computer Science",
      specialization: "Specialization in Human-Computer Interaction",
      duration: "Sep 2018 - Aug 2023",
      description: "Courses:  Software Design & Architecture, User Interfaces, Human-Computer Interaction, Neural Networks, Computer Vision"
    },
  ]

  const renderedEducationExperiences = educationExperienceData.map((item, key) => {
    return (
      <ResumeCard key={key} school={item.school} image={item.image} degree={item.degree} specialization={item.specialization} duration={item.duration} description={item.description}/>
    )
  })

  return (
    <div className='section' id="education">
      <h1>Education</h1>
      {renderedEducationExperiences}
    </div>
  );
}

export default Education;