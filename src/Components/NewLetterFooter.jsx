import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsletterFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', fontFamily: "'Poppins', sans-serif" }}>
      
      {/* --- SECTION 1: NEWSLETTER LAYER --- */}
      <section className="position-relative overflow-hidden border-bottom py-5 py-lg-0">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-center">
            
            {/* Left Column: Symmetrical Male Model Showcase */}
            <div className="col-12 col-md-3 d-none d-md-block text-start position-relative">
              <img 
                src="src/assets/image 2.png" 
                alt="Male Fashion Model" 
                className="img-fluid object-fit-contain fashion-model-img"
                style={{ maxHeight: '520px', transform: 'scaleX(-1)' }} // Mirroring aesthetic layout
              />
            </div>

            {/* Middle Column: Centralized Action Box */}
            <div className="col-12 col-md-6 text-center px-4 py-5 position-relative z-2">
              <div className="mx-auto" style={{ maxWidth: '580px' }}>
                <h2 
                  className="fw-normal mb-3 text-dark" 
                  style={{ fontFamily: "'Volkhov', serif", fontSize: '2.65rem', letterSpacing: '0.5px' }}
                >
                  Subscribe To Our Newsletter
                </h2>
                
                <p className="text-muted small lh-lg mb-4 px-md-3" style={{ fontSize: '0.85rem' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
                </p>

                {/* Submitting Form Engine matching Screenshot 2026-05-28 at 18.14.08.png */}
                <form onSubmit={handleSubscribe} className="mt-4">
                  <div className="mb-4">
                    <input 
                      type="email" 
                      className="form-control text-muted bg-white border-0 py-3 px-4 shadow-sm subscription-input"
                      placeholder="michael@ymail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ borderRadius: '4px', fontSize: '0.95rem' }}
                    />
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="btn btn-dark btn-lg px-5 py-2.5 rounded-2 fw-medium tracking-wide shadow-lg hover-lift-btn"
                      style={{ fontSize: '0.85rem', letterSpacing: '0.5px', minWidth: '180px' }}
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column: Symmetrical Female Model Showcase */}
            <div className="col-12 col-md-3 d-none d-md-block text-end position-relative">
              <img 
                src="src/assets/image 3.png" 
                alt="Female Fashion Model" 
                className="img-fluid object-fit-contain fashion-model-img"
                style={{ maxHeight: '520px' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: BRAND CORPORATE FOOTER --- */}
      <footer className="bg-white py-4 mt-2">
        <div className="container-xl px-4">
          <div className="row align-items-center justify-content-between g-3">
            
            {/* Corporate Logo Display */}
            <div className="col-12 col-md-3 text-center text-md-start">
              <a 
                className="text-decoration-none fw-bold fs-2 text-dark" 
                href="#home" 
                style={{ fontFamily: "'Volkhov', serif", letterSpacing: '1px' }}
              >
                FASCO
              </a>
            </div>

            {/* Navigational Link Tree Context */}
            <div className="col-12 col-md-9 text-center text-md-end">
              <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-4 footer-links">
                <a href="#support" className="text-dark-emphasis text-decoration-none small">Support Center</a>
                <a href="#invoicing" className="text-dark-emphasis text-decoration-none small">Invoicing</a>
                <a href="#contract" className="text-dark-emphasis text-decoration-none small">Contract</a>
                <a href="#careers" className="text-dark-emphasis text-decoration-none small">Careers</a>
                <a href="#blog" className="text-dark-emphasis text-decoration-none small">Blog</a>
                <a href="#faqs" className="text-dark-emphasis text-decoration-none small">FAQ,s</a>
              </div>
            </div>

          </div>

          <hr className="my-4 opacity-10 border-secondary" />

          {/* Copyright Sub-clause */}
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted mb-0" style={{ fontSize: '0.72rem', letterSpacing: '0.3px' }}>
                Copyright © 2022 Xpro . All Rights Reseved.
              </p>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default NewsletterFooter;