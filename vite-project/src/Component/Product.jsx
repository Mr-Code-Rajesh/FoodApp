import React, {useContext} from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CartContext } from './CartContext'

export const Product = ({product}) => {
    const {viwecart,Setviewcart} = useContext(CartContext);

function CartAdded(){
   Setviewcart([...viwecart,product]);
   alert("added");
}

  return (
    <div className='w-72 h-1/3 shadow-sm rounded-sm ring ring-gray-200 cursor-pointer  transition-all'>
        <div className=''>
            <img src={product.image} alt="Product-Image" className='w-full h-60 object-cover hover:brightness-100 brightness-90 rounded-tl-sm rounded-tr-sm' />
        </div>

        <div className=' p-2 bg-gray-100/50 shadow-sm  ring ring-gray-200 rounded-bl-sm rounded-br-sm'>
            <h3 className=' font-medium'>{product.title}</h3>
            <h3 className=' line-clamp-2 my-1'>{product.description}</h3>
            <h3 className=' flex'> 
                {[...Array(product.rating)].map((_,index)=>(
                   <span className=' text-yellow-400 text-xl mb-1' key={index}> <MdOutlineStarPurple500 /></span>
                ))}
            </h3>
            <h3 className=' m-1.5'> <span className='font-medium text-lg'>₹{product.price} M.R.P: </span> <span className=' line-through'> ₹{product.oldPrice}</span> <span className=' text-green-500 font-medium'>(20% off)</span></h3>
            <button className=' border border-blue-500 text-white bg-blue-500 py-1 px-3 rounded-sm text-sm hover:bg-blue-400 cursor-pointer' onClick={CartAdded}>Add to cart</button>
        </div>
    </div>
  )
}
