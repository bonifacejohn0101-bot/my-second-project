import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router';

const ShoppingCartPage = () => {
  // Main state matrix managing active line items in the cart view
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Mini Dress With Ruffled Straps',
      color: 'Red',
      price: 14.90,
      quantity: 1,
      img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=300'
    }
  ]);

  const [wrapProduct, setWrapProduct] = useState(false);
  const giftWrapFee = 10.00;

  // Handler update mechanics
  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Financial calculations engine
  const itemsSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalSubtotal = itemsSubtotal + (wrapProduct && cartItems.length > 0 ? giftWrapFee : 0);

  return (
    <div className="bg-white min-vh-100 py-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      
      {/* --- CART TITLE PAGE HEADER LAYER --- */}
      <div className="text-center mb-5">
        <h1 className="fw-normal text-dark display-5 mb-2" style={{ fontFamily: "'Volkhov', serif" }}>
          Shopping Cart
        </h1>
        <nav style={{ fontSize: '0.8rem' }}>
          <div className="d-flex justify-content-center gap-2 text-muted">
            <span>Home</span>
            <span>&gt;</span>
            <span className="text-dark fw-medium">Your Shopping Cart</span>
          </div>
        </nav>
      </div>

      <div className="container-xl px-4 px-md-5">
        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h3 className="h5 text-muted mb-3">Your shopping cart is empty</h3>
            <button className="btn btn-dark rounded-1 px-4 py-2 small">Return To Shop</button>
          </div>
        ) : (
          <div className="row">
            <div className="col-12">
              
              {/* =========================================================================
                  DESKTOP PRODUCTS SPECIFICATION GRID TABLE
                  ========================================================================= */}
              <div className="table-responsive d-none d-md-block">
                <table className="table align-middle border-0 custom-cart-table">
                  <thead>
                    <tr className="text-muted text-uppercase tracking-wider small border-bottom" style={{ fontSize: '0.78rem' }}>
                      <th scope="col" className="pb-3 ps-0 text-start" style={{ width: '50%' }}>Product</th>
                      <th scope="col" className="pb-3 text-center">Price</th>
                      <th scope="col" className="pb-3 text-center">Quantity</th>
                      <th scope="col" className="pb-3 text-end pe-0">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-bottom">
                        {/* Column 1: Image Details Node */}
                        <td className="py-4 ps-0 text-start">
                          <div className="d-flex gap-4 align-items-center">
                            <div className="bg-light rounded overflow-hidden flex-shrink-0" style={{ width: '100px', height: '100px' }}>
                              <img src={item.img} alt={item.name} className="w-100 h-100 object-fit-cover" />
                            </div>
                            <div>
                              <h5 className="h6 text-dark fw-semibold mb-1.5" style={{ fontSize: '0.92rem' }}>{item.name}</h5>
                              <p className="text-muted small mb-2">Color : <span className="text-dark-emphasis">{item.color}</span></p>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="btn p-0 border-0 text-muted small text-decoration-underline text-start bg-transparent cursor-pointer remove-btn-hover"
                                style={{ fontSize: '0.82rem' }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>

                        {/* Column 2: Individual Unit Cost */}
                        <td className="text-center fw-medium text-dark">${item.price.toFixed(2)}</td>

                        {/* Column 3: Quantity Increment Control Engine */}
                        <td className="text-center">
                          <div className="input-group border rounded bg-light mx-auto" style={{ width: '105px', height: '34px' }}>
                            <button className="btn btn-sm bg-transparent border-0 text-muted px-2.5" onClick={() => updateQuantity(item.id, -1)}>—</button>
                            <input type="text" className="form-control form-control-sm text-center bg-transparent border-0 fw-medium text-dark px-0" value={String(item.quantity).padStart(2, '0')} readOnly style={{ fontSize: '0.85rem' }} />
                            <button className="btn btn-sm bg-transparent border-0 text-muted px-2.5" onClick={() => updateQuantity(item.id, 1)}>+</button>
                          </div>
                        </td>

                        {/* Column 4: Sum Dynamic Total Price */}
                        <td className="text-end pe-0 fw-semibold text-dark">${(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* =========================================================================
                  MOBILE COMPACT ROW CARD STREAM (Fallback responsive presentation Layer)
                  ========================================================================= */}
              <div className="d-block d-md-none border-bottom pb-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="d-flex gap-3 align-items-center py-3 border-bottom border-light-subtle text-start">
                    <img src={item.img} alt={item.name} className="rounded object-fit-cover flex-shrink-0 bg-light" style={{ width: '80px', height: '80px' }} />
                    <div className="flex-grow-1">
                      <h6 className="fw-semibold text-dark mb-1 small">{item.name}</h6>
                      <div className="text-muted mb-2" style={{ fontSize: '0.75rem' }}>Color: {item.color}</div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="input-group border rounded bg-light" style={{ width: '90px', height: '28px' }}>
                          <button className="btn btn-sm bg-transparent border-0 p-0 px-2 text-muted" onClick={() => updateQuantity(item.id, -1)}>—</button>
                          <input type="text" className="form-control form-control-sm text-center bg-transparent border-0 fw-medium p-0 small text-dark" value={item.quantity} readOnly />
                          <button className="btn btn-sm bg-transparent border-0 p-0 px-2 text-muted" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                        <span className="fw-semibold text-dark small">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="btn p-0 border-0 text-decoration-underline text-muted small mt-2" style={{ fontSize: '0.75rem' }}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* =========================================================================
                  SUMMARY PANEL METRICS CALCULATOR CLOSURE
                  ========================================================================= */}
              <div className="mt-5 d-flex flex-column align-items-end">
                <div style={{ width: '100%', maxWidth: '460px' }}>
                  
                  {/* Gift Wrapping Tick node configuration */}
                  <div className="d-flex align-items-center gap-2.5 justify-content-start text-start pb-4 mb-4 border-bottom border-light-subtle">
                    <input 
                      type="checkbox" 
                      className="form-check-input border-dark-emphasis p-2 rounded-0 cursor-pointer shadow-none custom-checkbox-node" 
                      id="wrapProductCheckPage"
                      checked={wrapProduct}
                      onChange={(e) => setWrapProduct(e.target.checked)}
                      style={{ width: '18px', height: '18px' }}
                    />
                    <label className="form-check-label text-muted small cursor-pointer" htmlFor="wrapProductCheckPage">
                      For <strong className="text-dark">${giftWrapFee.toFixed(2)}</strong> Please Wrap The Product
                    </label>
                  </div>

                  {/* Subtotal Label Ledger */}
                  <div className="d-flex justify-content-between align-items-center mb-4 text-start">
                    <span className="text-dark fw-medium" style={{ fontSize: '0.95rem' }}>Subtotal</span>
                    <span className="fw-bold text-dark fs-5">${totalSubtotal.toFixed(2)}</span>
                  </div>

                  {/* Action Navigation CTA Layout buttons */}
                  <div className="d-flex flex-column gap-3 text-center">
                    <NavLink to='/CheckoutPage' className="btn btn-dark w-100 py-3 text-uppercase rounded-1 font-monospace shadow-sm tracking-wide hover-btn-lift" style={{ fontSize: '0.85rem', letterSpacing: '0.5px' }}>
                      Checkout
                    </NavLink>
                    <a href="#view-cart" className="text-decoration-none text-dark small fw-medium border-bottom border-dark pb-0.5 d-inline-block mx-auto transition-all">
                      View Cart
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;