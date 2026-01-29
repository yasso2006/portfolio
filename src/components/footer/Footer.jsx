import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer_logo">Yassin Awad</a>

      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/share/1HKpbjXgxv/" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/yassoawad_2006?igsh=MWk5MTZvb2sxMXV4MA==" target="_blank"><FaInstagram /></a>
        <a
          href="https://www.linkedin.com/in/yassin-mohamed-360115348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/yasso2006" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="copyright">
        <small>&copy; <a href="#">Yassin Awad</a> All rights reversed</small>
      </div>
    </footer>
  );
}

export default Footer;
