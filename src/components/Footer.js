import React from 'react'
import './FooterStyle.css'

function Footer() {
  return (
    <footer>
    <div className="footer-containers">
        <div className="top">
            <h1>BD<span>.</span></h1>
            <div className="links">
                <a href="https://www.facebook.com/dani.brada"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/daniid010?igsh=OHVyZDAwYjFobDI0"><i class="fa-brands fa-square-instagram"></i></a>
                <a href="https://github.com/Bradadaniel"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
        <div className="bottom">
            <copyright><p>2024 - Designed by <span>DB.</span> © All rights reserved.</p></copyright>
        </div>
    </div>
    </footer>
  )
}

export default Footer;
