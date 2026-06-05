import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutPage = () => {
  // Contact and Shipping Form State
  const [formData, setFormData] = useState({
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    saveInfo: false,
    cardNumber: '',
    expDate: '',
    securityCode: '',
    cardName: '',
    savePaymentInfo: false
  });

  // E-commerce Checkout State
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // value in dollars
  
  const lineItem = {
    name: 'Mini Dress With Ruffled Straps',
    color: 'Red',
    price: 100.00,
    quantity: 1,
    img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=150'
  };

  const subtotal = lineItem.price * lineItem.quantity;
  const shipping = 40.00;
  const total = subtotal + shipping - appliedDiscount;

  // Form input changes handler
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Basic coupon application simulation logic
  const handleApplyDiscount = (e) => {
    e.preventDefault();
    if (discountCode.trim().toUpperCase() === 'WELCOME10') {
      setAppliedDiscount(10.00);
      alert('Promo Code applied successfully: $10.00 Off!');
    } else {
      alert('Invalid code entry. Try: WELCOME10');
    }
  };

  const handleOrderSubmission = (e) => {
    e.preventDefault();
    alert('Processing payment transaction via Secure Gateway node...');
  };

  return (
    <div className="bg-white min-vh-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      {/* --- SITE CENTRIC HEADER DISPLAY TITLE --- */}
      <header className="py-4 border-bottom text-center bg-white">
        <h1 className="h3 fw-normal mb-0 tracking-wide text-dark" style={{ fontFamily: "'Volkhov', serif", fontSize: '1.75rem' }}>
          FASCO Demo Checkout
        </h1>
      </header>

      <div className="container-fluid px-0">
        <div className="row g-0 min-vh-100">
          
          {/* =========================================================================
              LEFT COLUMN: ACCORDION USER PROFILE & SECURE TRANSACTIONS FORMS
              ========================================================================= */}
          <div className="col-lg-7 px-4 px-md-5 py-5 border-end order-2 order-lg-1">
            <form onSubmit={handleOrderSubmission} className="mx-auto" style={{ maxWidth: '580px' }}>
              
              {/* --- SECTION 1: CONTACT IDENTITY METRICS --- */}
              <div className="mb-5 text-start">
                <div className="d-flex justify-content-between align-items-baseline mb-3">
                  <h2 className="h4 fw-normal text-dark section-header-title">Contact</h2>
                  <span className="small text-muted">
                    Have an account? <a href="#login" className="text-decoration-none text-primary custom-link-node">Create Account</a>
                  </span>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="email" 
                    className="form-control rounded-1 custom-input-field" 
                    id="emailInput" 
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="emailInput" className="text-muted small">Email Address</label>
                </div>
              </div>

              {/* --- SECTION 2: PHYSICAL DELIVERY METRICS --- */}
              <div className="mb-5 text-start">
                <h2 className="h4 fw-normal text-dark mb-3 section-header-title">Delivery</h2>
                
                <div className="form-floating mb-3">
                  <select 
                    className="form-select rounded-1 custom-input-field" 
                    id="countrySelect"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Country / Region</option>
                    <option value="NG">Nigeria</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                  <label htmlFor="countrySelect" className="text-muted small">Country / Region</label>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control rounded-1 custom-input-field" 
                        id="firstNameInput" 
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="firstNameInput" className="text-muted small">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control rounded-1 custom-input-field" 
                        id="lastNameInput" 
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="lastNameInput" className="text-muted small">Last Name</label>
                    </div>
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control rounded-1 custom-input-field highlight-focus-border" 
                    id="addressInput" 
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="addressInput" className="text-muted small">Address</label>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control rounded-1 custom-input-field" 
                        id="cityInput" 
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="cityInput" className="text-muted small">City</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control rounded-1 custom-input-field" 
                        id="postalInput" 
                        placeholder="Postal Code"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="postalInput" className="text-muted small">Postal Code</label>
                    </div>
                  </div>
                </div>

                <div className="form-check d-flex align-items-center gap-2">
                  <input 
                    type="checkbox" 
                    className="form-check-input rounded-0 border-dark shadow-none cursor-pointer custom-check-node" 
                    id="saveInfoCheck"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label text-muted small cursor-pointer" htmlFor="saveInfoCheck">
                    Save This Info For Future
                  </label>
                </div>
              </div>

              {/* --- SECTION 3: MERCHANT PAYMENT TERMINAL --- */}
              <div className="mb-5 text-start">
                <h2 className="h4 fw-normal text-dark mb-3 section-header-title">Payment</h2>
                
                <div className="border rounded bg-light bg-opacity-25 overflow-hidden">
                  
                  {/* Select Interface Header Option Row */}
                  <div className="p-3 bg-light border-bottom d-flex justify-content-between align-items-center">
                    <span className="small text-dark fw-medium">Credit Card</span>
                    <span className="fs-6">💳</span>
                  </div>

                  {/* Nested Credit card internal matrix input elements */}
                  <div className="p-3 bg-white">
                    <div className="form-floating mb-3 position-relative">
                      <input 
                        type="text" 
                        className="form-control rounded-1 custom-input-field text-start" 
                        id="cardNumInput" 
                        placeholder="Card Number"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="cardNumInput" className="text-muted small">Card Number</label>
                      <span className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted fs-6">🔒</span>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-6">
                        <div className="form-floating">
                          <input 
                            type="text" 
                            className="form-control rounded-1 custom-input-field" 
                            id="expInput" 
                            placeholder="Expiration Date"
                            name="expDate"
                            value={formData.expDate}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="expInput" className="text-muted small">Expiration Date</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-floating">
                          <input 
                            type="text" 
                            className="form-control rounded-1 custom-input-field" 
                            id="cvvInput" 
                            placeholder="Security Code"
                            name="securityCode"
                            value={formData.securityCode}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="cvvInput" className="text-muted small">Security Code</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control rounded-1 custom-input-field" 
                        id="cardNameInput" 
                        placeholder="Card Holder Name"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                      />
                      <label htmlFor="cardNameInput" className="text-muted small">Card Holder Name</label>
                    </div>
                  </div>

                </div>

                <div className="form-check d-flex align-items-center gap-2 mt-4">
                  <input 
                    type="checkbox" 
                    className="form-check-input rounded-0 border-dark shadow-none cursor-pointer custom-check-node" 
                    id="savePaymentCheck"
                    name="savePaymentInfo"
                    checked={formData.savePaymentInfo}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label text-muted small cursor-pointer" htmlFor="savePaymentCheck">
                    Save This Info For Future
                  </label>
                </div>
              </div>

              {/* Secure Final Action Submission Trigger */}
              <button 
                type="submit" 
                className="btn btn-dark w-100 py-3 text-uppercase rounded-1 font-monospace shadow-sm tracking-wide checkout-submit-btn"
                style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}
              >
                Pay Now
              </button>

              <div className="text-center mt-4 border-top pt-3 text-muted" style={{ fontSize: '0.68rem' }}>
                Copyright © 2022 FASCO . All Rights Reserved.
              </div>

            </form>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: FIXED CART SUMMARY DECK BREAKDOWN
              ========================================================================= */}
          <div className="col-lg-5 bg-light bg-opacity-50 px-4 px-md-5 py-5 order-1 order-lg-2">
            <div className="mx-auto" style={{ maxWidth: '420px' }}>
              
              {/* Product list array stack rows items mapping */}
              <div className="d-flex align-items-center justify-content-between text-start mb-4 pb-4 border-bottom">
                <div className="d-flex gap-3 align-items-center">
                  <div className="position-relative bg-white rounded overflow-hidden border p-1 flex-shrink-0" style={{ width: '64px', height: '64px' }}>
                    <img src={lineItem.img} alt={lineItem.name} className="w-100 h-100 object-fit-cover rounded" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger badge-counter" style={{ padding: '5px 8px', fontSize: '0.65rem' }}>
                      {lineItem.quantity}
                    </span>
                  </div>
                  <div>
                    <h4 className="h6 text-dark fw-semibold mb-0.5" style={{ fontSize: '0.85rem' }}>{lineItem.name}</h4>
                    <span className="text-muted small">Color: {lineItem.color}</span>
                  </div>
                </div>
                <span className="fw-medium text-dark small">${subtotal.toFixed(2)}</span>
              </div>

              {/* Dynamic Discount Apply Input Module Block Element */}
              <form onSubmit={handleApplyDiscount} className="d-flex gap-2.5 pb-4 mb-4 border-bottom">
                <input 
                  type="text" 
                  className="form-control rounded-1 px-3 py-2.5 bg-white border border-light-subtle small shadow-none font-monospace custom-discount-input" 
                  placeholder="Discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  style={{ fontSize: '0.85rem' }}
                />
                <button 
                  type="submit" 
                  className="btn btn-dark px-4 rounded-1 text-uppercase small font-monospace tracking-wide discount-apply-btn"
                  style={{ fontSize: '0.8rem' }}
                >
                  Apply
                </button>
              </form>

              {/* Ledgers financial calculation balance presentation sheet rows */}
              <div className="d-flex flex-column gap-2 text-muted small pb-4 mb-4 border-bottom text-start">
                <div className="d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span className="text-dark fw-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                {appliedDiscount > 0 && (
                  <div className="d-flex justify-content-between text-success fw-medium">
                    <span>Discount Code Applied</span>
                    <span>-${appliedDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="d-flex justify-content-between">
                  <span>Shipping</span>
                  <span className="text-dark fw-medium">${shipping.toFixed(2)}</span>
                </div>
              </div>

              {/* Final ledger layout calculation block row */}
              <div className="d-flex justify-content-between align-items-center text-start">
                <span className="fw-medium text-dark-emphasis fs-6">Total</span>
                <span className="fw-bold text-dark fs-5 font-monospace">${total.toFixed(2)}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;