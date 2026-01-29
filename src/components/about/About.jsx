import React from "react";
import "./about.css";
import { IoSchool } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_cards">
            <div className="about_card">
              <IoSchool className="about_icon" />
              <h5>Computer Engineer student at Alexandria University</h5>
              <small>GPA 3.81</small>
            </div>
            <div className="about_card">
              <FaRobot className="about_icon" />
              <h5>I'm in a technical team AU-Robotics</h5>
              <h5>I'm a member in the sowtware subteam</h5>
            </div>
            <div className="about_card">
              <FaReact className="about_icon" />
              <h5>I'm a Full Stack Web developer</h5>
              <small>10+ Projects</small>
            </div>
          </div>
          <p>
            I'm a Computer Engineering student with hands-on experience in
            Full-Stack Web Development, GUI applications, and Robotics software.
            I enjoy building end-to-end systems — from backend logic and APIs,
            to clean user interfaces and control dashboards for robotics
            projects. I've worked in team-based robotics environments,
            contributing to software architecture, user interfaces, and system
            integration. Currently focused on improving my skills in software
            engineering, web technologies, and real-world applications.
            I'hv alot of Soft Skills like team working and time mangment.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
