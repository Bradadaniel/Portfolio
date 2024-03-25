import React from 'react'
import './AboutStyle.css'
import img1 from '../img/html5.png';
import img2 from '../img/css3.png';
import img3 from '../img/javascript.png';
import img4 from '../img/boostrap.png';
import img5 from '../img/git.png';
import img6 from '../img/react.png';
import img7 from '../img/php.png';
import img8 from '../img/postman.png';
import img9 from '../img/mysql.png';
import img10 from '../img/firebase.png';
import img11 from '../img/figma.png';
import cv from '../documents/brada_daniel_oneletrajz.pdf';

function About() {
  return (
    <section className="about" id='about'>
        <h1>About me</h1>
        <div className="about-containers">
          <div className="left-container">
            <h3>Knowledge</h3>
            <div className="icons-box">
              <img className='icon' src={img1} alt="img" />
              <img className='icon' src={img2} alt="img" />
              <img className='icon' src={img3} alt="img" />
              <img className='icon' src={img4} alt="img" />
              <img className='icon' src={img5} alt="img" />
              <img className='icon' src={img6} alt="img" />
              <img className='icon' src={img7} alt="img" />
              <img className='icon' src={img8} alt="img" />
              <img className='icon' src={img9} alt="img" />
              <img className='icon' src={img10} alt="img" />
              <img className='icon' src={img11} alt="img" />
            </div>
          </div>
          <div className="right-container">
            <h3>Briefly</h3>
              <p>My name is Daniel Brada. I graduated from the Technical College in Subotica in 2023, majoring in IT engineering. My main occupation is programming, specifically Front-End development, although I also have expertise in Back-End. Among my key works are creating an online store and designing and developing other websites. I enjoy planning and creating websites.</p>
              <a href={cv} download>Download CV</a>
          </div>
        </div>
    </section>
  )
}

export default About;
