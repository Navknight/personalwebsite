import React from "react";
import "./page.css";

export default function Page() {
  return (
    <div className="body">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="about" id="about">
        <h1>Hi I am Abhinav</h1>
        <p>And this is my webpage</p>
      </div>
      <div className="work" id="work">
        <h2 className="work-title">This is some of my work</h2>
        <div className="work-grid">
            
        </div>
      </div>
      <div className="contact" id="contact"></div>
    </div>
  );
}