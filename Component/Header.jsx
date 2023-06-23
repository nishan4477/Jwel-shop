import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';

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
                    <li><Link to="">SHOP</Link></li>
                    <li><Link to="">COLLECTIONS</Link></li>
                    <li><Link to="">CONTACT US</Link></li>
                    <li><Link to="">JOURNAL</Link></li>
                    <li><Link to="">30%SALE</Link></li>

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
        
      </Routes>
   </>
  )
}

export default Header