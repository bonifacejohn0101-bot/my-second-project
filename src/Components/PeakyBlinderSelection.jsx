import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PeakyBlindersCard() {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        maxHeight: "auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        className="row shadow-lg overflow-hidden"
        style={{
          width: "90%",
          maxWidth: "1200px",
          backgroundColor: "#e9e9e9",
          minHeight: "500px",
          position: "relative",
        }}
      >
        {/* Left Section */}
        <div className="col-md-6 position-relative d-flex align-items-center justify-content-center">
          {/* Model Image */}
          <img
            src="src/assets/image (4).png"
            alt="fashion"
            className="img-fluid position-relative"
            style={{
              maxHeight: "480px",
              objectFit: "contain",
              zIndex: 2,
            }}
          />

          {/* Labels */}
          <div
            className="position-absolute bg-white border px-3 py-1"
            style={{ top: "18%", left: "20%" }}
          >
            <small>Suspender</small>
          </div>

          <div
            className="position-absolute bg-white border px-3 py-1"
            style={{ top: "48%", left: "10%" }}
          >
            <small>Hugo Boss</small>
          </div>

          <div
            className="position-absolute bg-white border px-3 py-1"
            style={{ top: "28%", right: "20%" }}
          >
            <small>Flat Cap</small>
          </div>

          <div
            className="position-absolute bg-white border px-3 py-1"
            style={{ top: "42%", right: "18%" }}
          >
            <small>Hugo Boss</small>
          </div>

          <div
            className="position-absolute bg-white border px-3 py-1"
            style={{ bottom: "10%", right: "20%" }}
          >
            <small>Santoni</small>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "2px",
            height: "100%",
            background: "#222",
            transform: "skewX(-20deg)",

          }}
        ></div>

        {/* Right Section */}
        <div className="col-md-6 d-flex align-items-center">
          <div className="px-4 px-md-5">
            <p
              className="text-uppercase mb-2"
              style={{
                letterSpacing: "2px",
                fontSize: "12px",
                color: "#666",
              }}
            >
              Women Collection
            </p>

            <h1
              style={{
                fontFamily: "serif",
                fontWeight: "700",
                color: "#333",
                
              }}
            >
              Peaky Blinders
            </h1>

            <div className="mt-4">
              <p
                className="text-uppercase mb-1"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Description
              </p>

              <p
                style={{
                  color: "#777",
                  lineHeight: "1.8",
                  maxWidth: "420px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem delectus mollitia doloremque, similique illum
                quisquam.
              </p>
            </div>

            <div className="mt-3 d-flex align-items-center gap-2">
              <span style={{ fontSize: "14px", color: "#666" }}>Size:</span>

              <button className="btn btn-dark btn-sm px-3 rounded-pill">
                M
              </button>
            </div>

            <h2 className="mt-4 fw-bold">$100.00</h2>

            <button
              className="btn btn-dark px-5 py-2 mt-3"
              style={{
                borderRadius: "10px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}