import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircleIcon, ClipboardIcon } from '../components/Icons';

// Mock Data - In a real app, this would be fetched for the logged-in user
const myRequests = [
    { id: 1, hospital: 'City Hospital', bloodType: 'O+', units: 2, date: '9/2/2025', status: 'Fulfilled' },
    { id: 2, hospital: 'Green Valley Hospital', bloodType: 'A-', units: 3, date: '9/4/2025', status: 'Pending' },
];

// This is the component for a single request item in the list
const RequestItem = ({ request }) => {
    const getStatusClass = (status) => {
        if (status === 'Fulfilled') return 'status-fulfilled';
        if (status === 'Pending') return 'status-pending';
        return '';
    };

    return (
        <div className="request-list-item">
            <div className="request-item-main">
                <span className={`status-dot ${getStatusClass(request.status)}`}></span>
                <div>
                    <h4>{request.units} Units of {request.bloodType}</h4>
                    <p>{request.hospital} &bull; {request.date}</p>
                </div>
            </div>
            <div className="request-item-details">
                <span className={`request-status-badge ${getStatusClass(request.status)}`}>
                    {request.status}
                </span>
                <button className="btn btn-secondary">View Details</button>
            </div>
        </div>
    );
};


export const MyRequestsPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container page-container">
            <div className="page-header">
                <div>
                    <h1>My Requests</h1>
                    <p>Track and manage your blood donation requests</p>
                </div>
                <br/>
                <button className="btn btn-primary" onClick={() => navigate('/create-request')}>
                    <PlusCircleIcon />
                    Create New Request
                </button>
            </div>

            <div className="request-list-container">
                {myRequests.length > 0 ? (
                    myRequests.map(request => <RequestItem key={request.id} request={request} />)
                ) : (
                    <div className="empty-state-container">
                        <div className="empty-state-icon"><ClipboardIcon /></div>
                        <h3>You haven't made any requests yet</h3>
                        <p>Create your first blood request to see it here</p>
                    </div>
                )}
            </div>
        </div>
    );
};
