import React from "react";
import express from "../../assets/expressjs.svg";
import css from "../../assets/css3.svg";
import html from "../../assets/html-icon.svg";
import javascript from "../../assets/javascript.svg";
import node from "../../assets/nodejs.svg";
import postgrelsql from "../../assets/postgresql.svg";
import python from "../../assets/python.svg";
import react from "../../assets/react.svg";
import CProg from "../../assets/c-icon.svg";
import bootstrap from "../../assets/bootstrap.svg";
import "./skills.css";

const skillsData = [
  {
    id: 1,
    icon: html,
    alt: "HTML icon",
    title: "HTML",
    description: "Creating semantic and accessible web pages with HTML5.",
  },
  {
    id: 2,
    icon: css,
    alt: "CSS icon",
    title: "CSS",
    description: "Styling and layout with modern CSS techniques.",
  },
  {
    id: 3,
    icon: javascript,
    alt: "JavaScript icon",
    title: "JavaScript",
    description: "Building interactive web applications with JavaScript.",
  },
  {
    id: 4,
    icon: react,
    alt: "React icon",
    title: "React",
    description: "Developing user interfaces with React and its ecosystem.",
  },
  {
    id: 5,
    icon: bootstrap,
    alt: "Bootstrap icon",
    title: "Bootstrap",
    description:
      "Building responsive and mobile-first websites with Bootstrap.",
  },
  {
    id: 6,
    icon: node,
    alt: "Node.js icon",
    title: "Node.js",
    description: "Server-side development with Node.js and Express.",
  },
  {
    id: 7,
    icon: express,
    alt: "Express.js icon",
    title: "Express.js",
    description: "Building RESTful APIs with Express.js framework.",
  },
  {
    id: 8,
    icon: postgrelsql,
    alt: "PostgreSQL icon",
    title: "PostgreSQL",
    description: "Database management and querying with PostgreSQL.",
  },
  {
    id: 9,
    icon: CProg,
    alt: "C Programming icon",
    title: "C",
    description: "Programming in C with a focus on making systems",
  },
  {
    id: 10,
    icon: python,
    alt: "Python icon",
    title: "Python",
    description:
      "Programming in Python with a focus on GUI and Computer-Vision",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container container_skills">
        {skillsData.map((skill) => (
          <article key={skill.id} className="card_skill">
            <div className="icon">
              <img src={skill.icon} alt={skill.alt} />
            </div>
            <div className="content">
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
