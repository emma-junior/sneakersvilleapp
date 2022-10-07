import React from 'react';
import Home from './pages/Home';
import AppProvider from './hooks/Context';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ScrollToTop from './hooks/ScrollToTop';
import Register from './pages/Register';


function App() {
  
  return (
    <div className="App">
      <Router>
        <AppProvider>
          <ScrollToTop />
          <Toaster />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='details/:id' element={<Details />} />
            <Route path='/cart' element={<Cart />} /> 
            <Route path='/products' element={<Products />}  /> 
            <Route path='/register' element={<Register />} />   
          </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
