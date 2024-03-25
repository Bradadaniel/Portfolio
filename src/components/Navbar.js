import React, {useState} from 'react'
import './NavbarStyle.css'

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
        <div className="left">
            <h1>BD<span>.</span></h1>
        </div>
        <div className={clicked ? 'right active' : 'right'}>
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
        </div>

        <div className="menu-icons" onClick={handleClick}>
            <i className={clicked ? 'fa-solid fa-circle-xmark' : 'fa-solid fa-bars'}></i>
        </div>
        
    </nav>
  )
}

export default Navbar;
