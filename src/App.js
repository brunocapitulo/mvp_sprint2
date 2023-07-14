import Home from './pages/Home'
import ErroPagina from './pages/ErroPagina';
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
        <Route path="/notfound" element={<ErroPagina />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
