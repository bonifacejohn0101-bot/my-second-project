import React, { useState, useEffect } from 'react';

const DealsOfTheMonth = () => {
  const [timeLeft, setTimeLeft] = useState({ days: '02', hours: '06', mins: '05', secs: '30' });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let s = parseInt(prev.secs) - 1;
        let m = parseInt(prev.mins);
        let h = parseInt(prev.hours);
        let d = parseInt(prev.days);

        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 23; d -= 1; }
        if (d < 0) { clearInterval(interval); return prev; }

        return {
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          mins: String(m).padStart(2, '0'),
          secs: String(s).padStart(2, '0')
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="deals" className="py-5 p-3 mb-2 bg-light text-dark" style={{ fontFamily: "'Poppins', sans-serif",  }}>
      <div className="container-xl px-4">
        <div className="row g-4 align-items-center">
          
          {/* Action Left Content Column */}
          <div className="col-lg-4 col-md-12 text-center text-lg-start pe-lg-5">
            <h2 className="fw-normal mb-3" style={{ fontFamily: "'Volkhov', serif", fontSize: '2.5rem', color: '#222' }}>
              Deals Of The Month
            </h2>
            <p className="text-muted small mb-4 lh-lg" style={{ maxWidth: '360px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
            </p>
            <a href="#buy" className="btn btn-dark px-4 py-2.5 rounded-2 fw-medium shadow-sm mb-5" style={{ fontSize: '0.85rem' }}>
              Buy Now
            </a>

            {/* Countdown Sub-layout */}
            <div className="mt-2">
              <h5 className="fw-semibold text-dark mb-3" style={{ fontSize: '1rem' }}>Hurry, Before It's Too Late!</h5>
              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hr', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.mins },
                  { label: 'Sec', value: timeLeft.secs }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white border rounded-3 d-flex align-items-center justify-content-center shadow-sm mb-1" style={{ width: '56px', height: '56px', fontSize: '1.25rem', fontWeight: '500' }}>
                      {item.value}
                    </div>
                    <span className="text-muted small" style={{ fontSize: '0.75rem' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Gallery Layout Showcase Right Column */}
          <div className="col-lg-8 col-md-12">
            <div className="row g-3">
              
              <div className="col-md-4 col-sm-6">
                <div className="position-relative rounded-3 overflow-hidden" style={{ height: '700px' }}>
                  <img src="src/assets/image (1).png" alt="Spring Outfit" className="w-100 h-100 object-fit-cover" />
                  <div className="position-absolute bottom-0 start-0 m-3 bg-white p-3 rounded shadow-sm" style={{ minWidth: '140px' }}>
                    <span className="text-muted d-block small" style={{ fontSize: '0.7_rem' }}>01 — Spring Sale</span>
                    <span className="fw-bold text-dark fs-5">30% OFF</span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="rounded-3 overflow-hidden" style={{ height: '650px' }}>
                  <img src="src/assets/image (2).png" alt="Summer Casual Outfit" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block">
                <div className="rounded-3 " style={{ height: '650px' }}>
                  <img src="src/assets/image (3).png" alt="Autumn Look Showcase" className="w-100 h-100 object-fit-cover" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DealsOfTheMonth;