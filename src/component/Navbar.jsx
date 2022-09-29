import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const items=useSelector((state)=>state.cart);
  return (
   <>
    <div  className="p-6 top-0 left-0 w-full lg:h-25 mx-auto bg-white rounded-l fixed shadow-lg flex justify-end space-x-4">
    <Link className='navLink' to='/'><div className="text-xl font-medium text-black cursor-pointer">Home</div></Link>
    <Link className='navLink' to='/cart'><div className="text-xl font-medium text-black cursor-pointer">Favorites</div></Link>
    <span className='cartCounter text-xl text-grey ' >Favorites items:{items.length}</span>
   </div>
 
  
     </>
  )
}

export default Navbar