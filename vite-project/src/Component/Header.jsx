import React from 'react'
import {Link} from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

export const Header = () => {
  return (
    <>
      <div className=' w-full flex h-14 bg-gray-800 text-white font-poppins justify-between items-center px-8'>
        <div> E-commerce App</div>
        <ul className=' flex gap-5'>
            <li> <Link to={"/"}>Home</Link></li>
            <li> <Link to={"/cart"} className=' flex gap-3 items-center'>View cart <span> <FaCartShopping /> </span></Link></li>
        </ul>
      </div>
    </>
    
  )
}
