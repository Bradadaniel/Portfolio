import React from 'react'

function ProjectsProps(props) {
  return (
    <div className="project-box">
      <img src={props.img} alt="project-img" />
      <h3>{props.title}</h3>
      <a href={props.link}>Check Project <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  )
}

export default ProjectsProps;
