import { useState,useContext } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './Component/Header'
import { Home } from './Component/Home'
import { Cart } from './Component/Cart'
import { CartContext } from './Component/CartContext'


function App() {
  const [viwecart,Setviewcart] = useState([]);

  return ( 
    <>
    <CartContext.Provider value={{viwecart,Setviewcart}} >
        <BrowserRouter>
         <Header/>
       
         <div className=' font-poppins'>
           <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/cart" element={<Cart/>} />
           </Routes>
         </div>
    
         </BrowserRouter>
    </CartContext.Provider>
    
    </>
  )
}

export default App


