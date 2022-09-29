import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {fetchProducts} from '../store/productStore';

const ProductDetails = () => {

const {data}=useSelector((state)=>state.product);
const [CurrentAllProduct,setCurrentAllProduct]=useState({});
const dispatch=useDispatch();
const {id}=useParams();
useEffect(()=>{
  if(data?.length ===0){
    dispatch(fetchProducts())
  }
  },[data?.length,dispatch]);

 useEffect(()=>{
    if(id){
        const tempData= data?.find((product)=>product._id===id);
        tempData && setCurrentAllProduct(tempData)
    }
 },[id])
 
  return (
    <div className="flex flex-wrap gap-5 justify-around items-start  object-center" >
     <div className="w-9/12  w-full border-2 rounded-xl  " key={CurrentAllProduct?._id}>
      <img src={CurrentAllProduct?.avatar} alt='' className='w-6/12 h-1/4 px-20 mx-56' />
        <h4>{CurrentAllProduct?.name}</h4>
        <h4>₹{CurrentAllProduct?.price}</h4>
        <h4 className="content-between p-2">{CurrentAllProduct?.description}</h4>
       
      </div>
      
    </div>
  )
}

export default ProductDetails
