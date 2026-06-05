
import React, { useState } from 'react';
import { NavLink } from 'react-router';
const ShoppingCartDrawer = () => {
  // Toggle status for presentation visibility
  const [isOpen, setIsOpen] = useState(true);
  
  // Interactive E-commerce State Management
  const [cartItem, setCartItem] = useState({
    id: 1,
    name: 'Denim Jacket',
    color: 'Red',
    price: 14.80,
    quantity: 1,
    img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=300'
  });
  
  const [wrapProduct, setWrapProduct] = useState(false);
  const giftWrapFee = 10.00;
  const freeShippingThreshold = 150.00;

  // Handler mechanics
  const updateQuantity = (val) => {
    setCartItem(prev => ({ ...prev, quantity: Math.max(1, prev.quantity + val) }));
  };

  // Live total financial calculations
  const itemsSubtotal = cartItem.price * cartItem.quantity;
  const grandSubtotal = itemsSubtotal + (wrapProduct ? giftWrapFee : 0);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - grandSubtotal);

  return (
    <div className="position-relative min-vh-100 bg-secondary bg-opacity-10 py-5">
      
      {/* Simulation trigger button to toggle the drawer layout view */}
      <div className="text-center">
        <button className="btn btn-dark px-4 py-2 shadow" onClick={() => setIsOpen(true)}>
          🛒 Open Drawer Simulation
        </button>
      </div>

      {/* --- CART DRAWER BACKDROP MASK --- */}
      {isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 transition-all z-4"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* --- MAIN OFF-CANVAS CART DRAWER SLIDER --- */}
      <div 
        className={`position-fixed top-0 end-0 h-100 bg-white shadow-lg transition-all z-5 d-flex flex-column ${
          isOpen ? 'drawer-open' : 'drawer-closed'
        }`}
        style={{ width: '100%', maxWidth: '440px', fontFamily: "'Poppins', sans-serif" }}
      >
        
        {/* Header Block Section */}
        <div className="p-4 border-bottom position-relative text-start">
          <h3 className="fw-normal text-dark h4 mb-3" style={{ fontFamily: "'Volkhov', serif" }}>
            Shopping Cart
          </h3>
          <button 
            type="button" 
            className="btn-close position-absolute top-0 end-0 m-4 small" 
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          />
          
          {/* Dynamic Free Shipping Progress Notice Banner */}
          <p className="text-muted small mb-0 lh-base">
            {remainingForFreeShipping > 0 ? (
              <>Buy <strong className="text-dark">${remainingForFreeShipping.toFixed(2)}</strong> More And Get <strong className="text-dark">Free Shipping</strong></>
            ) : (
              <span className="text-success fw-medium">🎉 You qualify for Free Shipping!</span>
            )}
          </p>
        </div>

        {/* Scrollable Cart Content Track Line */}
        <div className="flex-grow-1 overflow-y-auto p-4">
          <div className="row g-3 align-items-start text-start border-bottom pb-4 mb-4">
            
            {/* Embedded Thumbnail Card Image */}
            <div className="col-4">
              <div className="ratio ratio-1x1 bg-light rounded overflow-hidden border">
                <img src={cartItem.img} alt={cartItem.name} className="object-fit-cover w-100 h-100" />
              </div>
            </div>

            {/* Title Specification Metrics Metadata block */}
            <div className="col-8 d-flex flex-column justify-content-between h-100 ps-2">
              <div>
                <h4 className="h6 text-dark fw-semibold mb-1" style={{ fontSize: '0.92rem' }}>{cartItem.name}</h4>
                <p className="text-muted small mb-2">Color : <span className="text-dark-emphasis">{cartItem.color}</span></p>
                <div className="fw-semibold text-dark mb-3">${cartItem.price.toFixed(2)}</div>
              </div>

              {/* Stepper Quantity Mechanic Panel */}
              <div className="input-group border rounded bg-light" style={{ width: '105px', height: '32px' }}>
                <button 
                  className="btn btn-sm bg-transparent border-0 text-muted px-2.5" 
                  onClick={() => updateQuantity(-1)}
                >
                  —
                </button>
                <input 
                  type="text" 
                  className="form-control form-control-sm text-center bg-transparent border-0 fw-medium text-dark px-0" 
                  value={String(cartItem.quantity).padStart(2, '0')} 
                  readOnly 
                  style={{ fontSize: '0.85rem' }}
                />
                <button 
                  className="btn btn-sm bg-transparent border-0 text-muted px-2.5" 
                  onClick={() => updateQuantity(1)}
                >
                  +
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Static Bottom Sticky Summary Footer Drawer Block */}
        <div className="p-4 border-top bg-light-subtle">
          
          {/* Packaging Wrapper Checkbox Mechanism Node */}
          <div className="d-flex align-items-center gap-2.5 text-start pb-4 mb-4 border-bottom border-light-subtle">
            <input 
              type="checkbox" 
              className="form-check-input border-dark-emphasis p-2 rounded-0 cursor-pointer" 
              id="wrapProductCheck"
              checked={wrapProduct}
              onChange={(e) => setWrapProduct(e.target.checked)}
              style={{ width: '18px', height: '18px' }}
            />
            <label className="form-check-label text-muted small cursor-pointer" htmlFor="wrapProductCheck">
              For <strong className="text-dark">${giftWrapFee.toFixed(2)}</strong> Please Wrap The Product
            </label>
          </div>

          {/* Core Balance Financial Presentation Sheet Row */}
          <div className="d-flex justify-content-between align-items-center mb-4 text-start">
            <span className="fw-semibold text-dark" style={{ fontSize: '0.95rem' }}>Subtotal</span>
            <span className="fw-bold text-dark fs-5">${grandSubtotal.toFixed(2)}</span>
          </div>

          {/* Checkout CTA Task Buttons System */}
          <div className="d-flex flex-column gap-2.5">
            <NavLink to='/CheckoutPage' className="btn btn-dark w-100 py-3 text-uppercase rounded-1 font-monospace shadow-sm tracking-wide" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
              Checkout
            </NavLink>
            <NavLink to="/ShoppingCartPage" className="text-decoration-none text-dark small fw-medium border-bottom border-dark pb-0.5 d-inline-block mx-auto mt-1 transition-all">
              View Cart
            </NavLink>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ShoppingCartDrawer;