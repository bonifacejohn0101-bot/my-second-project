import {NavLink} from "react-router";

function Navbar() {
  return (
    

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand regular" href="#"  style={{ fontFamily: "'Volkhov', serif", letterSpacing: '1px' }}>FASCO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100" style={{ display: 'flex', gap: '20px' }}>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/shop">Shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/NewArrivals">New Arrivals</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Package">Package</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/signin">Sign In</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active bg-dark text-white border rounded " to="/signup">Sign Up</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>  
  )
}

export default Navbar;