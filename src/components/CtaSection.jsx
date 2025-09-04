import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CtaSection = () =>{
    const navigate = useNavigate();
    return (
   
    <section className="cta-section">
        <div className="container cta-container">
            <h2 className="cta-title">Ready to Save Lives?</h2>
            <p className="cta-subtitle">Join our community today and be part of something bigger than yourself</p>
            <div className="cta-actions">
                <button className="btn btn-light" onClick={()=> navigate('/register-as-donor')}>Register as Donor</button>
                <button className="btn btn-outline" onClick={()=> navigate('/hospitalportal')}>Hospital Registration</button>
            </div>
        </div>
    </section>
)};