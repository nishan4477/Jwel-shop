import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail';
import ContactUs from '../Pages/ContactUs';






const Header = () => {
  return (
   <>
   <nav>
    <div className="container">
        <div className="row head d-flex align-items-center">
            <div className="col-lg-2">
              <Link to=""><h1>NISJWEL</h1></Link>  
            </div>

            <div className="col-lg-8">
                <ul className=' heads d-flex justify-content-start align-items-start gap-4'>
                    <li><Link to=""spy={true} smooth={true} offset={-100} duration={500}>SHOP</Link></li>
                    <li><Link to="" spy={true} smooth={true} offset={-100} duration={500}>COLLECTIONS</Link></li>
                    <li><Link to="/contact" spy={true} smooth={true} offset={-100} duration={500}>CONTACT US</Link></li>
                    <li><Link to="" spy={true} smooth={true} offset={-100} duration={500}>JOURNAL</Link></li>
                    <li><Link to="" spy={true} smooth={true} offset={-100} duration={500}>30%SALE</Link></li>

                </ul>
            </div>


            <div className="col-lg-2">
            <ul className='d-flex flex-end align-items-center fs-4'>
                    
                    
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