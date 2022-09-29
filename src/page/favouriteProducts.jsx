import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {remove} from '../store/cartStore'
const FavouriteProducts = () => {
  const products=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const handelRemove=(productId)=>{
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          products.map((el)=>(
              <div key={el._id} className="cartCart">
                <img src={el.avatar} alt=""/>
                <h5>{el.name}</h5>
                <h5>₹{el.price}</h5>
                <button  className='btn' onClick={()=>handelRemove(el._id)}>Remove</button>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default FavouriteProducts
