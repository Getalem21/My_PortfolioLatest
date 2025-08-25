import React from 'react';
import myphoto from '../Assets/myphoto.png';
import './About.css'; // Ensure you create this CSS file

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="left-container">
        <h1>About Me</h1>
        <img 
          src={myphoto} 
          alt="About Me" 
          className="about-image" 
        />
      </div>
      <div className="right-container">
      <h1>About ME</h1>
        <p className='about-detail'>
         I am a Cloud Infrastructure and Web Development Specialist with 2 years of experience in cloud infrastructure maintenance, site deployment, and virtualization. I have strong expertise in web technologies including HTML, CSS, JavaScript, Laravel, PHP, and React, combined with hands-on skills in Git, GitHub, Docker, Docker Hub, Jenkins, and GitHub Actions for CI/CD automation.

I am passionate about building scalable web applications, managing server deployments, and optimizing virtual machine environments. My goal is to deliver efficient, secure, and reliable cloud-based solutions that empower businesses to grow.
        </p>
        <div className="projects">
          <h2>Projects</h2>
          <ul>
            <li className="project-item">Trippl A project in ethiotelecom</li>
            <li className="project-item">AICC Project in Ethiopia electric utility</li>
            <li className="project-item">VAS Cloud DR_Site deployment Ethiotelecom</li>
            <li className="project-item">Bahir Blood Administration System project In Bahir Dar University</li>
            <li className="project-item">Attendance System in Debretabor university</li>
            <li className="project-item">Datacenter Deployment in Debretabor university</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;