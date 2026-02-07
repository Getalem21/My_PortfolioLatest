import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const skills = [
  "Web Development",
  "Docker, GitHub, Docker Hub, Git, Jenkins Pipelines",
  "UI/UX Design",
  "JavaScript",
  "React",
  "CSS",
  "PHP, Laravel",
  "Cloud Infrastructure Maintenance",
  "Cloud Service Maintenance",
];

const Home = () => {
  const [currentSkill, setCurrentSkill] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const contacts = useMemo(
    () => ["+251948758542", "+251710986677", "getalemberihun21@gmail.com"],
    []
  );
  const [mycontact, setMycontact] = useState(contacts[0]);

  // Skill typing effect
  useEffect(() => {
    const skill = skills[skillIndex];

    const charInterval = setInterval(() => {
      if (charIndex < skill.length) {
        setCurrentSkill((prev) => prev + skill[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(charInterval);
        setTimeout(() => {
          setSkillIndex((prev) => (prev + 1) % skills.length);
          setCharIndex(0);
          setCurrentSkill("");
        }, 1000);
      }
    }, 200);

    return () => clearInterval(charInterval);
  }, [skillIndex, charIndex]);

  // Contact rotation effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % contacts.length;
      setMycontact(contacts[i]);
    }, 2000);

    return () => clearInterval(interval);
  }, [contacts]);

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="Homelogo">
          <li>
            <Link to="/">
              <img src="" alt="My Portfolio" className="HomeLogoImage" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <h1 className="logoTextHome">Portfolio</h1>
            </Link>
          </li>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
        </ul>
      </nav>

      <header className="header">
        <div>
          <h1 className="greeting">
            <span className="name">Welcome </span>
          </h1>
          <h1 className="greeting">
            Hello, I'M <span className="name">GETALEM BERIHUN</span>
          </h1>
        </div>

        <div>
          <h2 className="title">
            Passionate: <span className="skill">{currentSkill}</span>
          </h2>
        </div>
        <div>
          <h2 className="title">
            Contact Us: <span className="skill">{mycontact}</span>
          </h2>
        </div>

        <a
          href="https://www.linkedin.com/in/getalem-berihun-954512324/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          <button className="say-hello">Say Hello on LinkedIn</button>
        </a>

        <a href="/GetalemCV.pdf" download="My-Resume.pdf" className="download-cv">
          DOWNLOAD CV
        </a>
      </header>
    </div>
  );
};

export default Home;
