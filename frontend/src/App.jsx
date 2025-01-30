import './App.css'
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/login'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Orders from './pages/Orders/Orders';
import Profile from './pages/Profile/Profile';


function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Clear token from localStorage
  };
  return (
    <>
    {
      isLoggedIn ? 
    (<>
      <Navbar handleLogout={handleLogout}/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/placeorder" element={<PlaceOrder/>} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<div>Menu Page</div>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/profile" element={<Profile/>} />
      </Routes>
     </>) : 

     (<>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>

     </>)
     
}
</>       
  )
}

export default App
