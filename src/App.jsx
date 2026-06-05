
import React from 'react';
import DealsOfTheMonth from './Components/DealOfTheMonth';
import Signup from './pages/signup';
import NewArrivals from './Components/NewArrival';
import PeakyBlindersSection from './Components/PeakyBlinderSelection';
import InstagramFeed from './Components/instagramFeed';
import CustomerTestimonials from './Components/CustomerTestimonial';
import NewLetterFooter from './Components/NewLetterFooter';
import Web from './App';
import Navbar from './Components/Navbar';
import { NavLink } from 'react-router';


const App = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-dark" style={{ minHeight: '100vh' }}>
      <div className="container py-5">
        <div className="text-center mb-5" style={{ position: 'relative',fontFamily: "pop", letterSpacing: '1px' }}>
        <Navbar />
        </div>
        <div className="row g-4 align-items-stretch justify-content-center">
        {/* Left Card */}
        <div className="col-md-4">
          <div
            className="h-100 d-flex justify-content-center align-items-end position-relative"
            style={{
              backgroundColor: "#e8e8e8",
              borderRadius: "10px",
              minHeight: "600px",
              overflow: "hidden",
            }}
          >
            <img
              src="src/assets/image 2 28.png"
              alt="model"
              className="img-fluid"
              style={{
                height: "500px",
                objectFit: "contain",
              }} />
          </div>
        </div>

        {/* Center Card */}
        <div className="col-md-4">
          <div className="d-flex flex-column gap-3 h-100">
            {/* Top Models */}
            <div
              className="d-flex justify-content-center align-items-center gap-2"
              style={{
                backgroundColor: "#e8e8e8",
                borderRadius: "10px",
                padding: "10px",
                height: "110px",
                overflow: "hidden",
              }}
            >
              <img
                src="src/assets/images.png"
                alt=""
                className="img-fluid rounded"
                style={{ width: "100%", objectFit: "cover" }} />



            </div>

            {/* Text Content */}
            <div
              className="text-center d-flex flex-column justify-content-center align-items-center flex-grow-1"
              style={{
                backgroundColor: "#f4f4f4",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <h1
                style={{
                  fontSize: "4rem",
                  fontWeight: "700",
                  color: "#444",
                  lineHeight: "1",
                }}
              >
                ULTIMATE
              </h1>

              <h1
                style={{
                  fontSize: "6rem",
                  fontWeight: "800",
                  color: "transparent",
                  WebkitTextStroke: "2px #777",
                  lineHeight: "1",
                }}
              >
                SALE
              </h1>

              <p
                style={{
                  letterSpacing: "3px",
                  color: "#666",
                  marginTop: "10px",
                }}
              >
                NEW COLLECTION
              </p>

              <button
                className="btn btn-dark px-5 py-3 mt-3"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                SHOP NOW
              </button>
            </div>

            {/* Bottom Models */}
            <div
              className="d-flex justify-content-center gap-2"
              style={{
                borderRadius: "10px",
                padding: "10px",
                overflow: "hidden",
              }}
            >
              <img
                src="src/assets/image.png"
                alt=""
                className="img-fluid rounded"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }} />


            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="col-md-4">
          <div
            className="h-100 d-flex justify-content-center align-items-end"
            style={{
              backgroundColor: "#e8e8e8",
              borderRadius: "10px",
              minHeight: "550px",
              overflow: "hidden",
            }}
          >
            <img
              src="src/assets/image 227.png"
              alt="model"
              className="img-fluid"
              style={{
                height: "500px",
                objectFit: "contain",
              }} />
          </div>
        </div>


        {/* Floating Buttons */}
        <div
          className="position-fixed d-flex gap-3"
          style={{
            bottom: "20px",
            right: "20px",

          }}
        >
          <NavLink to='/ShoppingCartPage'
            className="btn btn-dark rounded-circle"
            style={{
              width: "50px",
              height: "50px",
            }}
          >
            🛒
          </NavLink>

          <button
            id='scrollToTop'
            className="btn btn-light rounded-circle border"
            style={{
              width: "50px",
              height: "50px",
            }}
            onClick={handleScrollToTop}
          >
            ↑
          </button>
        </div>



        <div className="container text-center py-5">
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col">
              <img src='src/assets/logo.png' />
            </div>
            <div className="col">
              <img src='src/assets/logo (1).png' />
            </div>
            <div className="col">
              <img src='src/assets/logo (2).png' />
            </div>
            <div className="col">
              <img src='src/assets/logo (3).png' />
            </div>
            <div className="col">
              <img src='src/assets/logo copy.png' />
            </div>
          </div>
          <DealsOfTheMonth />
        </div>
        <div>
          <NewArrivals />
        </div>
        <div>
          <PeakyBlindersSection />
        </div>

        <section className="features py-5 bg-white">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 text-center align-items-center">
              <div className="col">
                <div className="p-4 rounded-4 h-100 d-flex align-items-center gap-3">
                  <img src="src/assets/icon.png" alt="High Quality" style={{ width: '48px', height: '48px' }} />
                  <div className="text-start">
                    <h6 className="fw-semibold mb-1">High Quality</h6>
                    <p className="text-muted mb-0">crafted from top materials</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-4 rounded-4 h-100 d-flex align-items-center gap-3">
                  <img src="src/assets/icon (1).png" alt="Warranty Protection" style={{ width: '48px', height: '48px' }} />
                  <div className="text-start">
                    <h6 className="fw-semibold mb-1">Warranty Protection</h6>
                    <p className="text-muted mb-0">Over 2 years</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-4 rounded-4 h-100 d-flex align-items-center gap-3">
                  <img src="src/assets/2891214031638194523 1.png.png" alt="Free Shipping" style={{ width: '48px', height: '48px' }} />
                  <div className="text-start">
                    <h6 className="fw-semibold mb-1">Free Shipping</h6>
                    <p className="text-muted mb-0">Order over $150</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-4 rounded-4 h-100 d-flex align-items-center gap-3">
                  <img src="src/assets/vector.png" alt="24/7 Support" style={{ width: '48px', height: '48px' }} />
                  <div className="text-start">
                    <h6 className="fw-semibold mb-1">24 / 7 Support</h6>
                    <p className="text-muted mb-0">Dedicated support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container text-center py-5">
          <div className="p-5">
            <InstagramFeed />
          </div>
          <div className="p-5">
            <CustomerTestimonials />
          </div>
          <div className="p-5">
            <NewLetterFooter />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;