import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./home.css";

function HomeSocials() {
  return (
    <div className='home_socials'>
        <a href='https://www.linkedin.com/in/yassin-mohamed-360115348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        target='_blank'><FaLinkedin /></a>
        <a href='https://github.com/yasso2006' target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HomeSocials
