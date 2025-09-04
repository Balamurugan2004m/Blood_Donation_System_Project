import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterDonorIcon } from '../components/Icons'; // This is the icon for the form header

export const RegisterDonorPage = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Donor registration form submitted!");
        // In a real app, you would handle the registration logic here.
        // For now, we'll navigate to the donor directory on success.
        navigate('/app/donors');
    };

    return (
        <div className="container page-container">
            <div className="page-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 32px auto' }}>
                <h1>Become a Blood Donor</h1>
                <p>Join our community of life-saving heroes</p>
            </div>

            <div className="form-card">
                <form onSubmit={handleFormSubmit}>
                    {/* Donor Registration Section Header */}
                    <div className="form-section-header" style={{justifyContent: 'center', borderBottom: 'none', marginBottom: '24px'}}>
                        <RegisterDonorIcon />
                        <h3>Donor Registration</h3>
                    </div>
                    
                    {/* Personal Information Section */}
                    <div className="form-section">
                        <h4>Personal Information</h4>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name *</label>
                            <input type="text" id="fullName" placeholder="Enter your full name" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input type="tel" id="phone" placeholder="Enter your phone number" required />
                            </div>
                        </div>
                    </div>

                    {/* Medical Information Section */}
                    <div className="form-section">
                        <h4>Medical Information</h4>
                         <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="bloodGroup">Blood Group *</label>
                                <select id="bloodGroup" required>
                                    <option value="">Select blood group</option>
                                    <option>A+</option> <option>A-</option>
                                    <option>B+</option> <option>B-</option>
                                    <option>AB+</option> <option>AB-</option>
                                    <option>O+</option> <option>O-</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City *</label>
                                <select id="city" required>
                                    <option value="">Select city</option>
                                    <option>Metropolis</option>
                                    <option>Gotham</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastDonation">Last Donation Date (Optional)</label>
                            <input type="date" id="lastDonation" />
                        </div>
                        <div className="form-group-checkbox">
                            <input type="checkbox" id="isAvailable" defaultChecked />
                            <label htmlFor="isAvailable">Available for donations</label>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Register as Donor</button>
                    </div>
                </form>
            </div>
            
            <div className="tips-box" style={{ maxWidth: '700px', margin: '32px auto 0 auto' }}>
                <h4>Donation Requirements</h4>
                <ul>
                    <li>Age: 18-65 years old</li>
                    <li>Weight: Minimum 110 lbs (50 kg)</li>
                    <li>Must wait 90 days between whole blood donations</li>
                    <li>No recent tattoos or piercings (12 months)</li>
                    <li>Good overall health condition</li>
                </ul>
            </div>
        </div>
    );
};
