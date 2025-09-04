import React from 'react';

// Assuming CalendarIcon exists or is added

// Mock Data - In a real app, this would come from an API
const donors = [
    { name: 'Alice Johnson', bloodType: 'A+', city: 'Metropolis', phone: '111-222-3333', lastDonation: '7/1/2025', available: true },
    { name: 'Bob Smith', bloodType: 'B+', city: 'Metropolis', phone: '222-333-4444', lastDonation: '6/15/2025', available: true },
    { name: 'Charlie Davis', bloodType: 'O-', city: 'Metropolis', phone: '333-444-5555', lastDonation: 'N/A', available: true },
    { name: 'Diana Prince', bloodType: 'AB+', city: 'Gotham', phone: '444-555-6666', lastDonation: '8/1/2025', available: true },
    { name: 'Ethan Hunt', bloodType: 'O+', city: 'Gotham', phone: '555-666-7777', lastDonation: '7/20/2025', available: true }
];

export const DonorPage = () => {
  
    return (
        <div className="container page-container">
            <div className="page-header">
                <div>
                    <h1>Donor Directory</h1>
                    <p>Find and connect with blood donors in your area</p>
                </div>
            </div>
            <div className="filter-bar">
                <input type="search" placeholder="Search donors..."/>
                <select>
                    <option>All Blood Groups</option>
                    <option>A+</option>
                    <option>O-</option>
                </select>
                <select>
                    <option>All Cities</option>
                    <option>Metropolis</option>
                    <option>Gotham</option>
                </select>
                <span>{donors.length} donors found</span>
            </div>
            <div className="card-grid">
                {donors.map((donor, index) => (
                    <div className="donor-card" key={index}>
                        <div className="donor-card-header">
                            <h3>{donor.name}</h3>
                            {donor.available && <span className="status-badge">Available</span>}
                        </div>
                        <p className="donor-info"><strong>{donor.bloodType}</strong> - {donor.city}</p>
                        <p className="donor-info">{donor.phone}</p>
                        <p className="donor-info">Last donation: {donor.lastDonation}</p>
                        <button className="btn btn-primary" style={{width: '100%', marginTop: '16px'}}>Contact Donor</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

