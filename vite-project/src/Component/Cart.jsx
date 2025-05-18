import React, { useState, useContext} from 'react'
import { CartContext } from './CartContext'
import { useEffect } from 'react';

export const Cart = () => {
  const [total,Settotal] = useState(0);
  const {viwecart,Setviewcart} = useContext(CartContext);

  function Removefromcart(productid){
    Setviewcart((precard)=> precard.filter((item)=> item._id !== productid));
    alert("Product removed");
  }

  useEffect(()=>{
    Settotal(viwecart.reduce((acc,currentvalue)=> acc + parseInt(currentvalue.price) ,0));
  },[viwecart]);

  return (
    <>
       <div className=' p-5'>
         <h2 className=' my-3'> Cart Items : {viwecart.length} </h2>
         <div className=' flex flex-col gap-3 border border-gray-400 shadow-lg p-2 rounded-sm'>
           {viwecart.length> 0 ? viwecart.map((product)=>(
            <div  key={product._id} className=' flex gap-4  border border-gray-200 shadow-sm rounded-sm'>
              <div>
                <img src={product.image} alt="Product_image" className='w-28 h-28 object-cover' />
              </div>

              <div className=' px-2 py-1'>
                <h2>{product.title}</h2>
                <h2 className=' font-medium'>₹ {product.price}</h2>
                <button className=' my-2 border px-2 py-1 rounded-sm text-sm bg-orange-500 text-white border-orange-500 cursor-pointer hover:bg-orange-400 ' onClick={()=>Removefromcart(product._id)}>Remove cart</button>
              </div>

            </div>
           )):(<div> Cart items empty </div>)}
         </div>

         <h2 className=' my-5 font-medium text-lg'> Total Price : ₹ {total}</h2>
       </div>
    </>
   
  )
}
