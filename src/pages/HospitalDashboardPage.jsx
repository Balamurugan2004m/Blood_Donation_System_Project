import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircleIcon, ClipboardIcon } from '../components/Icons';

// Mock Data for the stat cards
const stats = [
    { label: 'Total Requests', value: '0', color: '#3B82F6' },
    { label: 'Open Requests', value: '0', color: '#F59E0B' },
    { label: 'Fulfilled', value: '0', color: '#16A34A' },
    { label: 'Units Needed', value: '0', color: '#EF4444' },
];

export const HospitalDashboardPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container page-container">
            <div className="page-header">
                <div>
                    <h1>Hospital Dashboard</h1>
                    <p>Manage your blood requests and track donations</p>
                </div>
                <br/>
                <button className="btn btn-primary" onClick={() => navigate('/create-request')}>
                    <PlusCircleIcon />
                    New Request
                </button>
            </div>

            {/* Stat Cards */}
            <div className="dashboard-stat-grid">
                {stats.map(stat => (
                    <div className="dashboard-stat-card" key={stat.label}>
                        <div className="stat-card-content">
                            <p className="stat-label">{stat.label}</p>
                            <p className="stat-value">{stat.value}</p>
                        </div>
                        <div className="stat-card-accent" style={{ backgroundColor: stat.color }}></div>
                    </div>
                ))}
            </div>

            {/* Empty State Message */}
            <div className="empty-state-container">
                <div className="empty-state-icon">
                    <ClipboardIcon />
                </div>
                <h3>No requests yet</h3>
                <p>Create your first blood request to get started</p>
                <button className="btn btn-primary" onClick={() => navigate('/create-request')}>
                    <PlusCircleIcon />
                    Create New Request
                </button>
            </div>
        </div>
    );
};
