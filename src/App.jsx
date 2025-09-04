import React from 'react';

// Import components
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import {Header } from "./components/Header";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { DonorPage } from "./pages/DonorPage";
import { HospitalRegistrationPage } from "./pages/HospitalRegistrationPage";
import { HospitalDashboardPage } from "./pages/HospitalDashboardPage";
import { CreateRequestPage } from "./pages/CreateRequestPage";
import { MyRequestsPage } from "./pages/MyRequestsPage";
import { RegisterDonorPage } from "./pages/RegisterDonorPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import styles
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Header />
        <main>
          <Routes>
            {/* Default page (your landing sections) */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <StatsSection />
                  <HowItWorksSection />
                  <CtaSection />
                </>
              }
            />
            {/* Login page */}
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/donor" element={<DonorPage />} />
            <Route path="/hospitalportal" element={<HospitalRegistrationPage />} />
            <Route path="/hospitaldashboard" element={<HospitalDashboardPage />} />
            <Route path="/create-request" element={<CreateRequestPage />} />
            <Route path="/my-request" element={<MyRequestsPage />} />
            <Route path="/register-as-donor" element={<RegisterDonorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
