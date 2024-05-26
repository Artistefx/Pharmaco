import React from 'react';
import './AnimatedCard.css';


const AnimatedCard = ({ title, description , image }) => {
    const backgroundImage = `url(${image})`;
    return (
        <div className="animated-card" style={{ backgroundImage }}>
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <a href="http://localhost:3000/" className="card-button">
                    Je Découvre
                </a>
            </div>
        </div>
    );
}

export default AnimatedCard;