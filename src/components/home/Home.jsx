import React from "react";
import "./home.css";
import me from "../../assets/me1.png";
import cv from "../../assets/Yassin_Awad_CV.pdf";
import HomeSocials from "./HomeSocials";

function Home() {
  return (
    <div className="home">
      <div className="container home-container">
        <h4>Hello I'm</h4>
        <h1>Yassin Awad</h1>
        <h4 className="text-light">
          Computer Engineer | Full-Stack Developer | GUI & Robotics Software
        </h4>
        <div className="btns">
          <a href={cv} className="btn" download>
            Download CV
          </a>
          <a href="#" className="btn btn-primary">
            Lets talk
          </a>
        </div>
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#about" className="scrol_down">Scrol Down</a>
        <HomeSocials />
      </div>
    </div>
  );
}

export default Home;
