import React from 'react'
import Categories from '../Component/Categories'

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

                    <button className='btn my-4 btn-dark btn-outline-light btn-sm'>readmore</button>

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
        
        </div> 
    
    
    
    
    </>
  )
}

export default Home