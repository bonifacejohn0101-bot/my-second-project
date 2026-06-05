import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to middle card active

  const testimonials = [
    {
      id: 0,
      name: 'Sarah M.',
      role: 'Designer',
      image: 'src/assets/image (14).png',
      text: '"The customer support went above and beyond. The product is incredibly intuitive, elegant, and saved our team hours of manual work every single week."',
      rating: 5,
    },
    {
      id: 1,
      name: 'James K.',
      role: 'Traveler',
      image: 'src/assets/image (15).png',
      text: '"You won\'t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"',
      rating: 5,
    },
    {
      id: 2,
      name: 'John W.',
      role: 'Entrepreneur',
      image: 'src/assets/Images (1).png',
      text: '"Exactly what I was looking for. Thank you for making it pleasant and most of all hassle free! All reviews are great."',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-5 bg-light overflow-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* --- TITLE HEADER LAYER --- */}
      <div className="container text-center mb-5 mt-3">
        <h2 
          className="fw-normal mb-3" 
          style={{ fontFamily: "'Volkhov', serif", fontSize: '2.5rem', color: '#333333' }}
        >
          This Is What Our Customers Say
        </h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '500px', fontSize: '0.85rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
        </p>
      </div>

      {/* --- CAROUSEL STAGE CONTAINER --- */}
      <div className="container-fluid px-0 position-relative testimonial-slider-wrapper mb-5">
        <div className="d-flex justify-content-center align-items-center position-relative testimonial-track">
          {testimonials.map((item, index) => {
            // Calculate structural visual presentation state classes
            let cardClass = "testimonial-card border-0 rounded-3 bg-white d-flex align-items-center ";
            if (index === activeIndex) {
              cardClass += "active shadow-lg z-3";
            } else if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) {
              cardClass += "sibling left shadow-sm opacity-50 z-1";
            } else {
              cardClass += "sibling right shadow-sm opacity-50 z-1";
            }

            return (
              <div key={item.id} className={cardClass}>
                <div className="row g-4 align-items-center w-100 m-0 p-4 p-md-5">
                  {/* Left Side: Avatar with Background Decorative Offset Box */}
                  <div className="col-10 col-sm-5 mx-auto col-md-4 position-relative px-0 d-flex justify-content-center">
                    <div className="avatar-offset-bg position-absolute bg-secondary bg-opacity-25 rounded-1"></div>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid rounded-1 object-fit-cover position-relative z-2 testimonial-avatar"
                    />
                  </div>

                  {/* Right Side: Content Meta Properties */}
                  <div className="col-12 col-sm-7 col-md-8 ps-md-4 text-start testimonial-content-box">
                    <p className="text-dark-emphasis mb-3 quote-paragraph lh-lg">
                      {item.text}
                    </p>
                    
                    {/* Stars Block */}
                    <div className="text-warning mb-3 fs-5">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>

                    <hr className="w-50 my-3 border-dark-emphasis opacity-25" />

                    <h4 className="fw-semibold text-dark mb-1 h5" style={{ fontFamily: "'Volkhov', serif" }}>
                      {item.name}
                    </h4>
                    <span className="text-muted small tracking-wide">{item.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- CUSTOM PAGINATION NAVIGATIONAL BUTTONS --- */}
        <div className="d-flex justify-content-center gap-3 mt-5">
          <button 
            onClick={handlePrev} 
            className="btn btn-light rounded-circle border p-0 shadow-sm d-flex align-items-center justify-content-center navigation-circle"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button 
            onClick={handleNext} 
            className="btn btn-light rounded-circle border p-0 shadow-sm d-flex align-items-center justify-content-center navigation-circle"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;