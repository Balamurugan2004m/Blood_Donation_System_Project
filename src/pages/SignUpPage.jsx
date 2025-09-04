import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoIcon } from '../components/Icons';

export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading
    console.log("Sign up form submitted!");
    // In a real app, you would handle user registration here.
    // For now, we'll navigate to the dashboard on successful sign-up.
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
          <button className="auth-toggle-btn" onClick={() => navigate('/signin')}>Sign In</button>
          <button className="auth-toggle-btn active" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
        <form className="auth-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" required />
          </div>
          <div className="form-group">
            <label htmlFor="accountType">Account Type</label>
            <select id="accountType">
              <option>Blood Donor</option>
              <option>Hospital</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
           <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <select id="city">
                <option>Select city</option>
<option>Ambur</option>
<option>Arakkonam</option>
<option>Arani</option>
<option>Aruppukkottai</option>
<option>Avadi</option>
<option>Chennai</option>
<option>Chidambaram</option>
<option>Coimbatore</option>
<option>Cuddalore</option>
<option>Dharapuram</option>
<option>Dharmapuri</option>
<option>Dindigul</option>
<option>Erode</option>
<option>Gobichettipalayam</option>
<option>Hosur</option>
<option>Kanchipuram</option>
<option>Karaikudi</option>
<option>Kovilpatti</option>
<option>Krishnagiri</option>
<option>Kumbakonam</option>
<option>Madurai</option>
<option>Mannargudi</option>
<option>Mayiladuthurai</option>
<option>Nagercoil</option>
<option>Nagapattinam</option>
<option>Namakkal</option>
<option>Neyveli</option>
<option>Palani</option>
<option>Panruti</option>
<option>Paramakudi</option>
<option>Pattukkottai</option>
<option>Perambalur</option>
<option>Periyakulam</option>
<option>Pollachi</option>
<option>Pudukkottai</option>
<option>Rajapalayam</option>
<option>Rasipuram</option>
<option>Salem</option>
<option>Sankarankovil</option>
<option>Sattur</option>
<option>Sivakasi</option>
<option>Tambaram</option>
<option>Thanjavur</option>
<option>Thiruvarur</option>
<option>Thoothukudi</option>
<option>Tiruchengode</option>
<option>Tiruchirappalli</option>
<option>Tiruppur</option>
<option>Tiruvannamalai</option>
<option>Tenkasi</option>
<option>Udumalaipettai</option>
<option>Vaniyambadi</option>
<option>Vellore</option>
<option>Villupuram</option>
<option>Virudhunagar</option>
</select>
          </div>
           <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select id="bloodGroup">
              <option>Select blood group</option>
              <option>A+</option> <option>A-</option>
              <option>B+</option> <option>B-</option>
              <option>AB+</option> <option>AB-</option>
              <option>O+</option> <option>O-</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" required />
          </div>
          <button type="submit" className="btn btn-primary auth-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

