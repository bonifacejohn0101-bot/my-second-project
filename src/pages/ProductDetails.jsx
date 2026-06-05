import {NavLink} from 'react-router';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
  // Gallery Image State

  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch("https://fakestoreapi.com/products/");
      const jsonData = await responce.json();
      setData(jsonData);
      if (jsonData.length > 0) {
        setSelectedProduct(jsonData[0]);
        setActiveImage(jsonData[0].image);
      }
    };
    fetchData();
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=600', // Red/Denim jacket view
    'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600'
  ];
  const [activeImage, setActiveImage] = useState(images[1]);

  // Interactive Configuration States
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Blue');
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const productTitle = selectedProduct?.title || 'Denim Jacket';
  const productPrice = selectedProduct?.price ? `$${selectedProduct.price.toFixed(2)}` : '$39.50';
  const ratingValue = selectedProduct?.rating?.rate || 4.5;
  const ratingCount = selectedProduct?.rating?.count || 3;

  // Configuration Arrays
  const sizes = ['M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Blue', value: '#a9cce3' },
    { name: 'Black', value: '#000000' },
    { name: 'Pink', value: '#f9ebd7' }
  ];

  // Live Flash Sale Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 59, seconds: 47 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        let s = prev.seconds - 1;
        let m = prev.minutes;
        let h = prev.hours;

        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }

        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  return (
    <section className="py-5 bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container-xl px-4 px-md-5">
        <div className="row g-5">
          
          {/* =========================================================================
              LEFT COLUMN: SYMMETRICAL ASYMMETRICAL MEDIA GALLERY
              ========================================================================= */}
          <div className="col-lg-6">
             
            <div className="d-flex gap-3 h-100">
              
              {/* Vertical Side Thumbnail Track */}
              <div className="d-flex flex-column gap-2" style={{ width: '80px', minWidth: '80px' }}>
                {data.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => {
                      setActiveImage(item.image);
                      setSelectedProduct(item);
                    }}
                    className={`ratio ratio-1x1 rounded overflow-hidden cursor-pointer thumbnail-frame border ${
                      activeImage === item.image ? 'border-dark border-2' : 'border-light-subtle'
                    }`}
                  >
                    <img src={item.image} alt={item.title} className="object-fit-cover w-100 h-100" />
                  </div>
                ))}
              </div>

              {/* Main Display Stage Container */}
              <div className="flex-grow-1 bg-light rounded overflow-hidden" style={{ maxHeight: '680px' }}>
            
                <img 
                  src={activeImage} 
                  alt="Denim Jacket Main Display" 
                  className="w-100 h-100 object-fit-cover main-display-node"
                />
              </div>


            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: SPECIFICATION MANAGEMENT & CHECKOUT ACTIONS
              ========================================================================= */}
          <div className="col-lg-6 text-start ps-lg-5">
            
            {/* Breadcrumb Brand Anchor */}
            <span className="text-muted text-uppercase tracking-widest small d-block mb-1" style={{ fontSize: '0.75rem', letterSpacing: '1.5px' }}>
              Fasco
            </span>
            
            {/* Header Product Metadata */}
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h1 className="fw-normal text-dark display-6" style={{ fontFamily: "'Volkhov', serif", fontSize: '2.2rem' }}>
                {productTitle}
              </h1>
              <button 
                onClick={() => setIsWishlist(!isWishlist)}
                className="btn btn-outline-light border rounded-circle d-flex align-items-center justify-content-center p-0 shadow-sm transition-all text-dark" 
                style={{ width: '40px', height: '40px' }}
              >
                {isWishlist ? '★' : '☆'}
              </button>
            </div>

            {/* Rating Stars Cluster */}
            <div className="d-flex align-items-center gap-2 mb-4">
              <div className="text-warning" style={{ fontSize: '0.9rem' }}>
                {Array.from({ length: Math.round(ratingValue) }).map((_, index) => (
                  <span key={index}>★</span>
                ))}{Array.from({ length: 5 - Math.round(ratingValue) }).map((_, index) => (
                  <span key={`empty-${index}`} className="text-muted">★</span>
                ))}
              </div>
              <span className="text-muted small">({ratingCount})</span>
            </div>

            {/* Pricing Panel Presentation */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="fs-3 fw-semibold text-dark">{productPrice}</span>
              <span className="text-muted text-decoration-line-through fs-5">$59.00</span>
              <span className="badge bg-danger text-uppercase px-2.5 py-1.5 font-monospace rounded-1" style={{ fontSize: '0.7rem' }}>
                SAVE 33%
              </span>
            </div>

            {/* Live Social View Counter */}
            <div className="d-flex align-items-center gap-2 text-dark-emphasis mb-4 small">
              <span>👁</span>
              <span>24 people are viewing this right now</span>
            </div>

            {/* Flash Sale Notification Bar Container */}
            <div className="p-3 mb-3 border border-danger border-opacity-10 rounded-1 d-flex justify-content-between align-items-center bg-danger bg-opacity-10">
              <span className="text-danger fw-medium small text-uppercase" style={{ letterSpacing: '0.5px' }}>Hurry up! Sale ends in:</span>
              <div className="d-flex gap-2 align-items-center font-monospace text-danger fw-bold fs-5">
                <span>{formatTime(timeLeft.hours)}</span>:
                <span>{formatTime(timeLeft.minutes)}</span>:
                <span>{formatTime(timeLeft.seconds)}</span>
              </div>
            </div>

            {/* Live Stock Progress Status Bar */}
            <div className="mb-4">
              <div className="d-flex justify-content-between small text-muted mb-1.5">
                <span>Only <strong className="text-dark">{9}</strong> item(s) left in stock!</span>
              </div>
              <div className="progress bg-light rounded-pill" style={{ height: '5px' }}>
                <div className="progress-bar bg-danger rounded-pill" style={{ width: '25%' }}></div>
              </div>
            </div>

            {/* Size Interactive Selector Matrix */}
            <div className="mb-4">
              <h6 className="text-dark small fw-medium text-uppercase mb-2.5" style={{ fontSize: '0.8rem' }}>Size: {selectedSize}</h6>
              <div className="d-flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`btn border small rounded-1 px-3 py-2 transition-all font-monospace fw-medium ${
                      selectedSize === size ? 'btn-dark border-dark' : 'btn-white text-muted border-light-subtle'
                    }`}
                    style={{ fontSize: '0.8rem', minWidth: '46px' }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Swatch Selector System */}
            <div className="mb-4">
              <h6 className="text-dark small fw-medium text-uppercase mb-2.5" style={{ fontSize: '0.8rem' }}>Color: {selectedColor}</h6>
              <div className="d-flex gap-2.5 align-items-center">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`rounded-circle border-0 color-node-dot position-relative ${
                      selectedColor === color.name ? 'active-swatch' : ''
                    }`}
                    style={{ backgroundColor: color.value, width: '28px', height: '28px' }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Checkout CTA Panel */}
            <div className="mb-4 pb-2">
              <h6 className="text-dark small fw-medium text-uppercase mb-2.5" style={{ fontSize: '0.8rem' }}>Quantity</h6>
              <div className="row g-3">
                <div className="col-auto">
                  <div className="input-group border border-light-subtle rounded bg-light" style={{ width: '120px' }}>
                    <button 
                      className="btn btn-sm bg-transparent border-0 text-muted px-2.5" 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    >
                      —
                    </button>
                    <input 
                      type="text" 
                      className="form-control form-control-sm text-center bg-transparent border-0 fw-medium text-dark px-0" 
                      value={quantity} 
                      readOnly 
                    />
                    <button 
                      className="btn btn-sm bg-transparent border-0 text-muted px-2.5" 
                      onClick={() => setQuantity(q => q + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col">
                  <button 
                    onClick={() => setDrawerOpen(true)}
                    className="btn btn-outline-dark w-100 py-2.5 fw-medium text-uppercase rounded-1 tracking-wide shadow-sm" 
                    style={{ fontSize: '0.85rem' }} 
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            {/* Actions Utilities Bar */}
            <div className="d-flex gap-4 border-top border-bottom py-3 text-muted small mb-4 utils-action-row">
              <span className="cursor-pointer">⇆ Compare</span>
              <span className="cursor-pointer">❓ Ask a question</span>
              <span className="cursor-pointer">🔗 Share</span>
            </div>

            {/* Delivery Terms Clauses */}
            <div className="mb-4 small d-flex flex-column gap-2 text-muted text-start py-1">
              <div>🚚 <strong className="text-dark">Estimated Delivery:</strong> Jul 30 - Aug 03</div>
              <div>📦 <strong className="text-dark">Free Shipping & Returns:</strong> On all orders over $75</div>
            </div>

            {/* Payment Secure Gateway Block Segment */}
            <div className="bg-light p-3 rounded text-center border border-light-subtle">
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-2">
                {['visa', 'mastercard', 'amex', 'jcb', 'discover', 'unionpay'].map((card) => (
                  <span key={card} className="badge bg-white border text-muted small text-uppercase font-monospace px-2 py-1">
                    {card}
                  </span>
                ))}
              </div>
              <span className="text-muted small fw-medium" style={{ fontSize: '0.72rem', letterSpacing: '0.3px' }}>
                Guarantee safe & secure checkout
              </span>
            </div>

          </div>
                

        </div>
      </div>

      {/* --- RIGHT SLIDE-OUT DRAWER BACKDROP MASK --- */}
      {drawerOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 transition-all z-4"
          onClick={() => setDrawerOpen(false)}
          style={{ animation: 'fadeIn 0.3s ease-in-out' }}
        />
      )}

      {/* --- RIGHT SLIDE-OUT PRODUCT DRAWER --- */}
      <div 
        className={`position-fixed top-0 end-0 h-100 bg-white shadow-lg transition-all z-5 d-flex flex-column ${
          drawerOpen ? 'drawer-open' : 'drawer-closed'
        }`}
        style={{ 
          width: '100%', 
          maxWidth: '440px', 
          fontFamily: "'Poppins', sans-serif",
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        
        {/* Drawer Header Block Section */}
        <div className="p-4 border-bottom position-relative text-start">
          <h3 className="fw-normal text-dark h4 mb-3" style={{ fontFamily: "'Volkhov', serif" }}>
            Product Summary
          </h3>
          <button 
            type="button" 
            className="btn-close position-absolute top-0 end-0 m-4 small" 
            onClick={() => setDrawerOpen(false)}
            aria-label="Close"
          />
        </div>

        {/* Scrollable Drawer Content */}
        <div className="flex-grow-1 overflow-y-auto p-4">
          <div className="row g-3 align-items-start text-start border-bottom pb-4 mb-4">
            
            {/* Product Thumbnail Card Image */}
            <div className="col-4">
              <div className="ratio ratio-1x1 bg-light rounded overflow-hidden border">
                <img src={activeImage} alt="Denim Jacket" className="object-fit-cover w-100 h-100" />
              </div>
            </div>

            {/* Title Specification Metrics Metadata block */}
            <div className="col-8 d-flex flex-column justify-content-between h-100 ps-2">
              <div>
                <h4 className="h6 text-dark fw-semibold mb-1" style={{ fontSize: '0.92rem' }}>Denim Jacket</h4>
                <p className="text-muted small mb-1">Color : <span className="text-dark-emphasis">{selectedColor}</span></p>
                <p className="text-muted small mb-2">Size : <span className="text-dark-emphasis">{selectedSize}</span></p>
                <div className="fw-semibold text-dark mb-3">$39.50</div>
              </div>

              {/* Stepper Quantity Mechanic Panel */}
              <div className="input-group border rounded bg-light" style={{ width: '105px', height: '32px' }}>
                <button 
                  className="btn btn-sm bg-transparent border-0 text-muted px-2.5" 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  —
                </button>
                <input 
                  type="text" 
                  className="form-control form-control-sm text-center bg-transparent border-0 fw-medium text-dark px-0" 
                  value={String(quantity).padStart(2, '0')} 
                  readOnly 
                  style={{ fontSize: '0.85rem' }}
                />
                <button 
                  className="btn btn-sm bg-transparent border-0 text-muted px-2.5" 
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </button>
              </div>

            </div>
          </div>

          {/* Product Details Summary */}
          <div className="mb-4">
            <h6 className="text-dark fw-semibold text-uppercase small mb-2.5" style={{ fontSize: '0.8rem' }}>Details</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-2">⭐ Rating: 4.5/5 (3 reviews)</li>
              <li className="mb-2">📦 Only 9 items left in stock</li>
              <li className="mb-2">🚚 Free shipping on orders over $75</li>
              <li className="mb-2">✓ Estimated Delivery: Jul 30 - Aug 03</li>
            </ul>
          </div>
        </div>

        {/* Static Bottom Sticky Summary Footer Drawer Block */}
        <div className="p-4 border-top bg-light-subtle">
          
          {/* Order Total Presentation */}
          <div className="d-flex justify-content-between align-items-center mb-4 text-start">
            <span className="fw-semibold text-dark" style={{ fontSize: '0.95rem' }}>Order Total</span>
            <span className="fw-bold text-dark fs-5">${(39.50 * quantity).toFixed(2)}</span>
          </div>

          {/* Checkout CTA Task Buttons System */}
          <div className="d-flex flex-column gap-2.5">
            <NavLink to='/CheckoutPage' className="btn btn-dark w-100 py-3 text-uppercase rounded-1 font-monospace shadow-sm tracking-wide" style={{ fontSize: '0.85rem', letterSpacing: '0.5px', textDecoration: 'none' }}>
              Proceed to Checkout
            </NavLink>
            <button 
              onClick={() => setDrawerOpen(false)}
              className="text-decoration-none text-dark small fw-medium border-bottom border-dark pb-0.5 d-inline-block mx-auto mt-1 transition-all btn btn-link"
            >
              Continue Shopping
            </button>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .drawer-open {
          animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .drawer-closed {
          animation: slideOutRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </section>
    
  );
};

export default ProductDetails;