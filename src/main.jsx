import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Signup from './pages/signup.jsx'
import Shop from './pages/Shop.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from 'react-router'
import ShoppingCartDrawer from './pages/ShoppingCartDrawer.jsx'
import ShoppingCartPage from './pages/ShoppingCartPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import Signin from './pages/Signin.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import ConfirmationWindow from './pages/confirmationWindow.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/ProductDetails' element={<ProductDetails />} />
      <Route path='/ShoppingCartDrawer' element={<ShoppingCartDrawer/>} />
      <Route path='/ShoppingCartPage' element={<ShoppingCartPage/>} />
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/CheckoutPage' element={<CheckoutPage/>} />
      <Route path='/ForgetPassword' element={<ForgetPassword/>} />
      <Route path='/ForgetPassword'/>
      <Route path='/ForgetPassword/ConfirmationWindow' element={<ConfirmationWindow/>} />
      <Route/>
      <Route path='/Signup'/>
      <Route path='/Signup/Signin' element={<Signin/>} />
      <Route/>
      <Route path='/ForgetPassword'/>
      <Route path='/ForgetPassword/Signin' element={<Signin/>} />
      <Route/>
      <Route path='/Signin'/>
      <Route path='/Signin/Signup' element={<Signin/>} />
      <Route/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
