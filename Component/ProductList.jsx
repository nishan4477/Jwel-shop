import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import ProductData from '../Data/ProductData';

const ProductList = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <Carousel responsive={responsive}>
       
            {ProductData.map((b)=>(
                <div className="card border border-0 ">
                <div className="catbox text-start  ">
                    <Link to={`/details/${b.id}`}><img className='w-100' src={b.image} ></img></Link> 
                    <Link to={`/details/${b.id}`}> <p>{b.proname} <br />  <small className='text-danger ptminus'>$ {b.price}</small><br/><button className='btn btn-sm btn-dark'>Buy now</button></p></Link> 
                    
                    <div className="caticon">
                        <ul  className="d-flex justify-content-center gap-5 align-items-center text-light">
                           <Link to=""><li className="bg-light px-2 rounded"><i className="fa-solid fa-heart"></i></li></Link> 
                           <Link to=""><li className="bg-light px-2 rounded"><i className="fa-solid fa-message"></i></li></Link> 
                          
                        </ul>
                        </div>




                </div>
                </div>

            ))}
        


</Carousel>
    </>
  )
}

export default ProductList