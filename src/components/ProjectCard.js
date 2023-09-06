import React from 'react'
import './ProjectCard.css'
import insertlink from '../images/link.svg'


function ProjectCard(props) {

  const renderedTags = props.tags.map((tag, index) => {
    return <span key={index} className="project-tag">{tag}</span>
  })

  const renderedLinks = props.links.map((link, index) => {
    return (
      <a className="project-link" key={index} href={link.url} target="_blank" rel="noopener noreferrer">
        <img src={insertlink} class="icon-link"/>
        {link.name}
      </a>
    )
  })

  return (
    <div className="project-card-layout">
      <div className="project-image-container">
        <img src={props.image} alt={(props.company || props.school) + " Project Results"}/>
      </div>
      <div className="project-text-container">
        <p>
          <strong>{props.title}</strong><br/>
          {props.duration}
        </p>
        <p>
          {props.description}
        </p>
        <div className="links">
          {renderedLinks}
        </div>
        <div className="tags">
          {renderedTags}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;