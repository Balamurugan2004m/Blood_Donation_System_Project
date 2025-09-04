import React from 'react';
import { ButtonHeartIcon, ButtonHospitalIcon } from './Icons';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () =>{ 
    const navigate = useNavigate();
    return (

    <section className="hero-section">
        <div className="container hero-container">
            <div className="hero-content">
                <p className="hero-subtitle">Connecting Lives, Saving Future</p>
                <h2 className="hero-title">Blood Donation <br />Made <span className="highlight">Simple</span></h2>
                <p className="hero-description">
                    Connect donors with hospitals instantly. Our platform ensures safe, efficient blood donation management for communities worldwide.
                </p>
                <div className="hero-actions">
                    
                    <button className="btn btn-primary" onClick={()=> navigate('/signup')}>
                        <ButtonHeartIcon />
                        Start Donating
                    </button>
                   
                    <button className="btn btn-secondary" onClick={()=> navigate('/hospitaldashboard')}>
                        <ButtonHospitalIcon />
                        Hospital Portal
                    </button>
                </div>
            </div>
           
        </div>
    </section>
)};