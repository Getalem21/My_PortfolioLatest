import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import styles from "./Home.css";
import logo from '../Assets/logo3.png';
const skills = ['Web Development','Docker,GitHub, Docker Hub ,Git ,Jenkins Peplins', 'UI/UX Design', 'JavaScript', 'React', 'CSS','PHP ,Laravel','cloud infrastructure maintenance', 'cloud servicce maintenance'];

const Home = () => {
  const [currentSkill, setCurrentSkill] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const contacts = ['+251948758542', '+251710986677', 'getalemberihun21@gmail.com'];
  const [mycontact, setMycontact] = useState(contacts[0]);
  const [index, setIndex] = useState(0);

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
          setCurrentSkill(''); // Reset for the next skill
        }, 1000); // Wait for a second before starting the next skill
      }
    }, 500); // Change character every half second

    return () => clearInterval(charInterval); // Cleanup on unmount
  }, [skillIndex, charIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contacts.length);
      setMycontact(contacts[index]);
    }, 2000); // Change skill every 2 seconds
    

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]);
  return (
   <>
    <div className="homepage">
      <nav className="navbar">
        <div className='Homelogo'>
        <li><Link to="/"><img src=""alt="My Portfolio"className='HomeLogoImage'></img></Link></li>
        <li><Link to="/"><h1 className="logoTextHome">Portfolio</h1></Link></li>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Gallery">Gallery</Link></li>
        </ul>
      </nav>
      <header className="header">
        <div>
          <h1 className="greeting"> <span className="name">Wellcome </span> </h1>
          <h1 className="greeting">Hello, I'M <span className="name">GETALEM BERIHUN</span> </h1>
          </div>
    
       
<div>
<h2 className="title"> Passionate   : <span className="skill">{currentSkill}</span></h2>
</div>
<div>
<h2 className="title">Contact US    : <span className="skill">{mycontact}</span></h2>
</div>

        <a href="https://www.linkedin.com/in/getalem-berihun-954512324/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn">
  <button className="say-hello">Say Hello on LinkedIn</button>
</a>

        <a href="/GetalemCV.pdf" download="My-Resume.pdf" className="download-cv">DOWNLOAD CV</a>
      </header>
    

   </div>
   </>            
);
};

export default Home;