import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail';
import ContactUs from '../Pages/ContactUs';
import {FaBars} from 'react-icons/fa' 






const Header = () => {
  return (
   <>
   <nav>
    <div className="container">
        <div className="row  d-flex align-items-center">
            <div className="col-lg-2 logo">
              <Link to=""><h1>NISJWEL</h1></Link>  
            </div>

            <div className="col-lg-8">
                <ul className=' heads d-flex justify-content-start  gap-4'>
                    <li><Link to="">SHOP</Link></li>
                    <li><Link to="" >COLLECTIONS</Link></li>
                    <li><Link to="/contact" >CONTACT US</Link></li>
                    <li><Link to="" >JOURNAL</Link></li>
                    <li><Link to="" >30%SALE</Link></li>

                </ul>
            </div>


            <div className="col-lg-2">
            <ul className='  fs-4'>
                    
                    
                    <li><Link to=""><i className="fa-solid fa-bag-shopping"></i></Link></li>
                

                </ul>
            </div>
        

        </div>


    </div>
   </nav>

  
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/details/:id' element={<ProductDetail/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        
      </Routes>
   </>
  )
}

export default Header