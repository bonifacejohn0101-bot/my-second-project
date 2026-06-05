import {useEffect, useState} from 'react';



 function NewArrivals() {
  // Navigation 

   const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch ("https://fakestoreapi.com/products/")
      const jsonData = await responce.json()
      setData(jsonData)
    }
    fetchData()
  }, [])
  const categories = [
    "Men's Fashion",
    "Women's Fashion",
    "Women Accessories",
    "Men Accessories",
    "Discount Deals"
  ];

  // State to handle active tab switching
  const [activeCategory, setActiveCategory] = useState("Women's Fashion");

  // Mock data for the product cards
  const products =[
     data.map((item) => ({
    id: item.id,
    name:  item.title ,
    brand: item.category,
      rating: item.rating.rate,
      reviews: item.rating.count,
      price: item.price,
      status: item.rating.count > 200 ? "In Stock" : "Almost Sold Out",
      image: item.image
     },
    {
      id: item.id,
      name: item.title,
      brand: item.category,
      rating: item.rating.rate,
      reviews: item.rating.count,
      price: item.price,
      status: item.rating.count > 200 ? "In Stock" : "Almost Sold Out",
      image: item.image
    },
    {
      id: 3,
      name: "Full Sweater",
      brand: "Al Karam",
      rating: 5,
      reviews: "4.1k",
      price: "$95.50",
      status: "Almost Sold Out",
      image: "src/assets/Images (3).png"
    },
    {
      id: 4,
      name: "White Dress",
      brand: "Al Karam",
      rating: 5,
      reviews: "4.1k",
      price: "$95.50",
      status: "Almost Sold Out",
      image: "src/assets/Images (4).png"
    },
    {
      id: 5,
      name: "Colorful Dress",
      brand: "Al Karam",
      rating: 5,
      reviews: "4.1k",
      price: "$95.50",
      status: "Almost Sold Out",
      image: "src/assets/Images (5).png"
    },
    {
      id: 6,
      name: "White Shirt",
      brand: "Al Karam",
      rating: 5,
      reviews: "4.1k",
      price: "$95.50",
      status: "Almost Sold Out",
      image: "src/assets/Images (6).png"
    })),
  ];

  return (
      
    <section className="py-5 bg-light" style={{ minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark display-5 mb-3">New Arrivals</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
            ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin.
          </p>
        </div>

        {/* Categories Pills Navigation */}
        <div  className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="btn rounded-3 px-4 py-2 border-0 transition-all"
              style={{
                fontSize: '0.85rem',
                backgroundColor: activeCategory === category ? '#000000' : '#f8f9fa',
                color: activeCategory === category ? '#ffffff' : '#6c757d',
                boxShadow: activeCategory === category ? '0px 10px 20px rgba(0,0,0,0.15)' : 'none',
                fontWeight: '500'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div  className="row g-4 justify-content-center">
          {data.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div 
                className="card h-100 border-0 bg-white p-3 rounded-4" 
                style={{ boxShadow: '0 15px 35px rgba(0, 0, 0, 0.03)' }}
              >
                {/* Product Image */}
                <div className="overflow-hidden rounded-4 mb-3" style={{ height: '260px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-100 object-fit-cover"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="card-body p-1 d-flex flex-column justify-content-between overflow-hidden">
                  <div>
                    {/* Title & Stars Row */}
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <h5 className="card-title fw-bold text-dark mb-0 fs-6">{item.title}</h5>
                      <div className="text-warning small">
                        {Array.from({ length: item.rating.count }).map((_, index) => (
                          <span key={index}>★</span>
                        ))}
                      </div>
                    </div>

                    {/* Brand Name */}
                    <p className="text-muted mb-3" style={{ fontSize: '0.75rem' }}>{item.category}</p>
                    
                    {/* Reviews */}
                    <p className="text-muted mb-3" style={{ fontSize: '0.75rem' }}>
                      ({item.rating.count}) Customer Reviews
                    </p>
                  </div>

                  {/* Pricing & Availability Row */}
                  <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
                    <span className="fw-bold text-dark fs-5">{item.price}</span>
                    <span className="text-danger fw-semibold" style={{ fontSize: '0.7rem' }}>
                      {item.rating.count > 200 ? "In Stock" : "Almost Sold Out"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-5">
          <button 
            className="btn btn-dark text-white rounded-3 px-5 py-2.5 fw-medium border-0 fs-6 shadow-sm"
            style={{ backgroundColor: '#000000' }}
          >
            View More
          </button>
        </div>

      </div>
    </section>
  );
}


export default NewArrivals;