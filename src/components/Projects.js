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
        {name: "Figma Prototype", url: "https://www.figma.com/proto/cTADwauEqdkiOYzX7xOqwk/CS449-team-project?type=design&node-id=247-3998&t=kt1YotovfxAGgc2i-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=247%3A3998"},
        {name: "Case Study", url: "https://vholmes49.wixsite.com/449-design-portfolio"}
      ]
    },
    {
      title: "SMILIE", 
      image: smilie, 
      duration: "Jun - Jul 2023",
      description: "Developed an Android app to empower users to track their wellness journey, access resources, and leverage AI-based insights",
      tags: ["Android", "Kotlin", "Jetpack Compose", "OpenAI", "Firebase", "Material Theme 3"],
      links: [ 
        {name: "Demo Video", url: "https://www.youtube.com/watch?v=3A-fkjtdH6Y"},
        {name: "GitHub", url: "https://github.com/SarmanAulakh/ece452-group2"}
      ]
    },
    {
      title: "Self-Supervised Monocular Depth Estimation", 
      image: mde, 
      duration: "Mar - Apr 2023",
      description: "Built a neural network based on the paper 'Unsupervised Monocular Depth Estimation with Left-Right Consistency' by Godard et al. Trained the neural network using 3000+ images from the KITTI dataset",
      tags: ["PyTorch", "Numpy", "Matplotlib", "Google Colab"],
      links: [ 
        {name: "Original Paper", url: "https://arxiv.org/abs/1609.03677"},
        {name: "GitHub", url: "https://github.com/matthewtlam/Monocular-Depth-Estimation"}
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