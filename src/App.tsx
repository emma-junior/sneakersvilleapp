import React from 'react';
import Home from './pages/Home';
import AppProvider from './hooks/Context';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ScrollToTop from './hooks/ScrollToTop';
import Register from './pages/Register';
import Success from './pages/Success';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import "./index.css"
import PaymentForm from './components/CheckoutBtns/PaymentForm';


function App() {

  return (
    <div className="App">
      <Router>
        <AppProvider>
          <ScrollToTop />
          <Toaster />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/products' element={<Products />} />
            <Route path='/login' element={<PrivateRoute/>}>
              <Route path='/login' element={<Login />}/>
            </Route>
            <Route path='/success' element={<Success />} />
            <Route path='/pay-with-paystack' element={<PaymentForm />} />
            <Route path='/register' element={<Register />} />
            <Route path='/coming-soon' element={<Profile />} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
