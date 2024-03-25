import React from 'react'
import './ExperienceStyle.css'
import ExperienceProps from './ExperienceProps';

function Experience() {
  return (
    <div className="experience">
        <section className="experience-box">
            <ExperienceProps
            icon="fa-solid fa-gear"
            title="Web Design"
            text="I enjoy creating my own designs. I strive to create a modern look in my websites."
            />
            <ExperienceProps
            icon="fa-solid fa-code"
            title="Web Development"
            text="I strive for perfection and notice every minor flaw. My websites are always responsive and meet all requirements. I also prefer to create the Back-End part myself."
            />
            <ExperienceProps
            icon="fa-solid fa-code-merge"
            title="Version Control"
            text="In terms of teamwork, I enjoy working in teams as well. So far, I have used the Jira platform. Among version control systems, I use Git."
            />
        </section>

        <section className="experience-exp-box">
            <div className="left-container">
                <div className="box">
                    <h1>2</h1>
                    <p>Years Experience</p>
                </div>
            </div>
            <div className="right-container">
                <div className="box">
                    <h3>0</h3>
                    <p>Clients</p>
                </div>
                <div className="box">
                    <h3>9+</h3>
                    <p>Completed Projects</p>
                </div>
                <div className="box">
                    <h3>10+</h3>
                    <p>Courses</p>
                </div>
                <div className="box">
                    <h3>0</h3>
                    <p>Work Years</p>
                </div>
            </div>
        </section>
        
    </div>
  )
}
export default Experience;
