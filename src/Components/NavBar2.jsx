import {NavLink} from 'react-router';


function NavBar2() {
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand regular" href="#" style={{ fontFamily: "'Volkhov', serif", letterSpacing: '1px' }}>FASCO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100" align-items-space-between>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/shop">Shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/ProductDetails">product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/Package">Package</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>  
    )
}

export default NavBar2;