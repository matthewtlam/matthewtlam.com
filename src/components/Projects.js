import React from 'react'
import ProjectCard from './ProjectCard'
import campuscompanion from "../images/campus-companion.png"
import mde from "../images/monocular-depth-estimation.png"
import smilie from "../images/smilie.png"

function Project() {
  const projectData = [
    {
      title: "Campus Companion", 
      image: campuscompanion, 
      duration: "May - Aug 2023",
      description: "Created a Figma prototype to help first year students navigate campus life by following user-centered design methodologies",
      tags: ["Figma", "User Interviews", "Persona Maps", "Empathy Maps", "Affinity Diagrams"],
      links: [ 
        {type: "insert-link", name: "Figma Prototype", url: ""},
        {type: "insert-link", name: "Case Study", url: ""}
      ]
    },
    {
      title: "SMILIE", 
      image: smilie, 
      duration: "Jun - Jul 2023",
      description: "Developed an Android app to empower users to track their wellness journey, access resources, and leverage AI-based insights",
      tags: ["Android", "Kotlin", "Jetpack Compose", "OpenAI", "Firebase", "Material Theme 3"],
      links: [ 
        {type: "insert-link", name: "Demo Video", url: ""},
        {type: "github", name: "GitHub", url: ""}
      ]
    },
    {
      title: "Self-Supervised Monocular Depth Estimation", 
      image: mde, 
      duration: "Mar - Apr 2023",
      description: "Built a neural network based on the paper 'Unsupervised Monocular Depth Estimation with Left-Right Consistency' by Godard et al. Trained the neural network using 3000+ images from the KITTI dataset",
      tags: ["PyTorch", "Numpy", "Matplotlib", "Google Colab"],
      links: [ 
        {type: "insert-link", name: "Original Paper", url: ""},
        {type: "github", name: "GitHub", url: ""}
      ]
    } 
  ]

  const renderedProjects = projectData.map((item, key) => {
    return (
      <ProjectCard key={key} title={item.title} image={item.image} duration={item.duration} description={item.description} tags={item.tags} links={item.links}/>
    )
  })

  return (
    <div>
      <h1>Projects</h1>
      {renderedProjects}
    </div>
  );
}

export default Project;