import React from 'react';
import { LogoIcon } from './Icons';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



export const Header = () =>{ 
    const navigate = useNavigate();
    return (
    <header className="header">
        <div className="container header-container">
            <Link to="/" className='lifelink-main-heading-style'>
            <div className="logo" >
                <LogoIcon />
                <h1 >LifeLink</h1>
            </div>
            </Link>
            <nav className="nav-links">
           <Link to="/" className='lifelink-main-heading-style'>    <a href="#home" className="nav-link active">Home</a></Link> 
              <Link to="/donor" className='lifelink-main-heading-style'>       <a href="#find" className="nav-link">Find Donors</a> </Link>
               <Link to="/hospitaldashboard" className='lifelink-main-heading-style'>      <a href="#requests" className="nav-link">Blood Requests</a> </Link>
                <Link to="/my-request" className='lifelink-main-heading-style'>       <a href="#my-requests" className="nav-link">My Requests</a> </Link>
            </nav>
            <div className="header-actions">
                <button onClick={()=> navigate('/signin')} className="btn btn-secondary">Login</button>
                <button onClick={()=> navigate('/signup')} className="btn btn-primary">Register</button>
            </div>
        </div>
    </header>
); }