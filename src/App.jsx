import './App.css'
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom'
import ShopPage from '../pages/ShopPage'
import Header from '../components/Header'
import HomePage from '../pages/HomePage'
import Footer from '../components/Footer'
import Loader from '../pages/Loader'
import About from '../pages/About'
import HelpCenter from '../pages/HelpCenter'
import Support from '../pages/Support'
import CartPage from '../pages/CartPage'
import ProductPage from '../pages/ProductPage'
import PlaceOrder from '../pages/PlaceOrder'
import ScrollTop from '../components/ScrollTop'

function App() {

  return (
    <>
      <BrowserRouter>
    <ScrollTop />
      <Loader />
      <Header />
      <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/faq' element={<HelpCenter/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/place_order' element={<PlaceOrder/>} />


          
      </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
