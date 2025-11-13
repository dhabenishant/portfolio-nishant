import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nishant Dhabe</span>{" "}
            from <span className="purple">Hingoli, Maharashatra, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Web Developer</span> at{" "}
            <span className="purple">Kartbuddy Logistics PVT.LTD</span>.
            <br />I hold an Integrated Bachelor of Engineering in{" "}
            <span className="purple">Computer Science and Engineering</span> from{" "}
            <span className="purple">DIEMS, Aurangabad</span>.
            <br />I have Completed PG-DAC in{" "}
            <span className="purple">CDAC</span> from{" "}
            <span className="purple">AIT-YCP, Nariman Point, Mumbai</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Nishant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
