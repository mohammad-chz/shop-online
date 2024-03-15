import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import  bannerWoman from "./components/assets/banner-women.webp"
import  bannerMan from "./components/assets/banner-man.jpeg"
import  bannerKids from "./components/assets/banner-kids.jpg"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={bannerMan} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={bannerWoman} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={bannerKids} category="kids" />} />
          <Route path='/product'>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
