import React from 'react'

function ExperienceProps(props) {
  return (
    <div className="box">
        <i class={props.icon}></i>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
  )
}
export default ExperienceProps;
