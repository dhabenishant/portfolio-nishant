import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import complaintBox from "../../Assets/Projects/ComplaintBox.png";
import suicide from "../../Assets/Projects/suicide.png";
import pmrd from "../../Assets/Projects/pmrd.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={complaintBox}
              isBlog={false}
              title="Complaint Box"
              description="The Complaint Box Web Application is designed to enhance communication and information sharing between citizens and law enforcement authorities. This system provides a digital platform where citizens can conveniently lodge complaints related to crime, fraud, or other issues, track their status, and receive timely updates.Using .Net Core ,ReactJS."
              ghLink="https://github.com/dhabenishant/Complaint_Box_Project-CDAC-.git"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pmrd}
              isBlog={false}
              title="Performance Measure Review & Discuss (PMRD)"
              description="The application assists employees in managing tasks and tracking attendance, replacing Excel sheets with anautomated system. Developed using .Net technology, it includes modules like Nk1 and Nk2for different departments.● Employees can register, log-in, and access their personalized dashboard to mark attendance and view assignedtasks. Tasks are assigned daily, weekly, and monthly. The dashboard displays all tasks, and employees can markthem as completed. Additional features include generating reports and logging out. This streamlined systemenhances efficiency in task management and attendance tracking for the organization.Using .Net Framework,html"
              ghLink="https://github.com/dhabenishant/PMRD.git"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Soon..."
              description=""
              ghLink="#"
              demoLink="#"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
