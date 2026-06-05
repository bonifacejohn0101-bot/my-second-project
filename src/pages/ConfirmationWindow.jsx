import React from 'react';

const ConfirmationWindow = () => {
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

        {/* Right Side: Confirmation Form */}
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
              Enter The Confirmation Code
            </h5>

            {/* Input Form */}
            <form onSubmit={(e) => e.preventDefault()}>
              
              {/* Single Underlined Confirmation Code Input */}
              <div className="mb-5">
                <input 
                  type="text" 
                  className="form-control border-top-0 border-start-0 border-end-0 rounded-0 px-0 pb-2 shadow-none" 
                  placeholder="Confirmation Code" 
                  style={{ borderBottom: '1px solid #ccc', fontSize: '0.85rem' }}
                />
              </div>

              {/* Action Button */}
              <button 
                type="submit" 
                className="btn btn-dark w-100 py-2.5 mb-3 fw-semibold shadow"
                style={{ borderRadius: '8px', backgroundColor: '#000', fontSize: '0.9rem' }}
              >
                Recover Account
              </button>
              
              {/* Resend Code Link */}
              <div className="text-center mt-3">
                <span className="text-muted small">Didn't receive Confirmation Code? </span>
                <a href="#resend" className="text-decoration-none fw-semibold small" style={{ color: '#4A60A1' }}>
                  Resend Now
                </a>
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

export default ConfirmationWindow;