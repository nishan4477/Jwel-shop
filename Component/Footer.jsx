import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer>
    <div className='container'>
        <div className=" row mb-5 py-4">
            <div className="col-lg-3">
            <ul className='d-flex justify-content-start align-items-start gap-4 pb-2'>
                    <li><Link to=""><i className="fa-brands fa-square-facebook"></i></Link></li>
                    <li><Link to=""><i className="fa-brands fa-square-instagram"></i></Link></li>
                    <li><Link to=""><i className="fa-brands fa-square-pinterest"></i></Link></li>
              
                </ul>
              <p className='text-start ps-3'><Link to="mailto:nishansakha@gmail.com">nishansakha@gmail.com</Link></p>
            </div>

            <div className="col-lg-3">
                <h3 className='pb-2'>OUR POLICIES</h3>
                <ul>
                  <Link to=""> <li>RETURN AND REFUND POLICY</li></Link> 
                  <Link to=""> <li>SHIPPING POLICY</li></Link> 
                  <Link to=""><li>PRIVACY POLICY</li></Link> 
                </ul>
            </div>

            <div className="col-lg-3">
            <h3 className='pb-2'>CUSTOMER CARE   </h3>
            <ul>
            <Link to=""> <li>ABOUT US</li></Link> 
            <Link to="">  <li>CONTACT US</li></Link> 
            <Link to="">  <li>TERMS OF SERVICES</li></Link> 
            <Link to="">  <li>REFUND POLICY</li></Link> 
            <Link to="">  <li>SIZE GUIDE</li></Link> 
                   
                
                </ul>
            </div>

            <div className="col-lg-3">
                <h3 className='pb-2'>SIGN UP AND SAVE</h3>
                <p>Get Latest Update and Offers</p>
                <input className='mb-4' type='email ' name='mail' placeholder=' Enter your email'></input><br/>
                <button className='btn  px-5 btn-dark btn-outline-light'>Suscribe</button>
            </div>
        </div>
        <hr/>
        <small>@copyright nishansakha</small><br/>
        <img src="https://content.invisioncic.com/p289038/monthly_2021_09/1516160874_ScreenShot2021-09-14at12_37_36AM.png.d7c419bf833d655082effd031bfb630c.png" alt="" />





        </div>
        
    


   </footer>
  )
}

export default Footer