import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircleIcon, HospitalBuildingIcon } from '../components/Icons';

export const CreateRequestPage = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("New blood request form submitted!");
        // In a real application, you would send the form data to a server.
        // For now, we'll navigate back to the hospital dashboard on success.
        navigate('/app/requests');
    };

    return (
        <div className="container page-container">
            <div className="page-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 32px auto' }}>
                <h1>Create New Blood Request</h1>
                <p>Submit a new request to find blood donors in your area</p>
            </div>

            <div className="form-card">
                <form onSubmit={handleFormSubmit}>
                    {/* Hospital Information Section */}
                    <div className="form-section">
                        <div className="form-section-header">
                            <HospitalBuildingIcon />
                            <h3>Hospital Information</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hospitalName">Hospital Name *</label>
                            <input type="text" id="hospitalName" placeholder="Enter hospital name" required />
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

                    {/* Blood Request Details Section */}
                    <div className="form-section">
                         <div className="form-section-header">
                            <PlusCircleIcon />
                            <h3>Blood Request Details</h3>
                        </div>
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
                                <label htmlFor="unitsRequired">Units Required *</label>
                                <input type="number" id="unitsRequired" placeholder="Enter number of units" required min="1" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="urgency">Urgency Level *</label>
                            <select id="urgency" required>
                                <option value="">Select urgency level</option>
                                <option>Critical</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="additionalInfo">Additional Information (Optional)</label>
                            <textarea id="additionalInfo" placeholder="Provide context like patient condition, surgery details, or any special requirements..."></textarea>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Create Request</button>
                    </div>
                </form>
            </div>
            
            <div className="tips-box" style={{ maxWidth: '700px', margin: '32px auto 0 auto' }}>
                <h4>Request Tips</h4>
                <ul>
                    <li>Be specific about urgency levels to help donors prioritize.</li>
                    <li>Include relevant medical details in the description.</li>
                    <li>Monitor your request regularly for new pledges.</li>
                    <li>Contact donors promptly once they pledge.</li>
                </ul>
            </div>
        </div>
    );
};

