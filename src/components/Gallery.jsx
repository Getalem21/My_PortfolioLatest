import React from 'react';
import './Gallery.css'; // Import the CSS file
import Background from '../Assets/Background.png';
import NET1 from '../Assets/NET1.png';
import NET2 from '../Assets/NET2.png';
import NET3 from '../Assets/NET3.png';
import B1 from '../Assets/B1.jpg';
import B2 from '../Assets/B2.jpg';
import Graphics1 from '../Assets/Graphics1.png';
import Graphics2 from '../Assets/Graphics2.png';

const Gallery = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Networking project ON EEU',
            image:NET1
        },
        {
            title: 'Project 2',
            description: 'AAA Project on Ethiotelecom',
            image: NET2
        },
        {
            title: 'Project 3',
            description: 'Bahirdar Blood Bank project',
            image: B1
        },
        {
        title: 'Project 4',
        description: 'Bahirdar Blood Bank project',
        image: B2
    },
    {
        title: 'Project 5',
        description: 'Graphics project',
        image: Graphics1
    },
    {
        title: 'Project 6',
        description: 'Flyer Design',
        image: Graphics2
    },
        // Add more projects as needed
    ];

    return (
        <div className="gallaryContainer">
            <h1 className='gallery-h1'>My Work Experience & Projects</h1>
            <div className="gallery-grid">
                {projects.map((project, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;