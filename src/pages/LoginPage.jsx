import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '../components/Icons';

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading
    console.log("Login form submitted!");
    // In a real app, you would handle authentication here.
    // For now, we'll navigate to the dashboard on successful login.
    navigate('/app/donors'); 
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <LogoIcon />
          <h2>LifeLink</h2>
          <p>Blood Donation Management System</p>
        </div>
        <div className="auth-toggle">
          {/* --- THIS LINE IS CORRECTED --- */}
          <button className="auth-toggle-btn active" onClick={() => navigate('/login')}>Sign In</button>
          <button className="auth-toggle-btn" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
        <form className="auth-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="btn btn-primary auth-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};