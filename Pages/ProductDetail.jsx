import React from 'react'
import { useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData'

const ProductDetail = () => {
    let {id}=useParams()
    let Prodetail= ProductData.filter((items)=>items.id==id)
  return (
    <div className="details py-4">
     
      <div className="container">
      <h2 className='pb-4 text-center fw-2'>PRODUCT DETAILS </h2>
        <div className="row">
          {Prodetail.map((n)=>(
            <>
 <div className="col-lg-6"><img src={n.image}></img></div>
 <div className="col-lg-6 px-3 "><h3 className='pt-3'>{n.proname}</h3><p className='text-danger'>$ {n.price}</p>
 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima odit quia illo necessitatibus. Officia amet dolore culpa, quod obcaecati ducimus excepturi. Porro ad et aliquam sapiente dolore molestias recusandae magnam!</p>
 SIZE: <select id="size" name="size">
  <option value="small">S</option>
  <option value="medium">M</option>
  <option value="large">L</option>
  <option value="extra large">XL</option>
</select><br />
<button className='btn btn-dark mx-2 my-3'>ADD TO CART</button>
<button className='btn btn-dark mx-2 my-3'>BUY NOW</button>
<hr />

 </div>
 </>
          ))}
         
        </div>
      </div>
    </div>
  )
}

export default ProductDetail