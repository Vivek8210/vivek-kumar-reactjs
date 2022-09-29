
import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../page/Home';

import ProductDetails from '../page/ProductDetails';
import AddToProduct from '../page/AddToProduct';
import Navbar from '../component/Navbar';
import FavouriteProducts from '../page/FavouriteProducts';
const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<FavouriteProducts/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
        <Route path='/addToProduct' element={<AddToProduct/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes
