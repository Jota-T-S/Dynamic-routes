import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { ProductDetailView } from '../components/ProductDetailView/ProductDetailView'
import { HomePage } from '../pages/HomePage/HomePage'
import { ShopPage } from '../pages/ShopPage/ShopPage'

export const WebRoutes = () => {
  
  return (
    <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/shop' element={<ShopPage />}> 
          <Route path=':id' element={<ProductDetailView />}/>
        </Route>
        {/* <Route path='/shop/:id' element={<ProductDetailView />}/> */}
      </Routes>
    </Router>
    </div>
  )
}
