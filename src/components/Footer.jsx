import React from 'react';
import './Footer.css'; // Import the CSS for styling
import myphoto from '../Assets/myphoto.png';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={myphoto}alt="Logo" />
                    <h3>Getalem Berihun </h3> {/* Replace with your logo path */}
                </div>
                <div className="footer-text">
                   <li>
                   <Link to="/Contact"> <button className="contact-button">Contact us</button>
                   </Link>
                   </li>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-section">
                    <h4>PROJECTS</h4>
                    <p>AAA</p>
                    <p>BDU</p>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <p>Debretabor university</p>
                    <p>Bahirdar university</p>
                    <p>Ethiopia electric utility</p>
                    <p>Ethitelecom</p>
                     <p>Bahirdar Blood Bank</p>
                    <p>Ethiopia electric utility</p>


                </div>
                <div className="footer-section">
                    <h4>Further Information</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footer-section">
                    <h4>Follow us</h4>
                    <div className="social-icons">
                        {/* Add your social media icons here */}
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
  
            </div>
            <div>
            <p className='copyRight_TXT'>© 2025 GetalemBerihun</p>
            </div>
          

        </footer>
    );
};

export default Footer;