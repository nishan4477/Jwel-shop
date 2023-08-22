import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail';
import ContactUs from '../Pages/ContactUs';
import {FaBars} from 'react-icons/fa' 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';






const Header = () => {
  return (
   <>
   {/* <nav>
    <div className="container">
        <div className="row  d-flex align-items-center">
            <div className="col-lg-2 logo">
              <Link to=""><h1 className='fs-3'>NISJWEL</h1></Link>  
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
   </nav> */}

<Navbar className='sticky-top' bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className='fs-2' href="/">Nishjwel</Navbar.Brand>
          <Nav className="ms-auto me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#features">Collection</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href=""><i className="fa-solid fa-bag-shopping"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/details/:id' element={<ProductDetail/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        
      </Routes>
   </>
  )
}

export default Header