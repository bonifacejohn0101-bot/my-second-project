import React from 'react';
import { NavLink } from 'react-router';

const signin = () => {
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
            alt="FASCO Fashion" 
            className="w-100 h-100"
            style={{ objectFit: 'cover', minHeight: '550px' }}
          />
        </div>

        {/* Right Side: Auth Form */}
        <div className="col-md-6 d-flex flex-column justify-content-between p-5">
          
          {/* Top Brand Logo */}
          <div className="text-center my-3">
            <h1 className="fw-serif display-5 tracking-wide" style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
              FASCO
            </h1>
          </div>

          {/* Form Content Wrapper */}
          <div className="mx-auto w-100" style={{ maxWidth: '360px' }}>
            <h5 className="text-center mb-4 fw-semibold text-dark" style={{ fontSize: '1.1rem' }}>
              Sign In To FASCO
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
                    <img src='src/assets/image 940.png'
                     className='me-2'
                     style={{width: '16px'}}
                     />
                  <i className="bi bi-envelope-fill text-danger me-2" style={{ fontSize: '16px' }}></i>
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

            {/* Credential Inputs */}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <input 
                  type="email" 
                  className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                  placeholder="Email" 
                  style={{ borderBottom: '1px solid #ccc', fontSize: '0.9rem' }}
                />
              </div>
              <div className="mb-4">
                <input 
                  type="password" 
                  className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                  placeholder="Password" 
                  style={{ borderBottom: '1px solid #ccc', fontSize: '0.9rem' }}
                />
              </div>

              {/* Action Buttons */}
              <button 
                type="submit" 
                className="btn btn-dark w-100 py-2.5 mb-2 fw-semibold"
                style={{ borderRadius: '8px', backgroundColor: '#000', fontSize: '0.9rem' }}
              >
                Sign In
              </button>
              
              <NavLink to='signup' 
                type="button" 
                className="btn btn-outline-primary w-100 py-2.5 mb-3 fw-semibold"
                style={{ borderRadius: '8px', border: '1px solid #4A60A1', color: '#4A60A1', fontSize: '0.9rem', backgroundColor: 'transparent' }}
              >
                signin
              </NavLink>

              {/* Forgot Password Link */}
              <div className="text-end">
                <NavLink to='/ForgetPassword' className="text-decoration-none fw-semibold" style={{ color: '#4A60A1', fontSize: '0.85rem' }}>
                  Forgot Password?
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

export default signin;