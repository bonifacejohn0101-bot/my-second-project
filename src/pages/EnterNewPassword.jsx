import React from 'react';
import { NavLink } from 'react-router';

const EnterNewPassword = () => {
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
            src="src/assets/Rectangle 19280.png" 
            alt="FASCO Fashion Banner" 
            className="w-100 h-100"
            style={{ objectFit: 'cover', minHeight: '550px' }}
          />
        </div>

        {/* Right Side: Reset Password Form */}
        <div className="col-md-6 d-flex flex-column justify-content-between p-5">
          
          {/* Top Brand Logo */}
          <div className="text-center my-3">
            <h1 className="fw-serif display-5 tracking-wide" style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
              FASCO
            </h1>
          </div>

          {/* Form Content Wrapper */}
          <div className="mx-auto w-100" style={{ maxWidth: '380px' }}>
            <h5 className="text-start mb-4 fw-semibold text-dark" style={{ fontSize: '1.1rem' }}>
              Enter Your New Password
            </h5>

            {/* Password Reset Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              
              {/* New Password Input */}
              <div className="mb-4">
                <input 
                  type="password" 
                  className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                  placeholder="New Password" 
                  style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                />
              </div>

              {/* Confirmation Password Input */}
              <div className="mb-5">
                <input 
                  type="password" 
                  className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                  placeholder="Confirmation Password" 
                  style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                />
              </div>

              {/* Submit Action Button */}
              <button 
                type="submit" 
                className="btn text-white w-100 py-2.5 fw-semibold shadow-sm"
                style={{ 
                  borderRadius: '8px', 
                  backgroundColor: '#5B84E5', 
                  border: 'none',
                  fontSize: '0.9rem' 
                }}
              >
                Submit
              </button>
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

export default EnterNewPassword;