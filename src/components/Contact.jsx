import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleBtn = () => {
        setMessage(`Email: ${email}`); // Display the email entered
        // Optionally, you can also handle form submission here
    };

    return (
      <>
        <div className="container">
            <div className="column left-column">
                <h1 className='contactus-h1'>Contact Us</h1>
                <div>
                    <h2>Our Details</h2>
                    <p><strong>Phone:   251948758542  / 251710986677    </strong></p>
                    <p><strong>email:    getalemnberihun21@gmail.com </strong> </p>
                    <p><strong>Address:</strong> Addis ababa ,Ethiopia</p>
                </div>
                
                {message && <h2>{message}</h2>} {/* Display the message */}
            </div>
            <div className="column right-column">
                <h2>Find Us Here</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d45680.972150086534!2d38.75759152872801!3d9.005756679118422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d9.0198684!2d38.8011725!4m5!1s0x164b855cd643a691%3A0x5ce3922436b4f99a!2sMegenagna%2C%20Addis%20Ababa!3m2!1d9.020469199999999!2d38.8024029!5e0!3m2!1sen!2set!4v1747205359615!5m2!1sen!2set"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
        </div> 
    
    <h1 className='h1sociallink'>Social Link</h1>
    <div class="social-links">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook-square"></i> Facebook
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter-square"></i> Twitter
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram-square"></i> Instagram
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i> LinkedIn
    </a>
    <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-envelope"></i> Email
    </a>
    <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-telegram-plane"></i> Telegram
    </a>
    <a href="https://wa.me/15555555555" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-whatsapp"></i> WhatsApp
    </a>
</div>
        </>
    );
};

export default Contact;