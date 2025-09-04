import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link for navigation
import { SearchIcon, PlusIcon, HeartIcon } from './Icons';

const featuresData = [
    { 
        icon: <SearchIcon />, 
        title: "Find Donors", 
        description: "Search for blood donors by location, blood type, and availability",
        buttonText: "Search Now",
        link: "/donor", // The page this button will go to
        primary: true
    },
    { 
        icon: <PlusIcon />, 
        title: "Request Blood", 
        description: "Hospitals can create urgent blood requests for patient care",
        buttonText: "Create Request",
        link: "/create-request", // The page this button will go to
        primary: false
    },
    { 
        icon: <HeartIcon />, 
        title: "Donate Blood", 
        description: "Join our community of lifesavers and help those in need",
        buttonText: "Join Now",
        link: "/register-as-donor", // The page this button will go to
        primary: false
    }
];

export const HowItWorksSection = () => (
    <section className="how-it-works-section">
        <div className="container">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Our platform streamlines the blood donation process for donors and hospitals</p>
            <div className="features-container">
                {featuresData.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon-wrapper" style={{ color: feature.primary ? '#DC2626' : '#6B7280' }}>
                           {feature.icon}
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                        {/* 2. Change the button to a Link component */}
                        
                        <Link to={feature.link} className={`btn ${feature.primary ? 'btn-primary' : 'btn-secondary'} feature-card-button`}>
                            {feature.buttonText}
                        </Link>
                      
                    </div>
                ))}
            </div>
        </div>
    </section>
);
