import React from 'react';
import { NavLink } from 'react-router';

const SignUp = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      {/* Main Card Container */}
      <div 
        className="row w-100 shadow-sm bg-white overflow-hidden" 
        style={{ maxWidth: '1000px', borderRadius: '24px' }}
      >
        
        {/* Left Side: Image Banner */}
        <div className="col-md-6 p-0 d-none d-md-block">
          <img 
            src="src/assets/Rectangle 19280 copy.png" 
            alt="FASCO Sign Up Banner" 
            className="w-100 h-100"
            style={{ objectFit: 'cover', minHeight: '600px' }}
          />
        </div>

        {/* Right Side: Sign Up Form */}
        <div className="col-md-6 d-flex flex-column justify-content-between p-5">
          
          {/* Top Brand Logo */}
          <div className="text-center my-2">
            <h1 className="fw-serif display-5 tracking-wide" style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
              FASCO
            </h1>
          </div>

          {/* Form Content Wrapper */}
          <div className="mx-auto w-100" style={{ maxWidth: '420px' }}>
            <h5 className="text-center mb-4 fw-semibold text-dark" style={{ fontSize: '1.1rem' }}>
              Create Account
            </h5>

            {/* Social OAuth Buttons */}
            <div className="row g-2 mb-4">
              <div className="col-6">
                <button className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center btn-sm text-nowrap" style={{ borderColor: '#dcdcdc', borderRadius: '6px', fontSize: '0.85rem' }}>
                  <img 
                    src="src/assets/image 939.png" 
                    alt="Google" 
                    className="me-2" 
                    style={{ width: '16px' }} 
                  />
                  Sign up with Google
                </button>
              </div>
              <div className="col-6">
                <button className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center btn-sm text-nowrap" style={{ borderColor: '#dcdcdc', borderRadius: '6px', fontSize: '0.85rem' }}>
                  <img src='src/assets/image 940.png' alt="_logo.svg" className='me-2' style={{width: '16px'}} />
                  Sign up with Email
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="d-flex align-items-center my-4">
              <hr className="flex-grow-1 text-muted" />
              <span className="mx-3 text-muted fw-bold small" style={{ letterSpacing: '2px' }}>— OR —</span>
              <hr className="flex-grow-1 text-muted" />
            </div>

            {/* Registration Form Grid */}
            <form onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1: First & Last Name */}
              <div className="row mb-4">
                <div className="col-6">
                  <input 
                    type="text" 
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                    placeholder="First Name" 
                    style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                  />
                </div>
                <div className="col-6">
                  <input 
                    type="text" 
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                    placeholder="Last Name" 
                    style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="row mb-4">
                <div className="col-6">
                  <input 
                    type="email" 
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                    placeholder="Email Address" 
                    style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                  />
                </div>
                <div className="col-6">
                  <input 
                    type="tel" 
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                    placeholder="Phone Number" 
                    style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              {/* Row 3: Password & Confirm Password */}
              <div className="row mb-5">
                <div className="col-6">
                  <input 
                    type="password" 
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                    placeholder="Password" 
                    style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                  />
                </div>
                <div className="col-6">
                  <input 
                    type="password" 
                    className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                    placeholder="Confirm Password" 
                    style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <button 
                type="submit" 
                className="btn btn-dark w-100 py-2.5 mb-3 fw-semibold shadow"
                style={{ borderRadius: '8px', backgroundColor: '#000', fontSize: '0.9rem' }}
              >
                Create Account
              </button>
              
              {/* Login Link */}
              <div className="text-center mt-3">
                <span className="text-muted small">Already have an account? </span>
                <NavLink to='Signin'  className="text-decoration-none fw-semibold small" style={{ color: '#4A60A1' }}>
                  Login
                </NavLink>
              </div>
            </form>
          </div>

          {/* Footer Terms */}
          <div className="text-end mt-4">
            <small className="text-muted" style={{ fontSize: '0.75rem', cursor: 'pointer' }}>
              FASCO Terms & Codnitions
            </small>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;