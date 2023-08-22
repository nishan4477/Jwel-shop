import React from 'react'
import Categories from '../Component/Categories'
import ProductList from '../Component/ProductList'
import { Link } from 'react-router-dom'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <>
    <div className="container">
        <div className="banner">
            <div className="row py-4">
                <div className="col-lg-4">
                    <h2>
                        THE NEW LIFETIME CLASSIC                    </h2>
                        <p>WE HAVE A FRESH NEW MAKER LINEUP. DISCOVER FUN AND ORGANIC SHAPES FROM SASKIA BESIALOV, TYLOR KRUGEER & HENDRIX</p>

                    <button className='btn my-4 btn-dark  btn-sm'>readmore</button>

                </div>


                <div className="col-lg-8">
                    <img className='w-100 hero-banner' src="https://images.unsplash.com/photo-1486396738692-c7a72d500435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" alt="" />



                </div>




            </div>



        </div>
        <hr/>

        {/* catagores started */}
        <div className='py-3'>
           <h2 className='pb-2 text-start'> BY CATAGORY</h2>
            <Categories/>
            <hr/>


        </div>


         {/* catagories ended */}

         {/* new in started */}
         <div className='py-3'>
           <h2 className='pb-2 text-start'> NEW IN</h2>
            <ProductList/>
            <hr/>


        </div>

         {/* new in ended */}

         {/* personalized services start */}
         <div className='personalised py-3 text-light '>
            <div className="row">
                <div className="col-lg-4"><h3>PERSONALISED SERVICE</h3></div>
                <div className="col-lg-4"><p>IF YOUR FINE JEWELRY SHOULD EVER REQUIRE SOME ALTERATIONS, WE'D BE MORE THAN PLEASED TO ROVIDE YOU WITH OUR BESPOKE SERVICES. PLEASE GET IN TOUCH WITH US</p></div>
                <div className="col-lg-4"></div>
            </div>
            <div className="row">
                <div className="col-lg-8"><button className='but mt-2 text-light btn btn-dark btn-outline-light'><Link to="/contact">CONTACT US</Link></button></div>
                <div className="col-lg-4"></div>
            </div>


         </div>

         {/* personalized services ended */}

         {/* launch event page started */}
         <div className="event border py-3">
            <div className="row ">
                <div className="col-lg-6">
                    <h3>SOFT LAUNCH AT OLIVOCARNE RESTAURANT ON ELIZABETH STREET</h3>
                    <p>THE SLEEK AND ELEGANT SETTING OF OLIVOCRANE LENT A MAGIC TOUCH TO THE INITIAL PREVIEW OF OUR FINE JEWELER COLLECTION.</p>
                    <Link to =""><small>GET AN INVITE <i className="fa-solid fa-arrow-right"></i></small></Link>
                </div>

                <div className="col-lg-6"><img className='w-100' src="https://images.unsplash.com/photo-1569921894261-ecda0b2cc1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80" alt="" /></div>
             
            </div>
            <hr />





         </div>






         {/* launch event page ended */}






        
        </div> 
    
    
    
    
    </>
  )
}

export default Home