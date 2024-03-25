import React from 'react'
import './HeroStyle.css'
import TransparentMe from '../img/transparentme.png'

function Hero() {
  return (
    <div className="hero">
        <div className="containers">
        <div className="left">
            <span>Hello I'm Daniel</span>
            <h1>Front-End Developer</h1>
            <p>Welcome to my portfolio website. If you want to know more about me, my professional knowledge and my works, look around.</p>
            <a className='btn' href="/">About</a>
        </div>
        <div className="right">
            <img src={TransparentMe} alt="img" />
        </div>
        </div>

        <div className="custom-shape-divider-top-1710921661">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
                </svg>
            </div>
    </div>
  )
}

export default Hero;