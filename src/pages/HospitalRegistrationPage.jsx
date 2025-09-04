import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HospitalBuildingIcon } from '../components/Icons'; // Assuming a suitable icon exists

export const HospitalRegistrationPage = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Hospital registration form submitted!");
        // In a real app, you would handle the registration logic here.
        // For now, we'll navigate to the hospital dashboard on success.
        navigate('/app/requests');
    };

    return (
        <div className="container page-container">
            <div className="page-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 32px auto' }}>
                <h1>Register Your Hospital</h1>
                <p>Join our network to request blood and save lives in your community.</p>
            </div>

            <div className="form-card">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-section">
                        <div className="form-section-header">
                            <HospitalBuildingIcon />
                            <h3>Hospital Information</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hospitalName">Hospital Name *</label>
                            <input type="text" id="hospitalName" placeholder="Enter the official hospital name" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="city">City *</label>
                                <select id="city" required>
                                    <option value="">Select city</option>
                                    <option>Metropolis</option>
                                    <option>Gotham</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Contact Phone *</label>
                                <input type="tel" id="phone" placeholder="Enter contact phone number" required />
                            </div>
                        </div>
                         <div className="form-group">
                            <label htmlFor="address">Full Address *</label>
                            <textarea id="address" placeholder="Enter the full street address of the hospital" required />
                        </div>
                    </div>
                    
                    <div className="form-section">
                        <div className="form-section-header">
                            <h3>Account Credentials</h3>
                        </div>
                         <div className="form-group">
                            <label htmlFor="email">Official Email Address *</label>
                            <input type="email" id="email" placeholder="Enter a valid email for the account" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="password">Password *</label>
                                <input type="password" id="password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password *</label>
                                <input type="password" id="confirmPassword" required />
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Register Hospital</button>
                    </div>
                </form>
            </div>

            <div className="tips-box" style={{ maxWidth: '700px', margin: '32px auto 0 auto' }}>
                <h4>Registration Requirements</h4>
                <ul>
                    <li>Must be a licensed and accredited medical facility.</li>
                    <li>Provide a valid contact email for verification and communication.</li>
                    <li>Ensure the provided address and phone number are accurate for donor coordination.</li>
                </ul>
            </div>
        </div>
    );
};
