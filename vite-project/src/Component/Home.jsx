import React from 'react'
import product from '../Component/Product.json'
import { Product } from './Product'

export const Home = () => {
  return (
    <>
      <div className=' p-10 w-full grid grid-cols-4 gap-4'>
        
         {product.map((product)=>(
          <Product key={product._id} product={product}/>
        ))}
         
      </div>
      
    </> 
    

  )
}
