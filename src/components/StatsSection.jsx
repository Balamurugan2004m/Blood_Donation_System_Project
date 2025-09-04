import React from 'react';
import { UsersIcon, HospitalIcon, HeartIcon, ShieldIcon } from './Icons';

const statsData = [
    { icon: <UsersIcon />, value: "2,847", label: "Active Donors", color: "#DC2626" },
    { icon: <HospitalIcon />, value: "156", label: "Partner Hospitals", color: "#16A34A" },
    { icon: <HeartIcon />, value: "12,340", label: "Lives Saved", color: "#DC2626" },
    { icon: <ShieldIcon />, value: "99.9%", label: "Safe Donations", color: "#16A34A" },
];

export const StatsSection = () => (
    <section className="stats-section">
        <div className="container stats-container">
            {statsData.map((stat, index) => (
                <div className="stat-card" key={index}>
                    <div className="stat-icon-wrapper" style={{ color: stat.color }}>
                        {stat.icon}
                    </div>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                </div>
            ))}
        </div>
    </section>
);