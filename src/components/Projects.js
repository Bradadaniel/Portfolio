import React from 'react'
import './ProjectsStyle.css'
import ProjectsProps from './ProjectsProps';
import bazenbajsa from '../img/bazenbajsa.png'

function Projects() {
  return (
    <div className="projects" id='projects'>
        <h1>Featured Projects</h1>
        <p>Check my projects</p>
          <div className="projects-containers">
            <ProjectsProps
            img={bazenbajsa}
            title="Swimming Pool Website"
            link="https://bazen-bajsa-daniel.web.app"
            />

            <ProjectsProps
            img={bazenbajsa}
            title="Swimming Pool Website"
            link="https://bazen-bajsa-daniel.web.app"
            />

            <ProjectsProps
            img={bazenbajsa}
            title="Swimming Pool Website"
            link="https://bazen-bajsa-daniel.web.app"
            />

            <ProjectsProps
            img={bazenbajsa}
            title="Swimming Pool Website"
            link="https://bazen-bajsa-daniel.web.app"
            />
          </div>
    </div>
  )
}
export default Projects;
