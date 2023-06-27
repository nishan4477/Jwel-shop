import React from 'react'

const ContactUs = () => {
  const a= (()=>{
    alert("Your message has been submitted")
  })
 
  return (
    <div data-aos="fade-up"  className='contact '>
                <div  className="contactbanner d-flex justify-content-center align-items-center ">
        <div   data-aos-anchor-placement="center-center" data-aos-delay="1000" className='text-light z-1'>
                    <h2  >CONTACT US</h2>
                </div>

        </div>
        
        <div className="container py-4 text-center">
            <h3 data-aos="fade-right" className='fw-1 text-dark'>Send a message to us!</h3> 
            <form className='border rounded shadow py-4'>
              <label for="name">FullName:</label>
                <input className='px-5 py-2 my-4 ' type='text' name='name' placeholder='Enter your FullName here ' autoComplete='off' required></input><br />
                <hr />
                <label for="location">Location:</label>
                <input className='px-5 py-2 my-4 ' type='text' name='location' placeholder='Enter your Location here ' autoComplete='off' required></input><br /><hr />
                <label for="mail">Email:</label>
                <input className='px-5 py-2 my-4 ' type='email' name='mail' placeholder='Enter your email address ' autoComplete='off' required></input><br /><hr />
                <label for="subject">Subject:</label>
                <input className='px-5 py-2 my-4 ' type='text' name='subject' placeholder='Subject '></input><br /><hr />
                <textarea className='px-5 py-2 my-4 ' rows="5" cols="40" name='msg' placeholder='Enter your message' ></textarea><br />
                <button className='btn btn-dark ' id="contactSubmit" type="submit" onClick={a}>Submit</button>

  
                


            </form>

            
     
        


        </div>



    </div>
  )
}

export default ContactUs