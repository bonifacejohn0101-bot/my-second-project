import PeakyBlinderSelection from "../Components/PeakyBlinderSelection";
import NavBar2 from "../Components/NavBar2";
import {useEffect, useState} from "react";

export default function FashionShop() {

    const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch ("https://fakestoreapi.com/products/")
      const jsonData = await responce.json()
      setData(jsonData)
    }
    fetchData()
  }, [])
    
  const products = [
        data.map((item) => ({
    
      name: item.title,
      price: item.price,
      img: item.image ,
    },
    {
      name: "Linen-blend Shirt",
      price: "$17.00",
      img: "src/assets/Link ⏵ responsive-image (1).png",
    },
    {
      name: "Long-sleeve Coat",
      price: "$106.00",
      img: "src/assets/Link ⏵ responsive-image (3).png",
    },
    {
      name: "Boxy Denim Hat",
      price: "$25.00",
      img: "src/assets/Link ⏵ responsive-image (4).png",
    },
    {
      name: "Linen Plain Top",
      price: "$25.00",
      img: "src/assets/Link ⏵ responsive-image (5).png",
    },
    {
      name: "Oversized T-shirt",
      price: "$11.00",
      old: "$14.00",
      img: "src/assets/Link ⏵ responsive-image (6).png",
    },
    {
      name: "Polarised Sunglasses",
      price: "$18.00",
      old: "$21.00",
      img: "src/assets/Link ⏵ responsive-image (7).png",
    },
    {
      name: "Rockstar Jacket",
      price: "$22.00",
      img: "src/assets/Link ⏵ responsive-image (8).png",
    },
    {
      name: "Dotted Black Dress",
      price: "$20.00",
      img: "src/assets/Link ⏵ responsive-image.png",
    }))
  ];

  return (
    <div
      className="container-fluid py-4"
      style={{ background: "#f7f7f7", minHeight: "100vh" }}
    >
      <div className="container">
        {/* Breadcrumb */}
        <NavBar2 />
        <div className="text-center mb-5">
            <h1 className="fw-bold mb-3">Fashion</h1>
          <small className="text-muted">
            Home &nbsp; &gt; &nbsp; Fashion
          </small>
        </div>

        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-4">
            <h3 className="fw-bold mb-4">Filters</h3>

            {/* Size */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Size</h6>

              <div className="d-flex flex-wrap gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="btn btn-sm btn-outline-secondary"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Colors</h6>

              <div className="d-flex flex-wrap gap-2">
                {[
                  "#ff6b6b",
                  "#ffa94d",
                  "#ffd43b",
                  "#94d82d",
                  "#69db7c",
                  "#38d9a9",
                  "#4dabf7",
                  "#74c0fc",
                  "#9775fa",
                  "#b197fc",
                  "#f06595",
                  "#cc5de8",
                ].map((color, i) => (
                  <div
                    key={i}
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: color,
                      cursor: "pointer",
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Prices */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Prices</h6>

              {[
                "$0-$50",
                "$50-$100",
                "$100-$150",
                "$150-$200",
                "$300-$400",
              ].map((price, i) => (
                <p key={i} className="text-muted small mb-2">
                  {price}
                </p>
              ))}
            </div>

            {/* Brands */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Brands</h6>

              <div className="d-flex flex-wrap gap-2">
                {[
                  "Minimog",
                  "Retrolie",
                  "Brook",
                  "Lovis",
                  "Vagabond",
                  "Abby",
                ].map((brand, i) => (
                  <span key={i} className="small text-muted">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Collections */}
            <div className="mb-4">
              <h6 className="fw-bold mb-3">Collections</h6>

              {[
                "All products",
                "Best sellers",
                "New arrivals",
                "Accessories",
              ].map((item, i) => (
                <p key={i} className="small text-muted mb-2">
                  {item}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div>
              <h6 className="fw-bold mb-3">Tags</h6>

              <div className="d-flex flex-wrap gap-2">
                {[
                  "Fashion",
                  "Hats",
                  "Sandal",
                  "Bags",
                  "Sneaker",
                  "Denim",
                  "Beachwear",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="badge bg-light text-dark border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-lg-9">
            {/* Top Bar */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <small className="text-muted">Best selling ⌄</small>

              <div className="d-flex gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <button
                    key={item}
                    className="btn btn-sm btn-light border"
                  >
                    ▦
                  </button>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="row g-4  ">
              {data.map((item) => (
                <div className="col-md-4  " >
                  <div className="card border-0 bg-transparent ">
                    <div key={item.id}
                      className="overflow-hidden rounded  "
                      style={{
                        background: "#ececec",
                        height: "320px",
                        
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-100"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="mt-2">
                      <h6
                        className="fw-semibold mb-1"
                        style={{ fontSize: "14px" }}
                      >
                        {item.title}
                      </h6>

                      <p className="mb-2 small">
                        {item.price}{" "}
                        {item.old && (
                          <span className="text-muted text-decoration-line-through">
                            {item.old}
                          </span>
                        )}
                      </p>

                      {/* Color Dots */}
                      <div className="d-flex gap-2">
                        <span
                          style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            background: "#000",
                            border: "1px solid #ccc",
                          }}
                        ></span>

                        <span
                          style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            background: "#dbeafe",
                            border: "1px solid #ccc",
                          }}
                        ></span>

                        <span
                          style={{
                            width: "14px",
                            height: "14px",
                            borderRadius: "50%",
                            background: "#fbcfe8",
                            border: "1px solid #ccc",
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <PeakyBlinderSelection />
      </div>
    </div>
  );
}